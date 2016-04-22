
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
// Node polyfills (http://dom.spec.whatwg.org)
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
};

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
// SVGRect polyfills (make it look like DOMRect: http://dev.w3.org/fxtf/geometry/#DOMRect)
//

Object.defineProperty(SVGRect.prototype, "top", {
  enumerable: false,
  configurable: false,

  get() {
    return Math.min(this.y, this.y + this.height);
  },

  set(value) {
    throw new Error("top property is read-only");
  }
});

Object.defineProperty(SVGRect.prototype, "right", {
  enumerable: false,
  configurable: false,

  get() {
    return Math.max(this.x, this.x + this.width);
  },

  set(value) {
    throw new Error("right property is read-only");
  }
});

Object.defineProperty(SVGRect.prototype, "bottom", {
  enumerable: false,
  configurable: false,

  get() {
    return Math.max(this.y, this.y + this.height);
  },

  set(value) {
    throw new Error("bottom property is read-only");
  }
});

Object.defineProperty(SVGRect.prototype, "left", {
  enumerable: false,
  configurable: false,

  get() {
    return Math.min(this.x, this.x + this.width);
  },

  set(value) {
    throw new Error("left property is read-only");
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SVGPoint polyfills (http://dev.w3.org/fxtf/geometry/#DOMPoint)
//

SVGPoint.prototype.toString = function() {
  return "point(" + this.x + ", " + this.y + ")";
};

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
// SVGMatrix polyfills (http://dev.w3.org/fxtf/geometry/#DOMMatrix)
//

(() => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

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

  SVGMatrix.prototype.skewXSelf = function(sx) {
    let skewTransform = {a: 1, b: 0, c: tan(sx), d: 1, e: 0, f: 0};
    this.multiplySelf(skewTransform);
    return this;
  };

  SVGMatrix.prototype.skewYSelf = function(sy) {
    let skewTransform = {a: 1, b: tan(sy), c: 0, d: 1, e: 0, f: 0};
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
})();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Make array-like DOM objects iterable
//

(() => {
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
})();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// @doc https://developer.chrome.com/apps/app_lifecycle
chrome.app.runtime.onLaunched.addListener((event) => {
  if (document.body.getAttribute("is") === "bx-backgroundbody") {
    document.body.ready.then(() => document.body.launchedCallback(event));
  }
});

window.addEventListener("load", () => System.get("./elements/" + document.body.getAttribute("is")));
