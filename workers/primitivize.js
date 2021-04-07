
// @copyright
//   © 2019-2020 Jarosław Foksa
//   © 2016-2018 Ondřej Žára
//   © 2016 Michael Fogleman
// @info
//   Based on https://github.com/ondras/primitive.js and https://github.com/fogleman/primitive

importScripts("/node_modules/seedrandom/seedrandom.min.js");

let defaultOptions = {
  // Either "triangles", "rectangles"
  shapesType: ["triangles"],
  // Draw given number of shapes (large number: better results, slower)
  shapesNumber: 40,
  // Alpha of the shape fill
  shapesAlpha: 0.7,
  // Whether to randomize the alpha
  autoAdjustShapesAlpha: true,
  // Bitmap will be downscaled if its with or height is bigger than working size
  workingSize: 128,
  // Color used to draw the canvas background, meaningful only when the provided image is semi-transparent
  backgroundColor: "#ffffff",
  // Start every iteration with given number of random shapes (larger number: more precise results, slower)
  shapesPerIteration: 100,
  // Stop shape optimization after given number of failures (larger number: more precise results, slower)
  maxMutations: 16,
  // Seed used by the random number generator
  seed: 100,
  // Either "visible" or "cut"
  overflow: "visible",
  // Either "paths" or "shapes"
  renderAs: "paths",
  // Precision to be used by SVG geometry attributes such as "d" or "points"
  geometryPrecision: 3,
  // Precision to be used by SVG "transform" attribute
  transformPrecision: 6
};

let tracer = null;

