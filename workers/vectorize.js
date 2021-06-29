
// @copyright
//   © 2012-2020 Jarosław Foksa

importScripts("/node_modules/imagetracerjs/imagetracer_v1.2.6.js");

let defaultOptions = {
  // Bitmap will be downscaled if its with or height is bigger than working size
  workingSize: 512,
  // Blur radius
  blurRadius: 0,
  // RGBA delta treshold for selective Gaussian blur preprocessing
  blurDelta: 20,
  // Number of colors to use
  numberOfColors: 16,
  // Color quantization will randomize a color if fewer pixels than TOTAL PIXELS * MIN RATIO has it
  minColorRatio: 0,
  // Color quantization will be repeated this many times
  colorQuantCycles: 3,
  // Color sampling, either 0 (none), 1 (random) or 2 (deterministic)
  colorSampling: 2,
  // Error treshold for straight lines
  ltres: 1,
  // Error treshold for quadratic splines
  qtres: 1,
  // Edge node paths shorter than this will be discarded for noise reduction
  pathOmit: 8,
  // Enhance right angle corners
  rightAngleEnhance: true,
  // The width of the stroke of generated SVG elements
  strokeWidth: 1,
  // Enable line filter for noise reduction
  lineFilter: true,
  // Whether to render white SVG paths
  ignoreWhite: false,
  // Precision to be used by SVG "d" attribute
  geometryPrecision: 3
};

