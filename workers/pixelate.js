
// @copyright
//   © 2012-2020 Jarosław Foksa

let defaultOptions = {
  // Number of columns
  columns: 20,
  // Number of rows
  rows: 20,
  // Either "rectangle" or "ellipse"
  pixelShape: "rectangle",
  // Between 0.0 and 1.0
  pixelSize: 0.9,
  // Either "shapes" or "paths"
  renderAs: "paths",
  // Precision to be used by SVG geometry attributes such as "x" and "y"
  geometryPrecision: 3
};

self.addEventListener("message", (event) => {
  let [imageBitmap, options] = event.data;
  options = mergeOptions(defaultOptions, options);

  let imageData = getImageData(imageBitmap);
  let {width, height} = imageBitmap;
  let {columns, rows, pixelShape, pixelSize, renderAs, geometryPrecision} = options;
  let cellWidth = width / columns;
  let cellHeight = height / rows;
  let artworkSVG = `<svg viewBox="0 0 ${width} ${height}">`;

  if (pixelShape === "rectangle") {
    for (let column = 0; column < columns; column += 1) {
      for (let row = 0; row < rows; row += 1) {
        let x = column * cellWidth;
        let y = row * cellHeight;
        let cx = x + (cellWidth/2);
        let cy = y + (cellHeight/2);
        let color = getColor(cx/width, cy/height, imageBitmap, imageData);

        if (color !== "rgba(0,0,0,0)") {
          let scaledCellWidth = cellWidth * pixelSize;
          let scaledCellHeight = cellHeight * pixelSize;
          let scaledX = x + cellWidth/2 - scaledCellWidth/2;
          let scaledY = y + cellHeight/2 - scaledCellHeight/2;

          if (renderAs === "shapes") {
            let attrs = {
              "x":      round(scaledX, geometryPrecision),
              "y":      round(scaledY, geometryPrecision),
              "width":  round(scaledCellWidth, geometryPrecision),
              "height": round(scaledCellHeight, geometryPrecision),
              "style": `fill: ${color};`
            };

            let serializedAttrs = Object.entries(attrs).map(([name, val]) => `${name}="${val}"`).join(" ");
            artworkSVG += `<rect ${serializedAttrs}></rect>`;
          }
          else if (renderAs === "paths") {
            let pathData = [
              ["M", round(scaledX, geometryPrecision), round(scaledY, geometryPrecision)],
              ["H", round(scaledX + scaledCellWidth, geometryPrecision)],
              ["V", round(scaledY + scaledCellHeight, geometryPrecision)],
              ["H", round(scaledX, geometryPrecision)],
              ["V", round(scaledY, geometryPrecision)],
              ["Z"]
            ];

            let attrs = {
              "d": pathData.map($0 => $0.join(" ")).join(" "),
              "style": `fill: ${color};`
            };

            let serializedAttrs = Object.entries(attrs).map(([name, val]) => `${name}="${val}"`).join(" ");
            artworkSVG += `<path ${serializedAttrs}></path>`;
          }
        }
      }
    }
  }

  else if (pixelShape === "ellipse") {
    for (let column = 0; column < columns; column += 1) {
      for (let row = 0; row < rows; row += 1) {
        let x = column * cellWidth;
        let y = row * cellHeight;
        let cx = x + (cellWidth/2);
        let cy = y + (cellHeight/2);
        let rx = (cellWidth / 2) * pixelSize;
        let ry = (cellHeight / 2) * pixelSize;
        let color = getColor(cx/width, cy/height, imageBitmap, imageData);

        if (color !== "rgba(0,0,0,0)") {
          cx = round(cx, geometryPrecision);
          cy = round(cy, geometryPrecision);
          rx = round(rx, geometryPrecision);
          ry = round(ry, geometryPrecision);

          if (renderAs === "shapes") {
            let attrs = {
              "cx": round(cx, geometryPrecision),
              "cy": round(cy, geometryPrecision),
              "rx": round(rx, geometryPrecision),
              "ry": round(ry, geometryPrecision),
              "style": `fill: ${color};`
            };

            let serializedAttrs = Object.entries(attrs).map(([name, val]) => `${name}="${val}"`).join(" ");
            artworkSVG += `<ellipse ${serializedAttrs}></ellipse>`;
          }
          else if (renderAs === "paths") {
            let p = geometryPrecision;

            let pathData = [
              ["M", round(cx - rx, p), round(cy, p)],
              ["a", round(rx, p),      round(ry, p), 0, 1, 0, round(rx * 2, p)   , 0],
              ["a", round(rx, p),      round(ry, p), 0, 1, 0, round(-(rx * 2), p), 0],
              ["Z"]
            ];

            let attrs = {
              "d": pathData.map($0 => $0.join(" ")).join(" "),
              "style": `fill: ${color};`
            };

            let serializedAttrs = Object.entries(attrs).map(([name, val]) => `${name}="${val}"`).join(" ");
            artworkSVG += `<path ${serializedAttrs}></path>`;
          }
        }
      }
    }
  }

  artworkSVG += `</svg>`;
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
  let colorData = imageData[pixelIndex];
  let color = "rgba(0,0,0,0)";

  if (colorData) {
    color = serializeColor(...colorData);
  }

  return color;
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
