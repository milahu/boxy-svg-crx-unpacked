
// @copyright
//   © 2012-2016 Jarosław Foksa

"use strict";

//
// String polyfills
//

// @info
//   String.prototype.includes polyfill (ECMAScript 7)
Object.defineProperty(String.prototype, "includes", {
  enumerable: false,
  writable: true,

  value() {
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  }
});


// @info
//   Non-standard method to replace every occurance of a given string with another string.
Object.defineProperty(String.prototype, "replaceAll", {
  enumerable: false,
  writable: true,

  value(string, newString) {
    return this.split(string).join(newString);
  }
});

// @info
//   Non-standard method to convert e.g. "background-color" to "backgroundColor".
Object.defineProperty(String.prototype, "toCamelCase", {
  enumerable: false,
  writable: true,

  value() {
    return this.replace(/(\-[a-z])/g, (arg) => arg.toUpperCase().replace("-", ""));
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Object polyfills
//

// @info
//   Object.values polyfill (ECMAScript 2016).
// @doc
//   https://github.com/tc39/proposal-object-values-entries
Object.defineProperty(Object, "values", {
  enumerable: false,
  writable: true,

  value(object) {
    let array = [];

    Object.keys(object).forEach( (key) => {
      array.push(object[key]);
    });

    return array;
  }
})

// @info
//   Object.entries polyfill (ECMAScript 2016).
// @doc
//   https://github.com/tc39/proposal-object-values-entries
Object.defineProperty(Object, "entries", {
  enumerable: false,
  writable: true,

  value(object) {
    let array = [];

    Object.keys(object).forEach((key) => {
      array.push([key, object[key]]);
    });

    return array;
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Array polyfills
//

// @info
//   Array.prototype.includes polyfill (ECMAScript 7)
// @src
//   https://github.com/tc39/Array.prototype.includes
Object.defineProperty(Array.prototype, "includes", {
  enumerable: false,
  writable: true,

  value(value) {
    return this.indexOf(value) !== -1;
  }
});

// @info
//   Array.prototype.remove polyfill (ECMAScript 7)
// @src
//   http://esdiscuss.org/topic/array-prototype-contains
Object.defineProperty(Array.prototype, "remove", {
  enumerable: false,
  writable: true,

  value(value) {
    let index = this.indexOf(value);

    if (index !== -1) {
      this.splice(index, 1);
    }

    return this;
  }
});

// @info
//   Array.prototype.removeAll polyfill (ECMAScript 7)
// @src
//   http://esdiscuss.org/topic/array-prototype-contains
Object.defineProperty(Array.prototype, "removeAll", {
  enumerable: false,
  writable: true,

  value(value) {
    while (this.includes(value)) {
      this.remove(value);
    }

    return this;
  }
});
