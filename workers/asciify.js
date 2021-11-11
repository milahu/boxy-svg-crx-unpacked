
// @copyright
//   © 2012-2020 Jarosław Foksa

let defaultOptions = {
  // Number of columns
  columns: 20,
  // Number of rows
  rows: 20,
  // Allowed ASCII chars, ordered by intensity
  chars: "·*+=$@#",
  // Either "sample" or "custom"
  charColorSource: "custom",
  // Used when charColorSource is set to "custom"
  charCustomColor: "#ffffff",
  // Either "sample", "custom"
  charBackgroundColorSource: "sample",
  // Used when charBackgroundColorSource is set to "custom"
  charCustomBackgroundColor: "#000000",
  // Font size relative to the cell height, in range between 0.01 to 2.00
  fontSize: 1,
  // Precision to be used by SVG geometry attributes such as "x" and "y"
  geometryPrecision: 3
};

self.addEventListener("message", (event) => {
  let [imageBitmap, options] = event.data;
  options = mergeOptions(defaultOptions, options);

  let imageData = getImageData(imageBitmap);
  let {width, height} = imageBitmap;
  let cellWidth = width / options.columns;
  let cellHeight = height / options.rows;
  let fontSize = cellHeight * options.fontSize;
  let artworkSVG = `<svg viewBox="0 0 ${width} ${height}">`;

  // Draw rects
  {
    for (let row = 0; row < options.rows; row += 1) {
      let y = row * cellHeight;
      let cy = y + (cellHeight/2);

      for (let column = 0; column < options.columns; column += 1) {
        let x = column * cellWidth;
        let cx = x + (cellWidth/2);
        let [r, g, b, a] = getColor(cx/width, cy/height, imageBitmap, imageData);

        if (a > 0) {
          let sampledColor = serializeColor(r, g, b, a);
          let color = options.charBackgroundColorSource === "sample" ? sampledColor : options.charCustomBackgroundColor;

          let attributes = serializedAttributes({
            "x":      round(x,          options.geometryPrecision),
            "y":      round(y,          options.geometryPrecision),
            "width":  round(cellWidth , options.geometryPrecision),
            "height": round(cellHeight, options.geometryPrecision),
            "style": `fill: ${color};`
          });

          artworkSVG += `<rect ${attributes}></rect>`
        }
      }
    }
  }

  // Draw texts
  {
    for (let row = 0; row < options.rows; row += 1) {
      let y = row * cellHeight;
      let cy = y + (cellHeight/2);

      let textAttributes = serializedAttributes({
        y:      round(y + cellHeight/2, options.geometryPrecision),
        style: `white-space: pre; ` +
               `text-anchor: middle; ` +
               `dominant-baseline: central; ` +
               `font-family: monospace; ` +
               `font-size: ${fontSize}px;`
      });

      artworkSVG += `<text ${textAttributes}>`;

      for (let column = 0; column < options.columns; column += 1) {
        let x = column * cellWidth;
        let cx = x + (cellWidth/2);
        let [r, g, b, a] = getColor(cx/width, cy/height, imageBitmap, imageData);
        let intensity = (r + g + b) * (a/255);
        let precision = 255 * 3 / (options.chars.length - 1);
        let rawChar = options.chars[Math.round(intensity / precision)];

        if (a > 0) {
          let sampledColor = serializeColor(r, g, b, a);
          let color = options.charColorSource === "sample" ? sampledColor : options.charCustomColor;

          let tspanAttributes = serializedAttributes({
            "x":     round(x + cellWidth/2, options.geometryPrecision),
            "style":`fill: ${color};`
          });

          artworkSVG += `<tspan ${tspanAttributes}>${rawChar}</tspan>`;
        }
      }

      artworkSVG += `</text>`;
    }
  }

  artworkSVG += "</svg>";
  self.postMessage(artworkSVG);
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

let getImageData = (imageBitmap) => {
  let canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
  let context = canvas.getContext("2d");
  context.drawImage(imageBitmap, 0, 0);
  let rawImageData = context.getImageData(0, 0, imageBitmap.width, imageBitmap.height);
  let imageData = [];

  for (let i = 0; i < rawImageData.data.length; i += 4) {
    imageData.push([
      rawImageData.data[i],
      rawImageData.data[i + 1],
      rawImageData.data[i + 2],
      rawImageData.data[i + 3]
    ]);
  }

  return imageData;
};

let getColor = (x, y, imageBitmap, imageData) => {
  let cx = Math.round(x * imageBitmap.width);
  let cy = Math.round(y * imageBitmap.height);
  let pixelIndex = cx + (cy * imageBitmap.width);
  let colorData = imageData[pixelIndex] || [0, 0, 0, 0];
  return colorData;
};

let serializeColor = (r, g, b, a) => {
  let componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  if (a === 255) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  else if (a === 0) {
    return `rgba(0,0,0,0)`;
  }
  else {
    a = round(a/255, 2);
    return `rgba(${r},${g},${b},${a})`;
  }
};

let serializedAttributes = (attributes) => {
  return Object.entries(attributes).map(([name, val]) => `${name}="${val}"`).join(" ");
};
