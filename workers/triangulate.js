
// @copyright
//   © 2012-2020 Jarosław Foksa

importScripts("/node_modules/delaunator/delaunator.min.js");
importScripts("/node_modules/seedrandom/seedrandom.min.js");

let defaultOptions = {
  // Seed used by the random number generator
  seed: 100,
  // Size of an individual cell, relative to the total image size (0.0 - 1.0)
  cellSize: 0.1,
  // Variance
  variance: 0.75,
  // Either "paths" or "polygons"
  renderAs: "paths",
  // Precision to be used by SVG geometry attributes such as "x" or "d"
  geometryPrecision: 3
};

self.addEventListener("message", (event) => {
  let [imageBitmap, options] = event.data;
  options = mergeOptions(defaultOptions, options);

  let imageData = getImageData(imageBitmap);
  let {width, height} = imageBitmap;
  let {variance, seed, renderAs} = options;
  let cellSize = options.cellSize * Math.min(width, height);

  if (cellSize < width * 0.02) {
    cellSize = round(width * 0.02);
  }

  let points = [];
  let artworkSVG = "";

  // Determine points
  {
    let cellsX = Math.floor((width + 4 * cellSize) / cellSize);
    let cellsY = Math.floor((height + 4 * cellSize) / cellSize);
    let bleedX = ((cellsX * cellSize) - width)/2;
    let bleedY = ((cellsY * cellSize) - height)/2;
    let absVariance = cellSize * variance / 2;
    let getSeededRandomNumber = new Math.seedrandom(seed);

    for (let i = -bleedX; i < width + bleedX; i += cellSize) {
      for (let j = -bleedY; j < height + bleedY; j += cellSize) {
        let x = (i + cellSize * 0.5) + (getSeededRandomNumber() * absVariance * 2 - absVariance);
        let y = (j + cellSize * 0.5) + (getSeededRandomNumber() * absVariance * 2 - absVariance);
        points.push([Math.floor(x), Math.floor(y)]);
      }
    }
  }

  // Determine artworkSVG
  {
    let geomIndices = Delaunator.from(points).triangles;
    artworkSVG = `<svg viewBox="0 0 ${width} ${height}" style="shape-rendering: crispedges;">`;

    for (let i = 0; i < geomIndices.length; i += 3) {
      let polygon = [geomIndices[i], geomIndices[i+1], geomIndices[i+2]].map((i) => points[i]);
      let centroid = getCentroid(polygon);
      let color = getColor(centroid.x, centroid.y, imageBitmap, imageData)

      if (color !== "rgba(0,0,0,0)") {
        let clippedPolygonPoints = intersectRectWithPolygon([0, 0, imageBitmap.width, imageBitmap.height], polygon);

        if (clippedPolygonPoints.length > 0) {
          for (let point of clippedPolygonPoints) {
            point[0] = round(point[0], options.geometryPrecision);
            point[1] = round(point[1], options.geometryPrecision);
          }

          if (renderAs === "paths") {
            let [firstPolygonPoint, ...otherPolygonPoints] = clippedPolygonPoints;
            let d = `M ${firstPolygonPoint[0]} ${firstPolygonPoint[1]}`;

            for (let point of otherPolygonPoints) {
              d += ` L ${point[0]} ${point[1]}`;
            }

            d += ` Z`;
            artworkSVG += `<path d="${d}" style="fill: ${color};"></path>`;
          }
          else if (renderAs === "polygons") {
            let serializedPoints = clippedPolygonPoints.map(point => `${point[0]} ${point[1]}`).join(" ");
            artworkSVG += `<polygon points="${serializedPoints}" style="fill: ${color};"></polygon>`;
          }
        }
      }
    }

    artworkSVG += `</svg>`;
  }

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

let getColor = (cx, cy, imageBitmap, imageData) => {
  cx = Math.round(cx);
  cy = Math.round(cy);

  // Adjust the center point if it is outside the image bounds
  {
    let edgeOffset = 1;

    if (cx < 0) {
      cx = edgeOffset;
    }
    else if (cx >= imageBitmap.width) {
      cx = imageBitmap.width - edgeOffset;
    }

    if (cy < 0) {
      cy = edgeOffset;
    }
    else if (cy >= imageBitmap.height) {
      cy = imageBitmap.height - edgeOffset;
    }
  }

  let pixelIndex = cx + (cy * imageBitmap.width);
  let colorData = imageData[pixelIndex];
  let color = "rgba(0,0,0,0)";

  if (colorData) {
    color = serializeColor(...colorData);
  }

  return color;
};

let getCentroid = (d) => {
  let centroid = {
    x: (d[0][0] + d[1][0] + d[2][0]) / 3,
    y: (d[0][1] + d[1][1] + d[2][1]) / 3
  };

  return centroid;
};

let round = (number, precision = 0) => {
  let coefficient = Math.pow(10, precision);
  return Math.round((number + Number.EPSILON) * coefficient) / coefficient;
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

// @src
//   https://github.com/mapbox/lineclip
let intersectRectWithPolygon = (bbox, polygonPoints) => {
  let intersect = (a, b, edge, bbox) => {
    return edge & 8 ? [a[0] + (b[0] - a[0]) * (bbox[3] - a[1]) / (b[1] - a[1]), bbox[3]] :
           edge & 4 ? [a[0] + (b[0] - a[0]) * (bbox[1] - a[1]) / (b[1] - a[1]), bbox[1]] :
           edge & 2 ? [bbox[2], a[1] + (b[1] - a[1]) * (bbox[2] - a[0]) / (b[0] - a[0])] :
           edge & 1 ? [bbox[0], a[1] + (b[1] - a[1]) * (bbox[0] - a[0]) / (b[0] - a[0])] : null;
  };

  let bitCode = (p, bbox) => {
    let code = 0;

    if (p[0] < bbox[0]) code |= 1;
    else if (p[0] > bbox[2]) code |= 2;
    if (p[1] < bbox[1]) code |= 4;
    else if (p[1] > bbox[3]) code |= 8;

    return code;
  };

  let result;

  for (let edge = 1; edge <= 8; edge *= 2) {
    let prev = polygonPoints[polygonPoints.length - 1];
    let prevInside = !(bitCode(prev, bbox) & edge);

    result = [];

    for (let i = 0; i < polygonPoints.length; i++) {
      let p = polygonPoints[i];
      let inside = !(bitCode(p, bbox) & edge);

      if (inside !== prevInside) {
        result.push(intersect(prev, p, edge, bbox));
      }
      if (inside) {
        result.push(p);
      }

      prev = p;
      prevInside = inside;
    }

    polygonPoints = result;

    if (!polygonPoints.length) {
      break;
    }
  }

  return result;
};