self.addEventListener("message", (event) => {
  let [imageBitmap, options] = event.data;
  let {entries, fromEntries} = Object;
  options = mergeOptions(defaultOptions, options);

  let scale = Math.max(imageBitmap.width / options.workingSize, imageBitmap.height / options.workingSize, 1);
  let workingWidth  = imageBitmap.width  / scale;
  let workingHeight = imageBitmap.height / scale;

  let canvas = new OffscreenCanvas(workingWidth, workingHeight);
  let context = canvas.getContext("2d");

  context.beginPath();
  context.rect(0, 0, workingWidth, workingHeight);
  context.fillStyle = "white";
  context.fill();
  context.drawImage(imageBitmap, 0, 0, workingWidth, workingHeight);

  let imageData = context.getImageData(0, 0, workingWidth, workingHeight);

  let traceData = ImageTracer.imagedataToTracedata(imageData, {
    blurradius:        options.blurRadius,
    blurdelta:         options.blurDelta,
    numberofcolors:    options.numberOfColors,
    mincolorratio:     options.minColorRatio,
    colorquantcycles:  options.colorQuantCycles,
    colorsampling:     options.colorSampling,
    ltres:             options.ltres,
    qtres:             options.qtres,
    pathomit:          options.pathOmit,
    rightangleenhance: options.rightAngleEnhance
  });

  let tracedArtworkSVG = serializeTraceData(traceData, scale, options);
  self.postMessage(tracedArtworkSVG);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utility functions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let mergeOptions = (defaultOptions, customOptions) => {
  let mergedOptions = {};

  for (let [key, value] of Object.entries(defaultOptions)) {
    mergedOptions[key] = (customOptions[key] !== undefined) ? customOptions[key] : defaultOptions[key];
  }

  return mergedOptions;
};

let round = (number, precision = 0) => {
  let coefficient = Math.pow(10, precision);
  return Math.round((number + Number.EPSILON) * coefficient) / coefficient;
};

let serializeTraceData = (traceData, scale, options) => {
  let width  = round(traceData.width  * scale, options.geometryPrecision);
  let height = round(traceData.height * scale, options.geometryPrecision);
  let svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`;

  // Convert white paths to transparent (https://github.com/jankovicsandras/imagetracerjs/issues/26)
  if (options.ignoreWhite === true) {
    for (let i = 0; i < traceData.palette.length; i += 1) {
      let whiteness = traceData.palette[i].r + traceData.palette[i].g + traceData.palette[i].b;
      let whiteTreshold = 600; // r > =200 g > =200 b >= 200 will be considered white

      if (whiteness >= whiteTreshold) {
        traceData.palette[i].r = 0;
        traceData.palette[i].g = 0;
        traceData.palette[i].b = 0;
        traceData.palette[i].a = 0;
      }
    }
  }

  for (let layerIndex = 0; layerIndex < traceData.layers.length; layerIndex += 1) {
    for (let pathIndex = 0; pathIndex < traceData.layers[layerIndex].length; pathIndex += 1) {
      if (!traceData.layers[layerIndex][pathIndex].isholepath) {
        svgString += serializeTraceDataPath(traceData, layerIndex, pathIndex, scale, options);
      }
    }
  }

  svgString += `</svg>`;
  return svgString;
};

let serializeTraceDataPath = (traceData, layerIndex, pathIndex, scale, options) => {
  let layer = traceData.layers[layerIndex];
  let alpha = round(traceData.palette[layerIndex].a / 255, 2);
  let smp = layer[pathIndex];
  let styleAttr = "";
  let dAttr = "";

  if (alpha === 0) {
    return "";
  }
  if (options.lineFilter && smp.segments.length < 3) {
    return "";
  }

  // Determine "style" attribute
  {
    let color = traceData.palette[layerIndex];
    let {r, g, b} = color;
    let properties = [];

    properties.push(`fill: rgba(${r}, ${g}, ${b}, ${alpha});`);

    if (options.strokeWidth > 0) {
      properties.push(`stroke: rgba(${r}, ${g}, ${b}, ${alpha});`);

      if (options.strokeWidth !== 1) {
        properties.push(`stroke-width: ${options.strokeWidth}px;`);
      }
    }

    styleAttr = `style="${properties.join(" ")}"`;
  }

  // Determine "d" attribute
  {
    dAttr += `d="`;

    // Non-hole
    {
      let x1 = round(smp.segments[0].x1 * scale, options.geometryPrecision);
      let y1 = round(smp.segments[0].y1 * scale, options.geometryPrecision);
      dAttr += `M ${x1} ${y1} `;

      for(let pcnt=0; pcnt<smp.segments.length; pcnt += 1) {
        let type = smp.segments[pcnt].type;
        let x2 = round(smp.segments[pcnt].x2 * scale, options.geometryPrecision);
        let y2 = round(smp.segments[pcnt].y2 * scale, options.geometryPrecision);
        dAttr += `${type} ${x2} ${y2} `;

        if (smp.segments[pcnt].hasOwnProperty("x3")) {
          let x3 = round(smp.segments[pcnt].x3 * scale, options.geometryPrecision);
          let y3 = round(smp.segments[pcnt].y3 * scale, options.geometryPrecision);
          dAttr += `${x3} ${y3} `;
        }
      }

      dAttr += `Z `;
    }

    // Holes
    for (let hcnt = 0; hcnt < smp.holechildren.length; hcnt += 1) {
      let hsmp = layer[smp.holechildren[hcnt]];

      if (hsmp.segments[hsmp.segments.length-1].hasOwnProperty("x3")) {
        let x3 = round(hsmp.segments[hsmp.segments.length-1].x3 * scale);
        let y3 = round(hsmp.segments[hsmp.segments.length-1].y3 * scale);
        dAttr += `M ${x3} ${y3} `;
      }
      else {
        let x2 = round(hsmp.segments[hsmp.segments.length-1].x2 * scale);
        let y2 = round(hsmp.segments[hsmp.segments.length-1].y2 * scale);
        dAttr += `M ${x2} ${y2} `;
      }

      for (let pcnt = hsmp.segments.length - 1; pcnt >= 0; pcnt -= 1) {
        dAttr += `${hsmp.segments[pcnt].type} `;

        if (hsmp.segments[pcnt].hasOwnProperty("x3")) {
          let x2 = round(hsmp.segments[pcnt].x2 * scale);
          let y2 = round(hsmp.segments[pcnt].y2 * scale);
          dAttr += `${x2} ${y2} `;
        }

        let x1 = round(hsmp.segments[pcnt].x1 * scale);
        let y1 = round(hsmp.segments[pcnt].y1 * scale);
        dAttr += `${x1} ${y1} `;
      }

      dAttr += "Z ";
    }

    dAttr += `"`;
  }

  return `<path ${dAttr} ${styleAttr}></path>`;
};