self.addEventListener("message", (event) => {
  let [imageBitmap, options] = event.data;
  options = mergeOptions(defaultOptions, options);
  tracer = new Tracer(imageBitmap, options);
  let {geometryPrecision, transformPrecision} = options;

  self.postMessage([0, `<svg viewBox="0 0 ${imageBitmap.width} ${imageBitmap.height}">`]);

  tracer.onStep = (step) => {
    let progress = tracer.getProgress();
    let styleAttr = `style="fill: ${serializeColor(step.color[0], step.color[1], step.color[2], step.alpha)};"`;
    let shapeSVG = "";

    // Triangle
    if (step.shape instanceof Triangle) {
      let points = step.shape.points.map(([x, y]) => new DOMPoint(x * tracer.scale, y * tracer.scale));

      if (options.overflow === "cut") {
        let clippingRect = new DOMRect(0, 0, imageBitmap.width, imageBitmap.height);
        points = intersectRectWithTriangle(clippingRect, points);
        points = points.map(({x, y}) => new DOMPoint(round(x, geometryPrecision), round(y, geometryPrecision)));
      }

      let [firstPoint, ...otherPoints] = points;
      let dAttr = `d="M ${firstPoint.x} ${firstPoint.y} ` + otherPoints.map(({x, y}) => `L ${x} ${y}`).join(" ") + ` Z"`;
      shapeSVG += `<path ${dAttr} ${styleAttr}></path>`;
    }

    // Rectangle
    else if (step.shape instanceof Rectangle) {
      let x      = step.shape.bbox.left   * tracer.scale;
      let y      = step.shape.bbox.top    * tracer.scale;
      let width  = step.shape.bbox.width  * tracer.scale;
      let height = step.shape.bbox.height * tracer.scale;
      let rotationMatrix = null;

      if (step.shape.angle !== 0) {
        let originPoint = new DOMPoint(x + width/2, y + height/2);
        rotationMatrix = new DOMMatrix();
        rotationMatrix.translateSelf(originPoint.x, originPoint.y);
        rotationMatrix.rotateSelf(radToDeg(step.shape.angle));
        rotationMatrix.translateSelf(-originPoint.x, -originPoint.y);
      }

      if (options.renderAs === "shapes") {
        x = round(x, geometryPrecision);
        y = round(y, geometryPrecision);
        width = round(width, geometryPrecision);
        height = round(height, geometryPrecision);
        let transformAttr = "";

        if (rotationMatrix) {
          transformAttr = `transform="` + serializeMatrix(roundMatrix(rotationMatrix, transformPrecision)) + `"`;
        }

        shapeSVG = `<rect x="${x}" y="${y}" width="${width}" height="${height}" ${transformAttr} ${styleAttr}></rect>`;
      }
      else if (options.renderAs === "paths") {
        if (options.overflow === "visible") {
          let pathData = [["M", x, y], ["H", x + width], ["V", y + height], ["H", x], ["V", y], ["Z"]];
          let dAttr = `d="` + pathData.map($0 => $0.join(" ")).join(" ") + `"`;
          let transformAttr = "";

          if (rotationMatrix) {
            transformAttr = `transform="` + serializeMatrix(roundMatrix(rotationMatrix, transformPrecision)) + `"`;
          }

          shapeSVG += `<path ${dAttr} ${transformAttr} ${styleAttr}></path>`;
        }
        else if (options.overflow === "cut") {
          let clippingRect = new DOMRect(0, 0, imageBitmap.width, imageBitmap.height);

          let points = [
            new DOMPoint(x, y),
            new DOMPoint(x + width, y),
            new DOMPoint(x + width, y + height),
            new DOMPoint(x, y + height)
          ];

          if (rotationMatrix) {
            points = points.map(point => point.matrixTransform(rotationMatrix));
          }

          points = intersectRectWithTriangle(clippingRect, points);
          points = points.map(({x, y}) => new DOMPoint(round(x, geometryPrecision), round(y, geometryPrecision)));

          let [firstPoint, ...otherPoints] = points;
          let dAttr = `d="M ${firstPoint.x} ${firstPoint.y} ` + otherPoints.map(({x, y}) => `L ${x} ${y}`).join(" ") + ` Z"`
          shapeSVG += `<path ${dAttr} ${styleAttr}></path>`;
        }
      }
    }

    self.postMessage([progress, shapeSVG]);
  };

  tracer.onEnd = (state) => {
    self.postMessage([1, `</svg>`]);
  };

  tracer.start();
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

let serializeColor = (r, g, b, a) => {
  let componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  if (a === 1) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  else {
    a = round(a, 2);
    return `rgba(${r},${g},${b},${a})`;
  }
};

let serializeMatrix = (matrix) => {
  return `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, ${matrix.e}, ${matrix.f})`;
};

let radToDeg = (radians) => {
  let degrees = radians * (180 / Math.PI);
  return degrees;
};

let round = (number, precision = 0) => {
  let coefficient = Math.pow(10, precision);
  return Math.round((number + Number.EPSILON) * coefficient) / coefficient;
};

let roundMatrix = (mtx, precision) => {
  if (mtx.is2D) {
    return new DOMMatrix([
      round(mtx.a, precision), round(mtx.b, precision), round(mtx.c, precision),
      round(mtx.d, precision), round(mtx.e, precision), round(mtx.f, precision)
    ]);
  }
  else {
    return new DOMMatrix([
      round(mtx.m11, precision), round(mtx.m12, precision), round(mtx.m13, precision), round(mtx.m14, precision),
      round(mtx.m21, precision), round(mtx.m22, precision), round(mtx.m23, precision), round(mtx.m24, precision),
      round(mtx.m31, precision), round(mtx.m32, precision), round(mtx.m33, precision), round(mtx.m34, precision),
      round(mtx.m41, precision), round(mtx.m42, precision), round(mtx.m43, precision), round(mtx.m44, precision)
    ]);
  }
};

let clamp = (x, min, max) => {
  return Math.max(min, Math.min(max, x));
};

let distanceToDifference = (distance, pixels) => {
  return Math.pow(distance * 255, 2) * (3 * pixels);
};

let differenceToDistance = (difference, pixels) => {
  return Math.sqrt(difference / (3 * pixels)) / 255;
};

let getCenterPoint = (...ps) => {
  let sum = ps.reduce((r, x) => [r[0] + x[0], r[1] + x[1]]);
  return [sum[0] / ps.length, sum[1] / ps.length]
};

let toVector = (p1, p2) => {
  return [(p2[0] - p1[0]), (p2[1] - p1[1])]
};

let vectorx = (v, k) => {
  return [k * v[0], k * v[1]]
};

let toPoint = (base, ...vs) => {
  let result = [...base];

  for (let v of vs) {
    result[0] += v[0];
    result[1] += v[1];
  }

  return result;
};

// @src
//   https://github.com/mapbox/lineclip
let intersectRectWithTriangle = (rect, trianglePoints) => {
  let intersect = (p1, p2, edge, rect) => {
    return edge & 8 ? new DOMPoint(p1.x + (p2.x - p1.x) * (rect.height - p1.y) / (p2.y - p1.y), rect.height) :
           edge & 4 ? new DOMPoint(p1.x + (p2.x - p1.x) * (rect.y      - p1.y) / (p2.y - p1.y), rect.y) :
           edge & 2 ? new DOMPoint(rect.width, p1.y + (p2.y - p1.y) * (rect.width - p1.x) / (p2.x - p1.x)) :
           edge & 1 ? new DOMPoint(rect.x,     p1.y + (p2.y - p1.y) * (rect.x     - p1.x) / (p2.x - p1.x)) : null;
  };

  let bitCode = (point, rect) => {
    let code = 0;

    if (point.x < rect.x) {
      code |= 1;
    }
    else if (point.x > rect.width) {
      code |= 2;
    }

    if (point.y < rect.y) {
      code |= 4;
    }
    else if (point.y > rect.height) {
      code |= 8;
    }

    return code;
  };

  let result;

  for (let edge = 1; edge <= 8; edge *= 2) {
    let prevPoint = trianglePoints[trianglePoints.length - 1];
    let prevInside = !(bitCode(prevPoint, rect) & edge);

    result = [];

    for (let i = 0; i < trianglePoints.length; i++) {
      let point = trianglePoints[i];
      let inside = !(bitCode(point, rect) & edge);

      if (inside !== prevInside) {
        result.push(intersect(prevPoint, point, edge, rect));
      }
      if (inside) {
        result.push(point);
      }

      prevPoint = point;
      prevInside = inside;
    }

    trianglePoints = result;

    if (!trianglePoints.length) {
      break;
    }
  }

  return result;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Classes
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Tracer {
  constructor(imageBitmap, options) {
    let scale = Math.max(imageBitmap.width / options.workingSize, imageBitmap.height / options.workingSize, 1);
    let workingWidth  = imageBitmap.width  / scale;
    let workingHeight = imageBitmap.height / scale;

    let sourceCanvas = new Canvas(workingWidth, workingHeight, options.backgroundColor);
    sourceCanvas.context.drawImage(imageBitmap, 0, 0, workingWidth, workingHeight);

    this.options = options;
    this.scale = scale;
    this.getRandomNumber = new Math.seedrandom(options.seed);
    this.onStep = () => { };
    this.onEnd = () => { };

    this._width = sourceCanvas.width;
    this._height = sourceCanvas.height;
    this._steps = 0;
    this._state = new State(sourceCanvas, new Canvas(this._width, this._height, options.backgroundColor));
  }

  getProgress() {
    return round(this._steps / this.options.shapesNumber, 2);
  }

  getRandomNumber() {}

  getRandomPoint(width, height) {
    return [~~(this.getRandomNumber() * width), ~~(this.getRandomNumber() * height)];
  }

  start() {
    this._addShape();
  }

  async _addShape() {
    let step = await this._findBestStep();
    step = await this._optimizeStep(step);

    this._steps += 1;

    // Better than current state
    if (step.distance < this._state.distance) {
      this._state = step.apply(this._state);
      this.onStep(step);
    }

    this._continue();
  }

  _continue() {
    if (this._steps < this.options.shapesNumber) {
      setTimeout(() => this._addShape(), 10);
    }
    else {
      this.onEnd(this._state);
    }
  }

  _findBestStep() {
    let shapesPerIteration = this.options.shapesPerIteration;
    let bestStep = null;
    let promises = [];

    for (let i = 0; i < shapesPerIteration; i += 1) {
      let index = Math.floor(this.getRandomNumber() * this.options.shapesType.length);
      let type = this.options.shapesType[index];
      let Shape;

      if (type === "triangles") {
        Shape = Triangle;
      }
      else if (type === "rectangles") {
        Shape = Rectangle;
      }

      let shape = new Shape(this._width, this._height, this);
      shape.init();

      let promise = new Step(shape, this).compute(this._state).then(step => {
        if (!bestStep || step.distance < bestStep.distance) {
          bestStep = step;
        }
      });

      promises.push(promise);
    }

    return Promise.all(promises).then(() => bestStep);
  }

  _optimizeStep(step) {
    let maxMutations = this.options.maxMutations;
    let totalAttempts = 0;
    let successAttempts = 0;
    let failedAttempts = 0;
    let resolve = null;
    let bestStep = step;
    let promise = new Promise(r => resolve = r);

    let tryMutation = () => {
      if (failedAttempts >= maxMutations) {
        return resolve(bestStep);
      }

      totalAttempts += 1;

      bestStep.mutate().compute(this._state).then(mutatedStep => {
        // Success
        if (mutatedStep.distance < bestStep.distance) {
          successAttempts += 1;
          failedAttempts = 0;
          bestStep = mutatedStep;
        }
        // Failure
        else {
          failedAttempts += 1;
        }

        tryMutation();
      });
    }

    tryMutation();

    return promise;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Canvas extends OffscreenCanvas {
  constructor(width, height, backgroundColor) {
    super(width, height);

    this.context = this.getContext("2d");
    this._imageData = null;

    if (backgroundColor) {
      this.context.fillStyle = backgroundColor;
      this.context.fillRect(0, 0, width, height);
    }
  }

  drawStep(step) {
    this.context.globalAlpha = step.alpha;
    this.context.fillStyle = `rgb(${step.color[0]}, ${step.color[1]}, ${step.color[2]})`;
    this.context.strokeStyle = `rgb(${step.color[0]}, ${step.color[1]}, ${step.color[2]})`;
    step.shape.render(this.context);
  }

  getImageData() {
    if (!this._imageData) {
      this._imageData = this.context.getImageData(0, 0, this.width, this.height);
    }

    return this._imageData;
  }

  getDifference(otherCanvas) {
    let imageData = this.getImageData();
    let otherImageData = otherCanvas.getImageData();
    let difference = 0;

    for (let i = 0; i < imageData.data.length; i += 1) {
      if (i % 4 === 3) {
        continue;
      }
      else {
        let delta = otherImageData.data[i] - imageData.data[i];
        difference = difference + (delta * delta);
      }
    }

    return difference;
  }

  getDistance(otherCanvas) {
    let difference = this.getDifference(otherCanvas);
    return differenceToDistance(difference, this.width * this.height);
  }

  clone() {
    let clonedCanvas = new Canvas(this.width, this.height);
    clonedCanvas.context.drawImage(this, 0, 0);
    return clonedCanvas;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class State {
  constructor(sourceCanvas, destCanvas, distance = Infinity) {
    this.sourceCanvas = sourceCanvas;
    this.destCanvas = destCanvas;
    this.distance = (distance === Infinity ? sourceCanvas.getDistance(destCanvas) : distance);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Step {
  constructor(shape, ownerTracer) {
    this._ownerTracer = ownerTracer;
    this.shape = shape;
    this.alpha = this._ownerTracer.options.shapesAlpha;
    this.color = [0, 0, 0];
    this.distance = Infinity;
  }

  // @info
  //   Apply this step to a state to get a new state. Call only after compute().
  apply(state) {
    let destCanvas = state.destCanvas.clone();
    destCanvas.drawStep(this);

    return new State(state.sourceCanvas, destCanvas, this.distance);
  }

  // @info
  //   Get a slightly mutated step.
  mutate() {
    let mutatedShape = this.shape.mutate();
    let mutatedStep = new Step(mutatedShape, this._ownerTracer);

    if (this._ownerTracer.options.autoAdjustShapesAlpha) {
      let mutatedAlpha = this.alpha + (this._ownerTracer.getRandomNumber() - 0.5) * 0.08;
      mutatedStep.alpha = clamp(mutatedAlpha, 0.1, 1);
    }

    return mutatedStep;
  }

  // @info
  //   Find optimal color and compute the resulting distance.
  compute(state) {
    let imageData = {
      shape: this.shape.rasterize(this.alpha).getImageData(),
      current: state.destCanvas.getImageData(),
      target: state.sourceCanvas.getImageData()
    };

    let pixels = state.destCanvas.width * state.destCanvas.height;
    let offset = this.shape.bbox;
    let color = this._computeColor(offset, imageData, this.alpha);
    let differenceChange = this._computeDifferenceChange(offset, imageData, color);
    let currentDifference = distanceToDifference(state.distance, pixels);

    this.color = [...color];
    this.distance = differenceToDistance(currentDifference + differenceChange, pixels);

    return Promise.resolve(this);
  }

  _computeDifferenceChange(offset, imageData, color) {
    let {shape, current, target} = imageData;
    let shapeData = shape.data;
    let currentData = current.data;
    let targetData = target.data;
    let shapeWidth = shape.width;
    let shapeHeight = shape.height;
    let fullWidth = current.width;
    let fullHeight = current.height;

    let a, b, d1r, d1g, d1b, d2r, d2b, d2g;
    let shapeIndex, shapeX, shapeY, fullIndex, fullX, fullY;
    var sum = 0; // V8 opt bailout with let

    for (shapeY = 0; shapeY < shapeHeight; shapeY += 1) {
      fullY = shapeY + offset.top;

      // Outside of the large canvas (vertically)
      if (fullY < 0 || fullY >= fullHeight) {
        continue;
      }

      for (shapeX = 0; shapeX < shapeWidth; shapeX += 1) {
        fullX = offset.left + shapeX;

        // Outside of the large canvas (horizontally)
        if (fullX < 0 || fullX >= fullWidth) {
          continue;
        }

        shapeIndex = 4 * (shapeX + shapeY * shapeWidth);

        a = shapeData[shapeIndex + 3];

        // Only where drawn
        if (a === 0) {
          continue;
        }

        fullIndex = 4 * (fullX + fullY * fullWidth);

        a = a / 255;
        b = 1 - a;

        d1r = targetData[fullIndex] - currentData[fullIndex];
        d1g = targetData[fullIndex + 1] - currentData[fullIndex + 1];
        d1b = targetData[fullIndex + 2] - currentData[fullIndex + 2];

        d2r = targetData[fullIndex] - (color[0] * a + currentData[fullIndex] * b);
        d2g = targetData[fullIndex + 1] - (color[1] * a + currentData[fullIndex + 1] * b);
        d2b = targetData[fullIndex + 2] - (color[2] * a + currentData[fullIndex + 2] * b);

        sum -= d1r * d1r + d1g * d1g + d1b * d1b;
        sum += d2r * d2r + d2g * d2g + d2b * d2b;
      }
    }

    return sum;
  }

  _computeColor(offset, imageData, alpha) {
    let {shape, current, target} = imageData;
    let shapeData = shape.data;
    let currentData = current.data;
    let targetData = target.data;
    let shapeWidth = shape.width;
    let shapeHeight = shape.height;
    let fullWidth = current.width;
    let fullHeight = current.height;

    let color = [0, 0, 0];
    let count = 0;
    let shapeIndex, shapeX, shapeY, fullIndex, fullX, fullY;

    for (shapeY = 0; shapeY < shapeHeight; shapeY += 1) {
      fullY = shapeY + offset.top;

      // Outside of the large canvas (vertically)
      if (fullY < 0 || fullY >= fullHeight) {
        continue;
      }

      for (shapeX = 0; shapeX < shapeWidth; shapeX += 1) {
        fullX = offset.left + shapeX;

        // Outside of the large canvas (horizontally)
        if (fullX < 0 || fullX >= fullWidth) {
          continue;
        }

        shapeIndex = 4 * (shapeX + shapeY * shapeWidth);

        // Only where drawn
        if (shapeData[shapeIndex + 3] === 0) {
          continue;
        }

        fullIndex = 4 * (fullX + fullY * fullWidth);

        color[0] += (targetData[fullIndex] - currentData[fullIndex]) / alpha + currentData[fullIndex];
        color[1] += (targetData[fullIndex + 1] - currentData[fullIndex + 1]) / alpha + currentData[fullIndex + 1];
        color[2] += (targetData[fullIndex + 2] - currentData[fullIndex + 2]) / alpha + currentData[fullIndex + 2];

        count += 1;
      }
    }

    return color.map(x => ~~(x / count)).map(x => clamp(x, 0, 255));
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Triangle {
  constructor(w, h, ownerTracer) {
    this.bbox = {};
    this.w = w;
    this.h = h;
    this.count = 3;
    this._ownerTracer = ownerTracer;
  }

  init() {
    this.points = this._createPoints();
    this.computeBBox();
    return this;
  }

  render(context) {
    context.beginPath();

    this.points.forEach(([x, y], index) => {
      if (index) {
        context.lineTo(x, y);
      }
      else {
        context.moveTo(x, y);
      }
    });

    context.closePath();
    context.fill();
  }

  mutate() {
    let clone = new Triangle(0, 0, this._ownerTracer);
    clone.points = this.points.map(point => point.slice());

    let index = Math.floor(this._ownerTracer.getRandomNumber() * this.points.length);
    let point = clone.points[index];

    let angle = this._ownerTracer.getRandomNumber() * 2 * Math.PI;
    let radius = this._ownerTracer.getRandomNumber() * 20;
    point[0] += ~~(radius * Math.cos(angle));
    point[1] += ~~(radius * Math.sin(angle));

    return clone.computeBBox();
  }

  computeBBox() {
    let min = [
      this.points.reduce((v, p) => Math.min(v, p[0]), Infinity),
      this.points.reduce((v, p) => Math.min(v, p[1]), Infinity)
    ];

    let max = [
      this.points.reduce((v, p) => Math.max(v, p[0]), -Infinity),
      this.points.reduce((v, p) => Math.max(v, p[1]), -Infinity)
    ];

    this.bbox = {
      left: min[0],
      top: min[1],
      width: (max[0] - min[0]) || 1, // fallback for deformed shapes
      height: (max[1] - min[1]) || 1
    };

    return this;
  }

  _createPoints() {
    let firstPoint = this._ownerTracer.getRandomPoint(this.w, this.h);
    let points = [firstPoint];

    for (let i = 1; i < this.count; i += 1) {
      let angle = this._ownerTracer.getRandomNumber() * 2 * Math.PI;
      let radius = this._ownerTracer.getRandomNumber() * 20;

      points.push([
        firstPoint[0] + ~~(radius * Math.cos(angle)),
        firstPoint[1] + ~~(radius * Math.sin(angle))
      ]);
    }

    return points;
  }

  rasterize(alpha) {
    let canvas = new Canvas(this.bbox.width, this.bbox.height);
    let context = canvas.context;

    context.fillStyle = "#000";
    context.globalAlpha = alpha;
    context.translate(-this.bbox.left, -this.bbox.top);
    this.render(context);

    return canvas;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Rectangle {
  constructor(w, h, ownerTracer) {
    this.bbox = {};
    this.w = w;
    this.h = h;
    this.angle = 0;
    this.count = 4;
    this._ownerTracer = ownerTracer;
  }

  init() {
    this.points = this._createPoints();
    this.computeBBox();
    return this;
  }

  render(context) {
    context.save();

    let center = getCenterPoint(this.points[0], this.points[2]);

    context.translate(center[0], center[1]);
    context.rotate(this.angle);
    context.translate(-center[0], -center[1]);
    context.beginPath();

    this.points.forEach(([x, y], index) => {
      if (index) {
        context.lineTo(x, y);
      }
      else {
        context.moveTo(x, y);
      }
    });

    context.closePath();
    context.fill();
    context.restore();
  }

  mutate() {
    let clone = new Rectangle(0, 0, this._ownerTracer);
    clone.points = this.points.map(point => point.slice());

    let amount = ~~((this._ownerTracer.getRandomNumber() - 0.5) * 20);

    switch (Math.floor(this._ownerTracer.getRandomNumber() * 8)) {
      // Left
      case 0:
        clone.points[0][0] += amount;
        clone.points[3][0] += amount;
        break;
      // Top
      case 1:
        clone.points[0][1] += amount;
        clone.points[1][1] += amount;
        break;
      // Right
      case 2:
        clone.points[1][0] += amount;
        clone.points[2][0] += amount;
        break;
      // Bottom
      case 3:
        clone.points[2][1] += amount;
        clone.points[3][1] += amount;
        break;
      case 4:
      case 5:
      case 6:
      case 7:
        clone.angle = (amount / 20 + 0.5) * Math.PI;
        break;
    }

    return clone.computeBBox();
  }

  computeBBox() {
    let min = [
      this.points.reduce((v, p) => Math.min(v, p[0]), Infinity),
      this.points.reduce((v, p) => Math.min(v, p[1]), Infinity)
    ];

    let max = [
      this.points.reduce((v, p) => Math.max(v, p[0]), -Infinity),
      this.points.reduce((v, p) => Math.max(v, p[1]), -Infinity)
    ];

    this.bbox = {
      left: min[0],
      top:  min[1],
      width:  (max[0] - min[0]) || 1, // Fallback for deformed shapes
      height: (max[1] - min[1]) || 1
    };

    return this;
  }

  _createPoints() {
    let p1 = this._ownerTracer.getRandomPoint(this.w, this.h);
    let p2 = this._ownerTracer.getRandomPoint(this.w, this.h);

    let left   = Math.min(p1[0], p2[0]);
    let right  = Math.max(p1[0], p2[0]);
    let top    = Math.min(p1[1], p2[1]);
    let bottom = Math.max(p1[1], p2[1]);

    return [
      [left, top],
      [right, top],
      [right, bottom],
      [left, bottom]
    ];
  }

  rasterize(alpha) {
    let canvas = new Canvas(this.bbox.width, this.bbox.height);
    let context = canvas.context;

    context.fillStyle = "#000";
    context.globalAlpha = alpha;
    context.translate(-this.bbox.left, -this.bbox.top);
    this.render(context);

    return canvas;
  }
}
