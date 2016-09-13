
// @copyright
//   © 2012-2016 Jarosław Foksa

"use strict";

//
// ClientRect polyfills (make it look like DOMRect: http://dev.w3.org/fxtf/geometry/#DOMRect)
//

Object.defineProperty(ClientRect.prototype, "x", {
  enumerable: false,
  configurable: false,

  get() {
    return this.left;
  },

  set(value) {
    this.left = value;
  }
});

Object.defineProperty(ClientRect.prototype, "y", {
  enumerable: false,
  configurable: false,

  get() {
    return this.top;
  },

  set(value) {
    this.top = value;
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Node polyfills (http://dom.spec.whatwg.org, https://github.com/whatwg/dom/issues/161)
//

if (!Node.prototype.append) {
  Node.prototype.append = function(child) {
    this.appendChild(child);
  }
}

if (!Node.prototype.prepend) {
  Node.prototype.prepend = function(child) {
    this.insertBefore(child, this.firstElementChild);
  }
}

if (!Node.prototype.before) {
  Node.prototype.before = function(element) {
    this.parentElement.insertBefore(element, this);
  };
}

if (!Node.prototype.after) {
  Node.prototype.after  = function(element) {
    this.parentElement.insertBefore(element, this.nextElementSibling);
  };
}

if (!Node.prototype.replace) {
  Node.prototype.replace = function(element) {
    this.parentNode.replaceChild(element, this);
  };
}

if (!Node.prototype.closest) {
  Node.prototype.closest = function(selector) {
    return this.parentNode ? this.parentNode.closest(selector) : null;
  };
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// HTMLHeadingElement polyfills
//

// @info
//   Add support for "disabled" property on h1, h2, h3, h4, h5, h6 elements (non-standard).
Object.defineProperty(HTMLHeadingElement.prototype, "disabled", {
  enumerable: false,
  configurable: false,

  get() {
    return this.hasAttribute("disabled");
  },

  set(value) {
    if (value === true) {
      this.setAttribute("disabled", "");
    }
    else {
      this.removeAttribute("disabled");
    }
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SVGRect polyfills (http://dev.w3.org/fxtf/geometry/#DOMRect)
//

{
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  SVGRect = new Proxy(SVGRect, {
    construct(target, args) {
      let rect = svg.createSVGRect();
      let [x, y, width, height] = args;

      if (x) { rect.x = x; }
      if (y) { rect.y = y; }
      if (width) { rect.width = width; }
      if (height) { rect.height = height; }

      return rect;
    }
  });

  SVGRect.fromRect = function(otherRect) {
    return otherRect ? new SVGRect(otherRect.x, otherRect.y, otherRect.width, otherRect.height) : new SVGRect();
  };

  Object.defineProperty(SVGRect.prototype, "top", {
    enumerable: true,
    configurable: false,

    get() {
      return Math.min(this.y, this.y + this.height);
    }
  });

  Object.defineProperty(SVGRect.prototype, "right", {
    enumerable: true,
    configurable: false,

    get() {
      return Math.max(this.x, this.x + this.width);
    }
  })

  Object.defineProperty(SVGRect.prototype, "bottom", {
    enumerable: true,
    configurable: false,

    get() {
      return Math.max(this.y, this.y + this.height);
    }
  });

  Object.defineProperty(SVGRect.prototype, "left", {
    enumerable: true,
    configurable: false,

    get() {
      return Math.min(this.x, this.x + this.width);
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SVGPoint polyfills (http://dev.w3.org/fxtf/geometry/#DOMPoint)
//

{
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  SVGPoint = new Proxy(SVGPoint, {
    construct(target, args) {
      let point = svg.createSVGPoint();
      let [x, y] = args;

      if (x) { point.x = x; }
      if (y) { point.y = y; }

      return point;
    }
  });

  SVGPoint.fromPoint = function(otherPoint) {
    return otherPoint ? new SVGPoint(otherPoint.x, otherPoint.y) : new SVGPoint();
  };

  SVGPoint.prototype.toString = function() {
    return "point(" + this.x + ", " + this.y + ")";
  };
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SVGMatrix polyfills (http://dev.w3.org/fxtf/geometry/#DOMMatrix)
//

{
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  SVGMatrix = new Proxy(SVGMatrix, {
    construct(target, args) {
      let matrix = svg.createSVGMatrix();

      if (args[0] !== undefined) {
        if (Array.isArray(args[0]) && args[0].length === 6) {
          let [a, b, c, d, e, f] = args[0];
          matrix.a = a;
          matrix.b = b;
          matrix.c = c;
          matrix.d = d;
          matrix.e = e;
          matrix.f = f;
        }
        else {
          throw new TypeError("Invalid argument passed to SVGMatrix constructor.");
        }
      }

      return matrix;
    }
  });

  SVGMatrix.fromMatrix = (matrix) => {
    let {a, b, c, d, e, f} = matrix;
    return new SVGMatrix([a, b, c, d, e, f]);
  };

  SVGMatrix.prototype.transformPoint = function(point) {
    let transformedPoint = svg.createSVGPoint();

    transformedPoint.x = this.a * point.x + this.c * point.y + this.e;
    transformedPoint.y = this.b * point.x + this.d * point.y + this.f;

    return transformedPoint;
  };

  SVGMatrix.prototype.determinant = function() {
    let det = (this.a * this.d) - (this.b * this.c);
    return det;
  };

  SVGMatrix.prototype.isIdentity = function() {
    if (this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.e === 0 && this.f === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  SVGMatrix.prototype.toString = function() {
    return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.e + ", " + this.f + ")";
  };

  SVGMatrix.prototype.multiplySelf = function(matrix) {
    let a = (this.a * matrix.a) + (this.c * matrix.b);
    let b = (this.b * matrix.a) + (this.d * matrix.b);
    let c = (this.a * matrix.c) + (this.c * matrix.d);
    let d = (this.b * matrix.c) + (this.d * matrix.d);
    let e = (this.a * matrix.e) + (this.c * matrix.f) + this.e;
    let f = (this.b * matrix.e) + (this.d * matrix.f) + this.f;

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;

    return this;
  };

  SVGMatrix.prototype.preMultiplySelf = function(matrix) {
    let a = (matrix.a * this.a) + (matrix.c * this.b);
    let b = (matrix.b * this.a) + (matrix.d * this.b);
    let c = (matrix.a * this.c) + (matrix.c * this.d);
    let d = (matrix.b * this.c) + (matrix.d * this.d);
    let e = (matrix.a * this.e) + (matrix.c * this.f) + matrix.e;
    let f = (matrix.b * this.e) + (matrix.d * this.f) + matrix.f;

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;

    return this;
  };

  SVGMatrix.prototype.translateSelf = function(tx, ty) {
    let translateTransform = {a: 1, b: 0, c: 0, d: 1, e: tx, f: ty};
    this.multiplySelf(translateTransform);
    return this;
  };

  SVGMatrix.prototype._translateOriginSelf = function(x, y) {
    this.e = this.e + (x * this.a) + (y * this.c);
    this.f = this.f + (x * this.b) + (y * this.d);
    return this;
  };

  SVGMatrix.prototype._translateOrigin = function(x, y) {
    let transform = svg.createSVGMatrix();
    transform.a = this.a;
    transform.b = this.b;
    transform.c = this.c;
    transform.d = this.d;
    transform.e = this.e + (x * this.a) + (y * this.c);
    transform.f = this.f + (x * this.b) + (y * this.d);
    return transform;
  };

  SVGMatrix.prototype.scaleSelf = function(scale, originX, originY) {
    if (originX === undefined) { originX = 0; }
    if (originY === undefined) { originY = 0; }

    let scaleTransform = {a: scale, b: 0, c: 0, d: scale, e: 0, f: 0};

    this._translateOriginSelf(originX, originY);
    this.multiplySelf(scaleTransform);
    this._translateOriginSelf(-originX, -originY);

    return this;
  };

  SVGMatrix.prototype.scaleNonUniformSelf = function(scaleX, scaleY, originX, originY) {
    if (scaleY === undefined) { scaleY = 1; }
    if (originX === undefined) { originX = 0; }
    if (originY === undefined) { originY = 0; }

    let scaleTransform = {a: scaleX, b: 0, c: 0, d: scaleY, e: 0, f: 0};

    this._translateOriginSelf(originX, originY);
    this.multiplySelf(scaleTransform);
    this._translateOriginSelf(-originX, -originY);

    return this;
  };

  SVGMatrix.prototype.rotate = function(angle, originX, originY) {
    if (originX === undefined) { originX = 0; }
    if (originY === undefined) { originY = 0; }

    let angleRad = (Math.PI * angle) / 180;
    let cosAngle = Math.cos(angleRad);
    let sinAngle = Math.sin(angleRad);
    let rotTransform = {a: cosAngle, b: sinAngle, c: -sinAngle, d: cosAngle, e: 0, f: 0};

    let rotateTransform = this._translateOrigin(originX, originY);
    rotateTransform.multiplySelf(rotTransform);
    rotateTransform._translateOriginSelf(-originX, -originY);

    return rotateTransform;
  };

  SVGMatrix.prototype.rotateSelf = function(angle, originX, originY) {
    if (originX === undefined) { originX = 0; }
    if (originY === undefined) { originY = 0; }

    let angleRad = (Math.PI * angle) / 180;
    let cosAngle = Math.cos(angleRad);
    let sinAngle = Math.sin(angleRad);
    let rotTransform = {a: cosAngle, b: sinAngle, c: -sinAngle, d: cosAngle, e: 0, f: 0};

    this._translateOriginSelf(originX, originY);
    this.multiplySelf(rotTransform);
    this._translateOriginSelf(-originX, -originY);

    return this;
  };

  SVGMatrix.prototype.skewXSelf = function(angle) {
    let angleRad = (Math.PI * angle) / 180;
    let skewTransform = {a: 1, b: 0, c: Math.tan(angleRad), d: 1, e: 0, f: 0};
    this.multiplySelf(skewTransform);
    return this;
  };

  SVGMatrix.prototype.skewYSelf = function(angle) {
    let angleRad = (Math.PI * angle) / 180;
    let skewTransform = {a: 1, b: Math.tan(angleRad), c: 0, d: 1, e: 0, f: 0};
    this.multiplySelf(skewTransform);
    return this;
  };

  SVGMatrix.prototype.invertSelf = function(sy) {
    let det = this.determinant();

    if (det !== 0) {
      let a =  this.d / det;
      let b = -this.b / det;
      let c = -this.c / det;
      let d =  this.a / det;
      let e = (this.c * this.f - this.d * this.e) / det;
      let f = (this.b * this.e - this.a * this.f) / det;

      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
      this.f = f;
    }

    return this;
  };

  Object.defineProperty(SVGMatrix.prototype, "is2D", {
    enumerable: true,
    configurable: false,
    get() { return true; }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SVGUseElement polyfills
//

// @bug
//   https://code.google.com/p/chromium/issues/detail?id=512081
SVGUseElement.prototype.getBBox = function() {
  let bbox = SVGGraphicsElement.prototype.getBBox.call(this);
  bbox.x += this.x.baseVal.value;
  bbox.y += this.y.baseVal.value;
  return bbox;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SVGPathElement polyfills
//

// @info
//   Polyfill for SVG 2 getPathData() and setPathData() methods. Based on:
//   - SVGPathSeg polyfill by Philip Rogers (MIT License)
//     https://github.com/progers/pathseg
//   - SVGPathNormalizer by Tadahisa Motooka (MIT License)
//     https://github.com/motooka/SVGPathNormalizer/tree/master/src
//   - arcToCubicCurves() by Dmitry Baranovskiy (MIT License)
//     https://github.com/DmitryBaranovskiy/raphael/blob/v2.1.1/raphael.core.js#L1837
// @author
//   Jarosław Foksa
// @license
//   MIT License
if (!SVGPathElement.prototype.getPathData || !SVGPathElement.prototype.setPathData) {
  (function() {
    var commandsMap = {
      "Z":"Z", "M":"M", "L":"L", "C":"C", "Q":"Q", "A":"A", "H":"H", "V":"V", "S":"S", "T":"T",
      "z":"Z", "m":"m", "l":"l", "c":"c", "q":"q", "a":"a", "h":"h", "v":"v", "s":"s", "t":"t"
    };

    var Source = function(string) {
      this._string = string;
      this._currentIndex = 0;
      this._endIndex = this._string.length;
      this._prevCommand = null;
      this._skipOptionalSpaces();
    };

    var isIE = window.navigator.userAgent.indexOf("MSIE ") !== -1;

    Source.prototype = {
      parseSegment: function() {
        var char = this._string[this._currentIndex];
        var command = commandsMap[char] ? commandsMap[char] : null;

        if (command === null) {
          // Possibly an implicit command. Not allowed if this is the first command.
          if (this._prevCommand === null) {
            return null;
          }

          // Check for remaining coordinates in the current command.
          if (
            (char === "+" || char === "-" || char === "." || (char >= "0" && char <= "9")) && this._prevCommand !== "Z"
          ) {
            if (this._prevCommand === "M") {
              command = "L";
            }
            else if (this._prevCommand === "m") {
              command = "l";
            }
            else {
              command = this._prevCommand;
            }
          }
          else {
            command = null;
          }

          if (command === null) {
            return null;
          }
        }
        else {
          this._currentIndex += 1;
        }

        this._prevCommand = command;

        var values = null;
        var cmd = command.toUpperCase();

        if (cmd === "H" || cmd === "V") {
          values = [this._parseNumber()];
        }
        else if (cmd === "M" || cmd === "L" || cmd === "T") {
          values = [this._parseNumber(), this._parseNumber()];
        }
        else if (cmd === "S" || cmd === "Q") {
          values = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()];
        }
        else if (cmd === "C") {
          values = [
            this._parseNumber(),
            this._parseNumber(),
            this._parseNumber(),
            this._parseNumber(),
            this._parseNumber(),
            this._parseNumber()
          ];
        }
        else if (cmd === "A") {
          values = [
            this._parseNumber(),
            this._parseNumber(),
            this._parseNumber(),
            this._parseArcFlag(),
            this._parseArcFlag(),
            this._parseNumber(),
            this._parseNumber()
          ];
        }
        else if (cmd === "Z") {
          this._skipOptionalSpaces();
          values = [];
        }

        if (values === null || values.indexOf(null) >= 0) {
          // Unknown command or known command with invalid values
          return null;
        }
        else {
          return {type: command, values: values};
        }
      },

      hasMoreData: function() {
        return this._currentIndex < this._endIndex;
      },

      peekSegmentType: function() {
        var char = this._string[this._currentIndex];
        return commandsMap[char] ? commandsMap[char] : null;
      },

      initialCommandIsMoveTo: function() {
        // If the path is empty it is still valid, so return true.
        if (!this.hasMoreData()) {
          return true;
        }

        var command = this.peekSegmentType();
        // Path must start with moveTo.
        return command === "M" || command === "m";
      },

      _isCurrentSpace: function() {
        var char = this._string[this._currentIndex];
        return char <= " " && (char === " " || char === "\n" || char === "\t" || char === "\r" || char === "\f");
      },

      _skipOptionalSpaces: function() {
        while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
          this._currentIndex += 1;
        }

        return this._currentIndex < this._endIndex;
      },

      _skipOptionalSpacesOrDelimiter: function() {
        if (
          this._currentIndex < this._endIndex &&
          !this._isCurrentSpace() &&
          this._string[this._currentIndex] !== ","
        ) {
          return false;
        }

        if (this._skipOptionalSpaces()) {
          if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ",") {
            this._currentIndex += 1;
            this._skipOptionalSpaces();
          }
        }
        return this._currentIndex < this._endIndex;
      },

      // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from
      // Source/core/svg/SVGParserUtilities.cpp.
      // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
      _parseNumber: function() {
        var exponent = 0;
        var integer = 0;
        var frac = 1;
        var decimal = 0;
        var sign = 1;
        var expsign = 1;
        var startIndex = this._currentIndex;

        this._skipOptionalSpaces();

        // Read the sign.
        if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "+") {
          this._currentIndex += 1;
        }
        else if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "-") {
          this._currentIndex += 1;
          sign = -1;
        }

        if (
          this._currentIndex === this._endIndex ||
          (
            (this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") &&
            this._string[this._currentIndex] !== "."
          )
        ) {
          // The first character of a number must be one of [0-9+-.].
          return null;
        }

        // Read the integer part, build right-to-left.
        var startIntPartIndex = this._currentIndex;

        while (
          this._currentIndex < this._endIndex &&
          this._string[this._currentIndex] >= "0" &&
          this._string[this._currentIndex] <= "9"
        ) {
          this._currentIndex += 1; // Advance to first non-digit.
        }

        if (this._currentIndex !== startIntPartIndex) {
          var scanIntPartIndex = this._currentIndex - 1;
          var multiplier = 1;

          while (scanIntPartIndex >= startIntPartIndex) {
            integer += multiplier * (this._string[scanIntPartIndex] - "0");
            scanIntPartIndex -= 1;
            multiplier *= 10;
          }
        }

        // Read the decimals.
        if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ".") {
          this._currentIndex += 1;

          // There must be a least one digit following the .
          if (
            this._currentIndex >= this._endIndex ||
            this._string[this._currentIndex] < "0" ||
            this._string[this._currentIndex] > "9"
          ) {
            return null;
          }

          while (
            this._currentIndex < this._endIndex &&
            this._string[this._currentIndex] >= "0" &&
            this._string[this._currentIndex] <= "9"
          ) {
            frac *= 10;
            decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
            this._currentIndex += 1;
          }
        }

        // Read the exponent part.
        if (
          this._currentIndex !== startIndex &&
          this._currentIndex + 1 < this._endIndex &&
          (this._string[this._currentIndex] === "e" || this._string[this._currentIndex] === "E") &&
          (this._string[this._currentIndex + 1] !== "x" && this._string[this._currentIndex + 1] !== "m")
        ) {
          this._currentIndex += 1;

          // Read the sign of the exponent.
          if (this._string[this._currentIndex] === "+") {
            this._currentIndex += 1;
          }
          else if (this._string[this._currentIndex] === "-") {
            this._currentIndex += 1;
            expsign = -1;
          }

          // There must be an exponent.
          if (
            this._currentIndex >= this._endIndex ||
            this._string[this._currentIndex] < "0" ||
            this._string[this._currentIndex] > "9"
          ) {
            return null;
          }

          while (
            this._currentIndex < this._endIndex &&
            this._string[this._currentIndex] >= "0" &&
            this._string[this._currentIndex] <= "9"
          ) {
            exponent *= 10;
            exponent += (this._string[this._currentIndex] - "0");
            this._currentIndex += 1;
          }
        }

        var number = integer + decimal;
        number *= sign;

        if (exponent) {
          number *= Math.pow(10, expsign * exponent);
        }

        if (startIndex === this._currentIndex) {
          return null;
        }

        this._skipOptionalSpacesOrDelimiter();

        return number;
      },

      _parseArcFlag: function() {
        if (this._currentIndex >= this._endIndex) {
          return null;
        }

        var flag = null;
        var flagChar = this._string[this._currentIndex];

        this._currentIndex += 1;

        if (flagChar === "0") {
          flag = 0;
        }
        else if (flagChar === "1") {
          flag = 1;
        }
        else {
          return null;
        }

        this._skipOptionalSpacesOrDelimiter();
        return flag;
      }
    };

    var parsePathDataString = function(string) {
      if (!string || string.length === 0) return [];

      var source = new Source(string);
      var pathData = [];

      if (source.initialCommandIsMoveTo()) {
        while (source.hasMoreData()) {
          var pathSeg = source.parseSegment();

          if (pathSeg === null) {
            break;
          }
          else {
            pathData.push(pathSeg);
          }
        }
      }

      return pathData;
    }

    var setAttribute = SVGPathElement.prototype.setAttribute;
    var removeAttribute = SVGPathElement.prototype.removeAttribute;

    var $cachedPathData = window.Symbol ? Symbol() : "__cachedPathData";
    var $cachedNormalizedPathData = window.Symbol ? Symbol() : "__cachedNormalizedPathData";

    // @info
    //   Get an array of corresponding cubic bezier curve parameters for given arc curve paramters.
    var arcToCubicCurves = function(x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, _recursive) {
      var degToRad = function(degrees) {
        return (Math.PI * degrees) / 180;
      };

      var rotate = function(x, y, angleRad) {
        var X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
        var Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
        return {x: X, y: Y};
      };

      var angleRad = degToRad(angle);
      var params = [];
      var f1, f2, cx, cy;

      if (_recursive) {
        f1 = _recursive[0];
        f2 = _recursive[1];
        cx = _recursive[2];
        cy = _recursive[3];
      }
      else {
        var p1 = rotate(x1, y1, -angleRad);
        x1 = p1.x;
        y1 = p1.y;

        var p2 = rotate(x2, y2, -angleRad);
        x2 = p2.x;
        y2 = p2.y;

        var x = (x1 - x2) / 2;
        var y = (y1 - y2) / 2;
        var h = (x * x) / (r1 * r1) + (y * y) / (r2 * r2);

        if (h > 1) {
          h = Math.sqrt(h);
          r1 = h * r1;
          r2 = h * r2;
        }

        var sign;

        if (largeArcFlag === sweepFlag) {
          sign = -1;
        }
        else {
          sign = 1;
        }

        var r1Pow = r1 * r1;
        var r2Pow = r2 * r2;

        var left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
        var right = r1Pow * y * y + r2Pow * x * x;

        var k = sign * Math.sqrt(Math.abs(left/right));

        cx = k * r1 * y / r2 + (x1 + x2) / 2;
        cy = k * -r2 * x / r1 + (y1 + y2) / 2;

        f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
        f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));

        if (x1 < cx) {
          f1 = Math.PI - f1;
        }
        if (x2 < cx) {
          f2 = Math.PI - f2;
        }

        if (f1 < 0) {
          f1 = Math.PI * 2 + f1;
        }
        if (f2 < 0) {
          f2 = Math.PI * 2 + f2;
        }

        if (sweepFlag && f1 > f2) {
          f1 = f1 - Math.PI * 2;
        }
        if (!sweepFlag && f2 > f1) {
          f2 = f2 - Math.PI * 2;
        }
      }

      var df = f2 - f1;

      if (Math.abs(df) > (Math.PI * 120 / 180)) {
        var f2old = f2;
        var x2old = x2;
        var y2old = y2;

        if (sweepFlag && f2 > f1) {
          f2 = f1 + (Math.PI * 120 / 180) * (1);
        }
        else {
          f2 = f1 + (Math.PI * 120 / 180) * (-1);
        }

        x2 = cx + r1 * Math.cos(f2);
        y2 = cy + r2 * Math.sin(f2);
        params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [f2, f2old, cx, cy]);
      }

      df = f2 - f1;

      var c1 = Math.cos(f1);
      var s1 = Math.sin(f1);
      var c2 = Math.cos(f2);
      var s2 = Math.sin(f2);
      var t = Math.tan(df / 4);
      var hx = 4 / 3 * r1 * t;
      var hy = 4 / 3 * r2 * t;

      var m1 = [x1, y1];
      var m2 = [x1 + hx * s1, y1 - hy * c1];
      var m3 = [x2 + hx * s2, y2 - hy * c2];
      var m4 = [x2, y2];

      m2[0] = 2 * m1[0] - m2[0];
      m2[1] = 2 * m1[1] - m2[1];

      if (_recursive) {
        return [m2, m3, m4].concat(params);
      }
      else {
        params = [m2, m3, m4].concat(params).join().split(",");

        var curves = [];
        var curveParams = [];

        params.forEach( function(param, i) {
          if (i % 2) {
            curveParams.push(rotate(params[i - 1], params[i], angleRad).y);
          }
          else {
            curveParams.push(rotate(params[i], params[i + 1], angleRad).x);
          }

          if (curveParams.length === 6) {
            curves.push(curveParams);
            curveParams = [];
          }
        });

        return curves;
      }
    };

    var clonePathData = function(pathData) {
      return pathData.map( function(seg) {
        return {type: seg.type, values: Array.prototype.slice.call(seg.values)}
      });
    };

    // @info
    //   Takes any path data, returns path data that consists only from absolute commands.
    var absolutizePathData = function(pathData) {
      var absolutizedPathData = [];

      var currentX = null;
      var currentY = null;

      var subpathX = null;
      var subpathY = null;

      pathData.forEach( function(seg) {
        var type = seg.type;

        if (type === "M") {
          var x = seg.values[0];
          var y = seg.values[1];

          absolutizedPathData.push({type: "M", values: [x, y]});

          subpathX = x;
          subpathY = y;

          currentX = x;
          currentY = y;
        }

        else if (type === "m") {
          var x = currentX + seg.values[0];
          var y = currentY + seg.values[1];

          absolutizedPathData.push({type: "M", values: [x, y]});

          subpathX = x;
          subpathY = y;

          currentX = x;
          currentY = y;
        }

        else if (type === "L") {
          var x = seg.values[0];
          var y = seg.values[1];

          absolutizedPathData.push({type: "L", values: [x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "l") {
          var x = currentX + seg.values[0];
          var y = currentY + seg.values[1];

          absolutizedPathData.push({type: "L", values: [x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "C") {
          var x1 = seg.values[0];
          var y1 = seg.values[1];
          var x2 = seg.values[2];
          var y2 = seg.values[3];
          var x = seg.values[4];
          var y = seg.values[5];

          absolutizedPathData.push({type: "C", values: [x1, y1, x2, y2, x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "c") {
          var x1 = currentX + seg.values[0];
          var y1 = currentY + seg.values[1];
          var x2 = currentX + seg.values[2];
          var y2 = currentY + seg.values[3];
          var x = currentX + seg.values[4];
          var y = currentY + seg.values[5];

          absolutizedPathData.push({type: "C", values: [x1, y1, x2, y2, x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "Q") {
          var x1 = seg.values[0];
          var y1 = seg.values[1];
          var x = seg.values[2];
          var y = seg.values[3];

          absolutizedPathData.push({type: "Q", values: [x1, y1, x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "q") {
          var x1 = currentX + seg.values[0];
          var y1 = currentY + seg.values[1];
          var x = currentX + seg.values[2];
          var y = currentY + seg.values[3];

          absolutizedPathData.push({type: "Q", values: [x1, y1, x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "A") {
          var x = seg.values[5];
          var y = seg.values[6];

          absolutizedPathData.push({
            type: "A",
            values: [seg.values[0], seg.values[1], seg.values[2], seg.values[3], seg.values[4], x, y]
          });

          currentX = x;
          currentY = y;
        }

        else if (type === "a") {
          var x = currentX + seg.values[5];
          var y = currentY + seg.values[6];

          absolutizedPathData.push({
            type: "A",
            values: [seg.values[0], seg.values[1], seg.values[2], seg.values[3], seg.values[4], x, y]
          });

          currentX = x;
          currentY = y;
        }

        else if (type === "H") {
          var x = seg.values[0];
          absolutizedPathData.push({type: "H", values: [x]});
          currentX = x;
        }

        else if (type === "h") {
          var x = currentX + seg.values[0];
          absolutizedPathData.push({type: "H", values: [x]});
          currentX = x;
        }

        else if (type === "V") {
          var y = seg.values[0];
          absolutizedPathData.push({type: "V", values: [y]});
          currentY = y;
        }

        else if (type === "v") {
          var y = currentY + seg.values[0];
          absolutizedPathData.push({type: "V", values: [y]});
          currentY = y;
        }

        else if (type === "S") {
          var x2 = seg.values[0];
          var y2 = seg.values[1];
          var x = seg.values[2];
          var y = seg.values[3];

          absolutizedPathData.push({type: "S", values: [x2, y2, x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "s") {
          var x2 = currentX + seg.values[0];
          var y2 = currentY + seg.values[1];
          var x = currentX + seg.values[2];
          var y = currentY + seg.values[3];

          absolutizedPathData.push({type: "S", values: [x2, y2, x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "T") {
          var x = seg.values[0];
          var y = seg.values[1]

          absolutizedPathData.push({type: "T", values: [x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "t") {
          var x = currentX + seg.values[0];
          var y = currentY + seg.values[1]

          absolutizedPathData.push({type: "T", values: [x, y]});

          currentX = x;
          currentY = y;
        }

        else if (type === "Z" || type === "z") {
          absolutizedPathData.push({type: "Z", values: []});

          currentX = subpathX;
          currentY = subpathY;
        }
      });

      return absolutizedPathData;
    };

    // @info
    //   Takes path data that consists only from absolute commands, returns path data that consists only from
    //   "M", "L", "C" and "Z" commands.
    var reducePathData = function(pathData) {
      var reducedPathData = [];
      var lastType = null;

      var lastControlX = null;
      var lastControlY = null;

      var currentX = null;
      var currentY = null;

      var subpathX = null;
      var subpathY = null;

      pathData.forEach( function(seg) {
        if (seg.type === "M") {
          var x = seg.values[0];
          var y = seg.values[1];

          reducedPathData.push({type: "M", values: [x, y]});

          subpathX = x;
          subpathY = y;

          currentX = x;
          currentY = y;
        }

        else if (seg.type === "C") {
          var x1 = seg.values[0];
          var y1 = seg.values[1];
          var x2 = seg.values[2];
          var y2 = seg.values[3];
          var x = seg.values[4];
          var y = seg.values[5];

          reducedPathData.push({type: "C", values: [x1, y1, x2, y2, x, y]});

          lastControlX = x2;
          lastControlY = y2;

          currentX = x;
          currentY = y;
        }

        else if (seg.type === "L") {
          var x = seg.values[0];
          var y = seg.values[1];

          reducedPathData.push({type: "L", values: [x, y]});

          currentX = x;
          currentY = y;
        }

        else if (seg.type === "H") {
          var x = seg.values[0];

          reducedPathData.push({type: "L", values: [x, currentY]});

          currentX = x;
        }

        else if (seg.type === "V") {
          var y = seg.values[0];

          reducedPathData.push({type: "L", values: [currentX, y]});

          currentY = y;
        }

        else if (seg.type === "S") {
          var x2 = seg.values[0];
          var y2 = seg.values[1];
          var x = seg.values[2];
          var y = seg.values[3];

          var cx1, cy1;

          if (lastType === "C" || lastType === "S") {
            cx1 = currentX + (currentX - lastControlX);
            cy1 = currentY + (currentY - lastControlY);
          }
          else {
            cx1 = currentX;
            cy1 = currentY;
          }

          reducedPathData.push({type: "C", values: [cx1, cy1, x2, y2, x, y]});

          lastControlX = x2;
          lastControlY = y2;

          currentX = x;
          currentY = y;
        }

        else if (seg.type === "T") {
          var x = seg.values[0];
          var y = seg.values[1];

          var x1, y1;

          if (lastType === "Q" || lastType === "T") {
            x1 = currentX + (currentX - lastControlX);
            y1 = currentY + (currentY - lastControlY);
          }
          else {
            x1 = currentX;
            y1 = currentY;
          }

          var cx1 = currentX + 2 * (x1 - currentX) / 3;
          var cy1 = currentY + 2 * (y1 - currentY) / 3;
          var cx2 = x + 2 * (x1 - x) / 3;
          var cy2 = y + 2 * (y1 - y) / 3;

          reducedPathData.push({type: "C", values: [cx1, cy1, cx2, cy2, x, y]});

          lastControlX = x1;
          lastControlY = y1;

          currentX = x;
          currentY = y;
        }

        else if (seg.type === "Q") {
          var x1 = seg.values[0];
          var y1 = seg.values[1];
          var x = seg.values[2];
          var y = seg.values[3];

          var cx1 = currentX + 2 * (x1 - currentX) / 3;
          var cy1 = currentY + 2 * (y1 - currentY) / 3;
          var cx2 = x + 2 * (x1 - x) / 3;
          var cy2 = y + 2 * (y1 - y) / 3;

          reducedPathData.push({type: "C", values: [cx1, cy1, cx2, cy2, x, y]});

          lastControlX = x1;
          lastControlY = y1;

          currentX = x;
          currentY = y;
        }

        else if (seg.type === "A") {
          var r1 = seg.values[0];
          var r2 = seg.values[1];
          var angle = seg.values[2];
          var largeArcFlag = seg.values[3];
          var sweepFlag = seg.values[4];
          var x = seg.values[5];
          var y = seg.values[6];

          if (r1 === 0 || r2 === 0) {
            reducedPathData.push({type: "C", values: [currentX, currentY, x, y, x, y]});

            currentX = x;
            currentY = y;
          }
          else {
            if (currentX !== x || currentY !== y) {
              var curves = arcToCubicCurves(currentX, currentY, x, y, r1, r2, angle, largeArcFlag, sweepFlag);

              curves.forEach( function(curve) {
                reducedPathData.push({type: "C", values: curve});

                currentX = x;
                currentY = y;
              });
            }
          }
        }

        else if (seg.type === "Z") {
          reducedPathData.push(seg);

          currentX = subpathX;
          currentY = subpathY;
        }

        lastType = seg.type;
      });

      return reducedPathData;
    };

    SVGPathElement.prototype.setAttribute = function(name, value) {
      if (name === "d") {
        this[$cachedPathData] = null;
        this[$cachedNormalizedPathData] = null;
      }

      setAttribute.call(this, name, value);
    };

    SVGPathElement.prototype.removeAttribute = function(name, value) {
      if (name === "d") {
        this[$cachedPathData] = null;
        this[$cachedNormalizedPathData] = null;
      }

      removeAttribute.call(this, name);
    };

    SVGPathElement.prototype.getPathData = function(options) {
      if (options && options.normalize) {
        if (this[$cachedNormalizedPathData]) {
          return clonePathData(this[$cachedNormalizedPathData]);
        }
        else {
          var pathData;

          if (this[$cachedPathData]) {
            pathData = clonePathData(this[$cachedPathData]);
          }
          else {
            pathData = parsePathDataString(this.getAttribute("d") || "");
            this[$cachedPathData] = clonePathData(pathData);
          }

          var normalizedPathData = reducePathData(absolutizePathData(pathData));
          this[$cachedNormalizedPathData] = clonePathData(normalizedPathData);
          return normalizedPathData;
        }
      }
      else {
        if (this[$cachedPathData]) {
          return clonePathData(this[$cachedPathData]);
        }
        else {
          var pathData = parsePathDataString(this.getAttribute("d") || "");
          this[$cachedPathData] = clonePathData(pathData);
          return pathData;
        }
      }
    };

    SVGPathElement.prototype.setPathData = function(pathData) {
      if (pathData.length === 0) {
        if (isIE) {
          // @bugfix https://github.com/mbostock/d3/issues/1737
          this.setAttribute("d", "");
        }
        else {
          this.removeAttribute("d");
        }
      }
      else {
        var d = "";

        for (var i = 0, l = pathData.length; i < l; i += 1) {
          var seg = pathData[i];

          if (i > 0) {
            d += " ";
          }

          d += seg.type;

          if (seg.values && seg.values.length > 0) {
            d += " " + seg.values.join(" ");
          }
        }

        this.setAttribute("d", d);
      }
    };

    SVGRectElement.prototype.getPathData = function(options) {
      var x = this.x.baseVal.value;
      var y = this.y.baseVal.value;
      var width = this.width.baseVal.value;
      var height = this.height.baseVal.value;
      var rx = this.hasAttribute("rx") ? this.rx.baseVal.value : this.ry.baseVal.value;
      var ry = this.hasAttribute("ry") ? this.ry.baseVal.value : this.rx.baseVal.value;

      if (rx > width / 2) {
        rx = width / 2;
      }

      if (ry > height / 2) {
        ry = height / 2;
      }

      var pathData = [
        {type: "M", values: [x+rx, y]},
        {type: "H", values: [x+width-rx]},
        {type: "A", values: [rx, ry, 0, 0, 1, x+width, y+ry]},
        {type: "V", values: [y+height-ry]},
        {type: "A", values: [rx, ry, 0, 0, 1, x+width-rx, y+height]},
        {type: "H", values: [x+rx]},
        {type: "A", values: [rx, ry, 0, 0, 1, x, y+height-ry]},
        {type: "V", values: [y+ry]},
        {type: "A", values: [rx, ry, 0, 0, 1, x+rx, y]},
        {type: "Z", values: []}
      ];

      // Get rid of redundant "A" segs when either rx or ry is 0
      pathData = pathData.filter(function(s) {
        return s.type === "A" && (s.values[0] === 0 || s.values[1] === 0) ? false : true;
      });

      if (options && options.normalize === true) {
        pathData = reducePathData(pathData);
      }

      return pathData;
    };

    SVGCircleElement.prototype.getPathData = function(options) {
      var cx = this.cx.baseVal.value;
      var cy = this.cy.baseVal.value;
      var r = this.r.baseVal.value;

      var pathData = [
        { type: "M",  values: [cx + r, cy] },
        { type: "A",  values: [r, r, 0, 0, 1, cx, cy+r] },
        { type: "A",  values: [r, r, 0, 0, 1, cx-r, cy] },
        { type: "A",  values: [r, r, 0, 0, 1, cx, cy-r] },
        { type: "A",  values: [r, r, 0, 0, 1, cx+r, cy] },
        { type: "Z",  values: [] }
      ];

      if (options && options.normalize === true) {
        pathData = reducePathData(pathData);
      }

      return pathData;
    };

    SVGEllipseElement.prototype.getPathData = function(options) {
      var cx = this.cx.baseVal.value;
      var cy = this.cy.baseVal.value;
      var rx = this.rx.baseVal.value;
      var ry = this.ry.baseVal.value;

      var pathData = [
        { type: "M",  values: [cx + rx, cy] },
        { type: "A",  values: [rx, ry, 0, 0, 1, cx, cy+ry] },
        { type: "A",  values: [rx, ry, 0, 0, 1, cx-rx, cy] },
        { type: "A",  values: [rx, ry, 0, 0, 1, cx, cy-ry] },
        { type: "A",  values: [rx, ry, 0, 0, 1, cx+rx, cy] },
        { type: "Z",  values: [] }
      ];

      if (options && options.normalize === true) {
        pathData = reducePathData(pathData);
      }

      return pathData;
    };

    SVGLineElement.prototype.getPathData = function() {
      return [
        { type: "M", values: [this.x1.baseVal.value, this.y1.baseVal.value] },
        { type: "L", values: [this.x2.baseVal.value, this.y2.baseVal.value] }
      ];
    };

    SVGPolylineElement.prototype.getPathData = function() {
      var pathData = [];

      for (var i = 0; i < this.points.numberOfItems; i += 1) {
        var point = this.points.getItem(i);

        pathData.push({
          type: (i === 0 ? "M" : "L"),
          values: [point.x, point.y]
        });
      }

      return pathData;
    };

    SVGPolygonElement.prototype.getPathData = function() {
      var pathData = [];

      for (var i = 0; i < this.points.numberOfItems; i += 1) {
        var point = this.points.getItem(i);

        pathData.push({
          type: (i === 0 ? "M" : "L"),
          values: [point.x, point.y]
        });
      }

      pathData.push({
        type: "Z",
        values: []
      });

      return pathData;
    };
  })();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SVGElement polyfills
//

// @info
//   SVGElement.prototype.dataset polyfill (SVG 2)
// @doc
//   https://svgwg.org/svg2-draft/single-page.html#types-InterfaceSVGElement
//   https://html.spec.whatwg.org/multipage/dom.html#dom-dataset
{
  let $proxy = Symbol();

  // @info
  //   Add support for "dataset" property
  Object.defineProperty(SVGElement.prototype, "dataset", {
    enumerable: true,
    configurable: false,

    get() {
      if (!this[$proxy]) {
        let element = this;

        this[$proxy] = new Proxy({}, {
          get(target, key) {
            let attributeName = "data-" + this._toDashCase(key);

            if (element.hasAttribute(attributeName)) {
              return element.getAttribute(attributeName);
            }
            else {
              return undefined;
            }
          },

          set(target, key, value) {
            let attributeName = "data-" + this._toDashCase(key);
            element.setAttribute(attributeName, value);
          },

          getOwnPropertyDescriptor(target, key) {
            let attributeName = "data-" + this._toDashCase(key);

            if (element.hasAttribute(attributeName)) {
              return {
                value: element.getAttribute(attributeName),
                writable: true,
                configurable: true,
                enumerable: true
              };
            }
            else {
              return undefined;
            }
          },

          getPrototypeOf(target) {
            return DOMStringMap.prototype;
          },

          deleteProperty(target, key) {
            let attributeName = "data-" + this._toDashCase(key);

            if (element.hasAttribute(attributeName)) {
              element.removeAttribute(attributeName);
              return true;
            }
            else {
              return false;
            }
          },

          ownKeys() {
            let keys = [];

            for (let attribute of element.attributes) {
              if (attribute.name.substring(0, 5) === "data-") {
                let propertyName = this._toCamelCase(attribute.name.substring(5));
                keys.push(propertyName);
              }
            }

            return keys;
          },

          _toCamelCase(string) {
            return string.replace(/(\-[a-z])/g, (arg) => arg.toUpperCase().replace("-", ""));
          },

          _toDashCase(string) {
            return string.replace(/([A-Z])/g, ($1) => "-" + $1.toLowerCase());
          }
        });
      }

      return this[$proxy];
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Pointer events polyfill
//

{
  if (!window.PointerEvent) {
    var $addEventListener = EventTarget.prototype.addEventListener;
    var $removeEventListener = EventTarget.prototype.removeEventListener;

    let map = {
      "pointerdown": "mousedown",
      "pointermove": "mousemove",
      "pointerup": "mouseup",
      "pointerenter": "mouseenter",
      "pointerleave": "mouseleave",
      "pointerover": "mouseover",
      "pointerout": "mouseout"
    };

    EventTarget.prototype.addEventListener = function(eventName, listener, capture) {
      $addEventListener.call(this, map[eventName] ? map[eventName] : eventName, listener, capture);
    };

    EventTarget.prototype.removeEventListener = function(eventName, listener, capture) {
      $removeEventListener.call(this, map[eventName] ? map[eventName] : eventName, listener, capture);
    };
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Make array-like DOM objects iterable
//

{
  let pseudoArrays = [
    CSSRuleList,
    CSSStyleDeclaration,
    DataTransferItemList,
    FileList,
    HTMLCollection,
    NamedNodeMap,
    NodeList,
    SVGPointList
  ];

  pseudoArrays.forEach( (pseudoArray) => {
    if (!pseudoArray.prototype[Symbol.iterator]) {
      Object.defineProperty(pseudoArray.prototype, Symbol.iterator, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: Array.prototype[Symbol.iterator]
      });
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("load", () => $traceurRuntime.getModule("./elements/" + document.body.getAttribute("is")));