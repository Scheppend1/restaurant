(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js ***!
  \*********************************************************************/
/*! exports provided: QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return QRCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var QRCodeModule = /** @class */ (function () {
    function QRCodeModule() {
    }
    QRCodeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
            ],
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
            ]
        })
    ], QRCodeModule);
    return QRCodeModule;
}());

//# sourceMappingURL=angularx-qrcode.module.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js ***!
  \***************************************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return QRCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var QRCode;
var QRCodeComponent = /** @class */ (function () {
    function QRCodeComponent(el, platformId) {
        var _this = this;
        this.el = el;
        this.platformId = platformId;
        /** @internal */
        this.allowEmptyString = false;
        this.colordark = '#000000';
        this.colorlight = '#ffffff';
        this.level = 'M';
        this.hidetitle = false;
        this.qrdata = '';
        this.size = 256;
        this.usesvg = false;
        this.isValidQrCodeText = function (data) {
            if (_this.allowEmptyString === false) {
                return !(typeof data === 'undefined' || data === '');
            }
            return !(typeof data === 'undefined');
        };
    }
    QRCodeComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!QRCode) {
            QRCode = __webpack_require__(/*! qrcodejs2 */ "./node_modules/qrcodejs2/qrcode.js");
        }
        try {
            if (!this.isValidQrCodeText(this.qrdata)) {
                throw new Error('Empty QR Code data');
            }
            this.qrcode = new QRCode(this.el.nativeElement, {
                colorDark: this.colordark,
                colorLight: this.colorlight,
                correctLevel: QRCode.CorrectLevel[this.level.toString()],
                height: this.size,
                text: this.qrdata || ' ',
                useSVG: this.usesvg,
                width: this.size,
            });
        }
        catch (e) {
            console.error('Error generating QR Code: ' + e.message);
        }
    };
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.qrcode) {
            return;
        }
        var qrData = changes['qrdata'];
        if (qrData && this.isValidQrCodeText(qrData.currentValue)) {
            this.qrcode.clear();
            this.qrcode.makeCode(qrData.currentValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "allowEmptyString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colordark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colorlight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "level", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "hidetitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "qrdata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QRCodeComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "usesvg", void 0);
    QRCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'qrcode',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: ''
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], QRCodeComponent);
    return QRCodeComponent;
}());

//# sourceMappingURL=angularx-qrcode.component.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js ***!
  \*******************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode.component */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/index.js ***!
  \***************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/index.js ***!
  \****************************************************/
/*! exports provided: QRCodeComponent, QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });

/* harmony import */ var _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angularx-qrcode.module */ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__["QRCodeModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chartist/dist/chartist.js":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return (root['Chartist'] = factory());
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

/* Chartist.js 0.11.0
 * Copyright © 2017 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */
/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.11.0'
};

(function (window, document, Chartist) {
  'use strict';

  /**
   * This object contains all namespaces used within Chartist.
   *
   * @memberof Chartist.Core
   * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
   */
  Chartist.namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    ct: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    var i, source, sourceProp;
    target = target || {};

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (var prop in source) {
        sourceProp = source[prop];
        if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
          target[prop] = Chartist.extend(target[prop], sourceProp);
        } else {
          target[prop] = sourceProp;
        }
      }
    }

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * Converts a number or string to a quantity object.
   *
   * @memberof Chartist.Core
   * @param {String|Number} input
   * @return {Object} Returns an object containing the value as number and the unit as string.
   */
  Chartist.quantity = function(input) {
    if (typeof input === 'string') {
      var match = (/^(\d+)\s*(.*)$/g).exec(input);
      return {
        value : +match[1],
        unit: match[2] || undefined
      };
    }
    return { value: input };
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + (current ? current : 0);
  };

  /**
   * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
   *
   * @memberof Chartist.Core
   * @param {Number} factor
   * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
   */
  Chartist.mapMultiply = function(factor) {
    return function(num) {
      return num * factor;
    };
  };

  /**
   * Add helper to be used in `Array.map` for adding a addend to each value of an array.
   *
   * @memberof Chartist.Core
   * @param {Number} addend
   * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
   */
  Chartist.mapAdd = function(addend) {
    return function(num) {
      return num + addend;
    };
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className);

    svg._node.style.width = width;
    svg._node.style.height = height;

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };

  /**
   * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
   *
   * @param  {Object} data The data object that is passed as second argument to the charts
   * @return {Object} The normalized data object
   */
  Chartist.normalizeData = function(data, reverse, multi) {
    var labelCount;
    var output = {
      raw: data,
      normalized: {}
    };

    // Check if we should generate some labels based on existing series data
    output.normalized.series = Chartist.getDataArray({
      series: data.series || []
    }, reverse, multi);

    // If all elements of the normalized data array are arrays we're dealing with
    // multi series data and we need to find the largest series if they are un-even
    if (output.normalized.series.every(function(value) {
        return value instanceof Array;
      })) {
      // Getting the series with the the most elements
      labelCount = Math.max.apply(null, output.normalized.series.map(function(series) {
        return series.length;
      }));
    } else {
      // We're dealing with Pie data so we just take the normalized array length
      labelCount = output.normalized.series.length;
    }

    output.normalized.labels = (data.labels || []).slice();
    // Padding the labels to labelCount with empty strings
    Array.prototype.push.apply(
      output.normalized.labels,
      Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function() {
        return '';
      })
    );

    if(reverse) {
      Chartist.reverseData(output.normalized);
    }

    return output;
  };

  /**
   * This function safely checks if an objects has an owned property.
   *
   * @param {Object} object The object where to check for a property
   * @param {string} property The property name
   * @returns {boolean} Returns true if the object owns the specified property
   */
  Chartist.safeHasProperty = function(object, property) {
    return object !== null &&
      typeof object === 'object' &&
      object.hasOwnProperty(property);
  };

  /**
   * Checks if a value is considered a hole in the data series.
   *
   * @param {*} value
   * @returns {boolean} True if the value is considered a data hole
   */
  Chartist.isDataHoleValue = function(value) {
    return value === null ||
      value === undefined ||
      (typeof value === 'number' && isNaN(value));
  };

  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else if(data.series[i] instanceof Array) {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function(data, reverse, multi) {
    // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
    // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
    function recursiveConvert(value) {
      if(Chartist.safeHasProperty(value, 'value')) {
        // We are dealing with value object notation so we need to recurse on value property
        return recursiveConvert(value.value);
      } else if(Chartist.safeHasProperty(value, 'data')) {
        // We are dealing with series object notation so we need to recurse on data property
        return recursiveConvert(value.data);
      } else if(value instanceof Array) {
        // Data is of type array so we need to recurse on the series
        return value.map(recursiveConvert);
      } else if(Chartist.isDataHoleValue(value)) {
        // We're dealing with a hole in the data and therefore need to return undefined
        // We're also returning undefined for multi value output
        return undefined;
      } else {
        // We need to prepare multi value output (x and y data)
        if(multi) {
          var multiValue = {};

          // Single series value arrays are assumed to specify the Y-Axis value
          // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
          // If multi is a string then it's assumed that it specified which dimension should be filled as default
          if(typeof multi === 'string') {
            multiValue[multi] = Chartist.getNumberOrUndefined(value);
          } else {
            multiValue.y = Chartist.getNumberOrUndefined(value);
          }

          multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
          multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;

          return multiValue;

        } else {
          // We can return simple data
          return Chartist.getNumberOrUndefined(value);
        }
      }
    }

    return data.series.map(recursiveConvert);
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? value.meta : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} data The array that contains the data to be visualized in the chart
   * @param {Object} options The Object that contains the chart options
   * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});

    var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
    var findHigh = options.high === undefined;
    var findLow = options.low === undefined;

    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(data) {
      if(data === undefined) {
        return undefined;
      } else if(data instanceof Array) {
        for (var i = 0; i < data.length; i++) {
          recursiveHighLow(data[i]);
        }
      } else {
        var value = dimension ? +data[dimension] : +data;

        if (findHigh && value > highLow.high) {
          highLow.high = value;
        }

        if (findLow && value < highLow.low) {
          highLow.low = value;
        }
      }
    }

    // Start to find highest and lowest number recursively
    if(findHigh || findLow) {
      recursiveHighLow(data);
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
      highLow.high = Math.max(options.referenceValue, highLow.high);
      highLow.low = Math.min(options.referenceValue, highLow.low);
    }

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
      // If both values are 0 we set high to 1
      if (highLow.low === 0) {
        highLow.high = 1;
      } else if (highLow.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
      } else if (highLow.high > 0) {
        // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
      } else {
        // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
        highLow.high = 1;
        highLow.low = 0;
      }
    }

    return highLow;
  };

  /**
   * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {Boolean}
   */
  Chartist.isNumeric = function(value) {
    return value === null ? false : isFinite(value);
  };

  /**
   * Returns true on all falsey values except the numeric value 0.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {boolean}
   */
  Chartist.isFalseyButZero = function(value) {
    return !value && value !== 0;
  };

  /**
   * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {*}
   */
  Chartist.getNumberOrUndefined = function(value) {
    return Chartist.isNumeric(value) ? +value : undefined;
  };

  /**
   * Checks if provided value object is multi value (contains x or y properties)
   *
   * @memberof Chartist.Core
   * @param value
   */
  Chartist.isMultiValue = function(value) {
    return typeof value === 'object' && ('x' in value || 'y' in value);
  };

  /**
   * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
   *
   * @memberof Chartist.Core
   * @param value
   * @param dimension
   * @param defaultValue
   * @returns {*}
   */
  Chartist.getMultiValue = function(value, dimension) {
    if(Chartist.isMultiValue(value)) {
      return Chartist.getNumberOrUndefined(value[dimension || 'y']);
    } else {
      return Chartist.getNumberOrUndefined(value);
    }
  };

  /**
   * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
   *
   * @memberof Chartist.Core
   * @param {Number} num An integer number where the smallest factor should be searched for
   * @returns {Number} The smallest integer factor of the parameter num.
   */
  Chartist.rho = function(num) {
    if(num === 1) {
      return num;
    }

    function gcd(p, q) {
      if (p % q === 0) {
        return q;
      } else {
        return gcd(q, p % q);
      }
    }

    function f(x) {
      return x * x + 1;
    }

    var x1 = 2, x2 = 2, divisor;
    if (num % 2 === 0) {
      return 2;
    }

    do {
      x1 = f(x1) % num;
      x2 = f(f(x2)) % num;
      divisor = gcd(Math.abs(x1 - x2), num);
    } while (divisor === 1);

    return divisor;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Boolean} onlyInteger
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
    var i,
      optimizationCounter = 0,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds);
    var scaleUp = length < scaleMinSpace;
    var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;

    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
      bounds.step = 1;
    } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
      // If step 1 was too small, we can try the smallest factor of range
      // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
      // is larger than the scaleMinSpace we should go for it.
      bounds.step = smallestFactor;
    } else {
      // Trying to divide or multiply by 2 and find the best step value
      while (true) {
        if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
          bounds.step *= 2;
        } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
          bounds.step /= 2;
          if(onlyInteger && bounds.step % 1 !== 0) {
            bounds.step *= 2;
            break;
          }
        } else {
          break;
        }

        if(optimizationCounter++ > 1000) {
          throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
        }
      }
    }

    var EPSILON = 2.221E-16;
    bounds.step = Math.max(bounds.step, EPSILON);
    function safeIncrement(value, increment) {
      // If increment is too small use *= (1+EPSILON) as a simple nextafter
      if (value === (value += increment)) {
      	value *= (1 + (increment > 0 ? EPSILON : -EPSILON));
      }
      return value;
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    while (newMin + bounds.step <= bounds.low) {
    	newMin = safeIncrement(newMin, bounds.step);
    }
    while (newMax - bounds.step >= bounds.high) {
    	newMax = safeIncrement(newMax, -bounds.step);
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    var values = [];
    for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
      var value = Chartist.roundWithPrecision(i);
      if (value !== values[values.length - 1]) {
        values.push(value);
      }
    }
    bounds.values = values;
    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {{x:Number, y:Number}} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var hasAxis = !!(options.axisX || options.axisY);
    var yAxisOffset = hasAxis ? options.axisY.offset : 0;
    var xAxisOffset = hasAxis ? options.axisX.offset : 0;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    var width = svg.width() || Chartist.quantity(options.width).value || 0;
    var height = svg.height() || Chartist.quantity(options.height).value || 0;
    var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);

    var chartRect = {
      padding: normalizedPadding,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };

    if(hasAxis) {
      if (options.axisX.position === 'start') {
        chartRect.y2 = normalizedPadding.top + xAxisOffset;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      } else {
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
      }

      if (options.axisY.position === 'start') {
        chartRect.x1 = normalizedPadding.left + yAxisOffset;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
      }
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }

    return chartRect;
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param position
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = position;
    positionalData[axis.units.pos + '2'] = position;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a grid background rect and emits the draw event.
   *
   * @memberof Chartist.Core
   * @param gridGroup
   * @param chartRect
   * @param className
   * @param eventEmitter
   */
  Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
    var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height(),
      }, className, true);

      // Event for grid background draw
      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param position
   * @param length
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement;
    var positionalData = {};

    positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = length;
    positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

    if(useForeignObject) {
      // We need to set width and height explicitly to px as span will not expand with width and height being
      // 100% in all browsers
      var content = document.createElement('span');
      content.className = classes.join(' ');
      content.setAttribute('xmlns', Chartist.namespaces.xhtml);
      content.innerText = labels[index];
      content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
      content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';

      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * Helper to read series specific options from options object. It automatically falls back to the global option if
   * there is no option in the series options.
   *
   * @param {Object} series Series object
   * @param {Object} options Chartist options object
   * @param {string} key The options key that should be used to obtain the options
   * @returns {*}
   */
  Chartist.getSeriesOption = function(series, options, key) {
    if(series.name && options.series && options.series[series.name]) {
      var seriesOptions = options.series[series.name];
      return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
    } else {
      return options[key];
    }
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(mediaEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && mediaEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially without an event argument so we get the correct options
    updateCurrentOptions();

    return {
      removeMediaQueryListeners: removeMediaQueryListeners,
      getCurrentOptions: function getCurrentOptions() {
        return Chartist.extend({}, currentOptions);
      }
    };
  };


  /**
   * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
   * valueData property describing the segment.
   *
   * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
   * points with undefined values are discarded.
   *
   * **Options**
   * The following options are used to determine how segments are formed
   * ```javascript
   * var options = {
   *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
   *   fillHoles: false,
   *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
   *   increasingX: false
   * };
   * ```
   *
   * @memberof Chartist.Core
   * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
   * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
   * @param {Object} options Options set by user
   * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
   */
  Chartist.splitIntoSegments = function(pathCoordinates, valueData, options) {
    var defaultOptions = {
      increasingX: false,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var segments = [];
    var hole = true;

    for(var i = 0; i < pathCoordinates.length; i += 2) {
      // If this value is a "hole" we set the hole flag
      if(Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
      // if(valueData[i / 2].value === undefined) {
        if(!options.fillHoles) {
          hole = true;
        }
      } else {
        if(options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i-2]) {
          // X is not increasing, so we need to make sure we start a new segment
          hole = true;
        }


        // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
        if(hole) {
          segments.push({
            pathCoordinates: [],
            valueData: []
          });
          // As we have a valid value now, we are not in a "hole" anymore
          hole = false;
        }

        // Add to the segment pathCoordinates and valueData
        segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
        segments[segments.length - 1].valueData.push(valueData[i / 2]);
      }
    }

    return segments;
  };
}(window, document, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.none({
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function(options) {
    var defaultOptions = {
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);
    return function none(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        if(Chartist.getMultiValue(currData.value) !== undefined) {

          if(hole) {
            path.move(currX, currY, false, currData);
          } else {
            path.line(currX, currY, false, currData);
          }

          hole = false;
        } else if(!options.fillHoles) {
          hole = true;
        }
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2,
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2,
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var prevX, prevY, prevData;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var length = (currX - prevX) * d;
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            path.curve(
              prevX + length,
              prevY,
              currX - length,
              currY,
              currX,
              currY,
              false,
              currData
            );
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = currX = prevData = undefined;
        }
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    return function cardinal(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the cardinal function
        segments.forEach(function(segment) {
          paths.push(cardinal(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than two points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
          z;

        for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
            {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
            {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
            {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
          ];
          if (z) {
            if (!i) {
              p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
            } else if (iLen - 4 === i) {
              p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            } else if (iLen - 2 === i) {
              p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
              p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
            }
          }

          path.curve(
            (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
            (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
            (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
            (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
            p[2].x,
            p[2].y,
            false,
            valueData[(i + 2) / 2]
          );
        }

        return path;
      }
    };
  };

  /**
   * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
   *
   * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.monotoneCubic({
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the monotoneCubic factory function.
   * @return {Function}
   */
  Chartist.Interpolation.monotoneCubic = function(options) {
    var defaultOptions = {
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function monotoneCubic(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles,
        increasingX: true
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the monotoneCubic fn function
        segments.forEach(function(segment) {
          paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than three points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var xs = [],
          ys = [],
          i,
          n = pathCoordinates.length / 2,
          ms = [],
          ds = [], dys = [], dxs = [],
          path;

        // Populate x and y coordinates into separate arrays, for readability

        for(i = 0; i < n; i++) {
          xs[i] = pathCoordinates[i * 2];
          ys[i] = pathCoordinates[i * 2 + 1];
        }

        // Calculate deltas and derivative

        for(i = 0; i < n - 1; i++) {
          dys[i] = ys[i + 1] - ys[i];
          dxs[i] = xs[i + 1] - xs[i];
          ds[i] = dys[i] / dxs[i];
        }

        // Determine desired slope (m) at each point using Fritsch-Carlson method
        // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation

        ms[0] = ds[0];
        ms[n - 1] = ds[n - 2];

        for(i = 1; i < n - 1; i++) {
          if(ds[i] === 0 || ds[i - 1] === 0 || (ds[i - 1] > 0) !== (ds[i] > 0)) {
            ms[i] = 0;
          } else {
            ms[i] = 3 * (dxs[i - 1] + dxs[i]) / (
              (2 * dxs[i] + dxs[i - 1]) / ds[i - 1] +
              (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

            if(!isFinite(ms[i])) {
              ms[i] = 0;
            }
          }
        }

        // Now build a path from the slopes

        path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

        for(i = 0; i < n - 1; i++) {
          path.curve(
            // First control point
            xs[i] + dxs[i] / 3,
            ys[i] + ms[i] * dxs[i] / 3,
            // Second control point
            xs[i + 1] - dxs[i] / 3,
            ys[i + 1] - ms[i + 1] * dxs[i] / 3,
            // End point
            xs[i + 1],
            ys[i + 1],

            false,
            valueData[i + 1]
          );
        }

        return path;
      }
    };
  };

  /**
   * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.step({
   *     postpone: true,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param options
   * @returns {Function}
   */
  Chartist.Interpolation.step = function(options) {
    var defaultOptions = {
      postpone: true,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function step(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();

      var prevX, prevY, prevData;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        // If the current point is also not a hole we can draw the step lines
        if(currData.value !== undefined) {
          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            if(options.postpone) {
              // If postponed we should draw the step line with the value of the previous value
              path.line(currX, prevY, false, prevData);
            } else {
              // If not postponed we should draw the step line with the value of the current value
              path.line(prevX, currY, false, currData);
            }
            // Line to the actual point (this should only be a Y-Axis movement
            path.line(currX, currY, false, currData);
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = prevY = prevData = undefined;
        }
      }

      return path;
    };
  };

}(window, document, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(window, document, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(window, document, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if(!this.initializeTimeoutId) {
      window.removeEventListener('resize', this.resizeListener);
      this.optionsProvider.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }

    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data || {};
    this.data.labels = this.data.labels || [];
    this.data.series = this.data.series || [];
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        this.container.__chartist__.detach();
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(window, document, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(Chartist.namespaces.svg, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this.attr({
          'xmlns:ct': Chartist.namespaces.ct
        });
      }
    }

    if(attributes) {
      this.attr(attributes);
    }

    if(className) {
      this.addClass(className);
    }

    if(parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if (key.indexOf(':') !== -1) {
        var namespacedAttribute = key.split(':');
        this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * Returns the underlying SVG node for the current element.
   *
   * @memberof Chartist.Svg
   * @returns {Node}
   */
  function getNode() {
    return this._node;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', Chartist.namespaces.xmlns);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * Get element height using `getBoundingClientRect`
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.getBoundingClientRect().height;
  }

  /**
   * Get element width using `getBoundingClientRect`
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.getBoundingClientRect().width;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.quantity(animationDefinition.begin || 0).value;
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getNode: getNode,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(window, document, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative, data) {
    var pathElement = Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params, data ? { data: data } : {} );

    pathElements.splice(pos, 0, pathElement);
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative, data) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative, data) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative, data) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new non-bezier curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} rx The radius to be used for the x-axis of the arc.
   * @param {Number} ry The radius to be used for the y-axis of the arc.
   * @param {Number} xAr Defines the orientation of the arc
   * @param {Number} lAf Large arc flag
   * @param {Number} sf Sweep flag
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
    element('A', {
      rx: +rx,
      ry: +ry,
      xAr: +xAr,
      lAf: +lAf,
      sf: +sf,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   * @return {Chartist.Svg.Path}
   */
  function clone(close) {
    var c = new Chartist.Svg.Path(close || this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} command The command you'd like to use to split the path
   * @return {Array<Chartist.Svg.Path>}
   */
  function splitByCommand(command) {
    var split = [
      new Chartist.Svg.Path()
    ];

    this.pathElements.forEach(function(pathElement) {
      if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new Chartist.Svg.Path());
      }

      split[split.length - 1].pathElements.push(pathElement);
    });

    return split;
  }

  /**
   * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
   *
   * @memberof Chartist.Svg.Path
   * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
   * @param {boolean} close If the newly created path should be a closed path
   * @param {Object} options Path options for the newly created path.
   * @return {Chartist.Svg.Path}
   */

  function join(paths, close, options) {
    var joinedPath = new Chartist.Svg.Path(close, options);
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      for(var j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    arc: arc,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone,
    splitByCommand: splitByCommand
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
  Chartist.Svg.Path.join = join;
}(window, document, Chartist));
;/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, ticks, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.ticks = ticks;
    this.options = options;
  }

  function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
    var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
    var projectedValues = this.ticks.map(this.projectValue.bind(this));
    var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      var labelOffset = {
        x: 0,
        y: 0
      };

      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      var labelLength;
      if(projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, 30);
      }

      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
        return;
      }

      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if(this.units.pos === 'x') {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;

        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if(chartOptions.axisX.position === 'start') {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);

        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if(chartOptions.axisY.position === 'start') {
          labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          (axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end'])
        ], useForeignObject, eventEmitter);
      }
    }.bind(this));
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    createGridAndLabels: createGridAndLabels,
    projectValue: function(value, index, data) {
      throw new Error('Base axis can\'t be instantiated!');
    }
  });

  Chartist.Axis.units = axisUnits;

}(window, document, Chartist));
;/**
 * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
 *   scaleMinSpace: 20,
 *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
 *   onlyInteger: true,
 *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
 *   referenceValue: 5
 * };
 * ```
 *
 * @module Chartist.AutoScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function AutoScaleAxis(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    this.range = {
      min: this.bounds.min,
      max: this.bounds.max
    };

    Chartist.AutoScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.bounds.values,
      options);
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
  }

  Chartist.AutoScaleAxis = Chartist.Axis.extend({
    constructor: AutoScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
 *   divisor: 4,
 *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
 *   ticks: [1, 10, 20, 30]
 * };
 * ```
 *
 * @module Chartist.FixedScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function FixedScaleAxis(axisUnit, data, chartRect, options) {
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.divisor = options.divisor || 1;
    this.ticks = options.ticks || Chartist.times(this.divisor).map(function(value, index) {
      return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
    }.bind(this));
    this.ticks.sort(function(a, b) {
      return a - b;
    });
    this.range = {
      min: highLow.low,
      max: highLow.high
    };

    Chartist.FixedScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.ticks,
      options);

    this.stepLength = this.axisLength / this.divisor;
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
  }

  Chartist.FixedScaleAxis = Chartist.Axis.extend({
    constructor: FixedScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function StepAxis(axisUnit, data, chartRect, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
  }

  function projectValue(value, index) {
    return this.stepLength * index;
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // If the line chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data, options.reverseData, true);

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Create groups for labels, grid and series
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    var axisX, axisY;

    if(options.axisX.type === undefined) {
      axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
        ticks: data.normalized.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
    }

    if(options.axisY.type === undefined) {
      axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
        high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
        low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
    }

    axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      var seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [],
        pathData = [];

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value: value,
          valueIndex: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex)
        });
      }.bind(this));

      var seriesOptions = {
        lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
        showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
        showLine: Chartist.getSeriesOption(series, options, 'showLine'),
        showArea: Chartist.getSeriesOption(series, options, 'showArea'),
        areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
      };

      var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
        seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none());
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      var path = smoothing(pathCoordinates, pathData);

      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {

        path.pathElements.forEach(function(pathElement) {
          var point = seriesElement.elem('line', {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point).attr({
            'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(pathElement.data.meta)
          });

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: pathElement.data.value,
            index: pathElement.data.valueIndex,
            meta: pathElement.data.meta,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y
          });
        }.bind(this));
      }

      if(seriesOptions.showLine) {
        var line = seriesElement.elem('path', {
          d: path.stringify()
        }, options.classNames.line, true);

        this.eventEmitter.emit('draw', {
          type: 'line',
          values: data.normalized.series[seriesIndex],
          path: path.clone(),
          chartRect: chartRect,
          index: seriesIndex,
          series: series,
          seriesIndex: seriesIndex,
          seriesMeta: series.meta,
          axisX: axisX,
          axisY: axisY,
          group: seriesElement,
          element: line
        });
      }

      // Area currently only works with axes that support a range!
      if(seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);

        // We project the areaBase value into screen coordinates
        var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);

        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
          // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
          return pathSegment.pathElements.length > 1;
        }).map(function convertToArea(solidPathSegments) {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          var firstElement = solidPathSegments.pathElements[0];
          var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];

          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true)
            .position(0)
            .remove(1)
            .move(firstElement.x, areaBaseProjected)
            .line(firstElement.x, firstElement.y)
            .position(solidPathSegments.pathElements.length + 1)
            .line(lastElement.x, areaBaseProjected);

        }).forEach(function createArea(areaPath) {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          var area = seriesElement.elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true);

          // Emit an event for each area that was drawn
          this.eventEmitter.emit('draw', {
            type: 'area',
            values: data.normalized.series[seriesIndex],
            path: areaPath.clone(),
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesElement,
            element: area
          });
        }.bind(this));
      }
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 30,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
    referenceValue: 0,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackMode: 'accumulate',
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If the bar chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      horizontalBars: 'ct-horizontal-bars',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data;
    var highLow;

    if(options.distributeSeries) {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      data.normalized.series = data.normalized.series.map(function(value) {
        return [value];
      });
    } else {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
    }

    // Create new svg element
    this.svg = Chartist.createSvg(
      this.container,
      options.width,
      options.height,
      options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
    );

    // Drawing groups in correct order
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    if(options.stackBars && data.normalized.series.length !== 0) {

      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
        return Array.prototype.slice.call(arguments).map(function(value) {
          return value;
        }).reduce(function(prev, curr) {
          return {
            x: prev.x + (curr && curr.x) || 0,
            y: prev.y + (curr && curr.y) || 0
          };
        }, {x: 0, y: 0});
      });

      highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');

    } else {

      highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
    }

    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxisTicks,
      labelAxis,
      axisX,
      axisY;

    // We need to set step count based on some options combinations
    if(options.distributeSeries && options.stackBars) {
      // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
      // use only the first label for the step axis
      labelAxisTicks = data.normalized.labels.slice(0, 1);
    } else {
      // If distributed series are enabled but stacked bars aren't, we should use the series labels
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      labelAxisTicks = data.normalized.labels;
    }

    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if(options.horizontalBars) {
      if(options.axisX.type === undefined) {
        valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      }

      if(options.axisY.type === undefined) {
        labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }
    } else {
      if(options.axisX.type === undefined) {
        labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if(options.axisY.type === undefined) {
        valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      }
    }

    // Projected 0 point
    var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
    // Used to track the screen coordinates of stacked bars
    var stackedBarValues = [];

    labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      var periodHalfLength;
      // Current series SVG element
      var seriesElement;

      // We need to set periodHalfLength based on some options combinations
      if(options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
      } else if(options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
      }

      // Adding the series group to the series element
      seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var projected,
          bar,
          previousStack,
          labelAxisValueIndex;

        // We need to set labelAxisValueIndex based on some options combinations
        if(options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if(options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }

        // We need to transform coordinates differently based on the chart layout
        if(options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
          }
        }

        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if(labelAxis instanceof Chartist.StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if(!labelAxis.options.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        // Skip if value is undefined
        if(value === undefined) {
          return;
        }

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

        if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions[labelAxis.counterUnits.pos + '1'] = previousStack;
          positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
          positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
        }

        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);

        var metaData = Chartist.getMetaData(series, valueIndex);

        // Create bar element
        bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
          'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
          'ct:meta': Chartist.serialize(metaData)
        });

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          meta: metaData,
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          chartRect: chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      sliceDonutSolid: 'ct-slice-donut-solid',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // If specified the donut segments will be drawn as shapes instead of strokes.
    donutSolid: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: 'inside',
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If true empty values will be ignored to avoid drawing unncessary slices and labels
    ignoreEmptyValues: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data);
    var seriesGroups = [],
      labelsGroup,
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle;

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || data.normalized.series.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    var donutWidth = Chartist.quantity(options.donutWidth);
    if (donutWidth.unit === '%') {
      donutWidth.value *= radius / 100;
    }

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut && !options.donutSolid ? donutWidth.value / 2  : 0;

    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if(options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
      labelRadius = radius;
    } else if(options.labelPosition === 'center') {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else if(options.donutSolid) {
      labelRadius = radius - donutWidth.value / 2;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = data.raw.series.filter(function(val) {
      return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
    }).length === 1;

    // Creating the series groups
    data.raw.series.forEach(function(series, index) {
      seriesGroups[index] = this.svg.elem('g', null, null);
    }.bind(this));
    //if we need to show labels we create the label group now
    if(options.showLabel) {
      labelsGroup = this.svg.elem('g', null, null);
    }

    // Draw the series
    // initialize series groups
    data.raw.series.forEach(function(series, index) {
      // If current value is zero and we are ignoring empty values then skip to next value
      if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return;

      // If the series is an object and contains a name or meta data we add a custom attribute
      seriesGroups[index].attr({
        'ct:series-name': series.name
      });

      // Use series class from series data or if not set generate one
      seriesGroups[index].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index))
      ].join(' '));

      // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
      var endAngle = (totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0);

      // Use slight offset so there are no transparent hairline issues
      var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));

      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);

      var innerStart,
        innerEnd,
        donutSolidRadius;

      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      var path = new Chartist.Svg.Path(!options.donut || options.donutSolid)
        .move(end.x, end.y)
        .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(!options.donut) {
        path.line(center.x, center.y);
      } else if (options.donutSolid) {
        donutSolidRadius = radius - donutWidth.value;
        innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
        innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
        path.line(innerStart.x, innerStart.y);
        path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle  > 180, 1, innerEnd.x, innerEnd.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var pathClassName = options.classNames.slicePie;
      if (options.donut) {
        pathClassName = options.classNames.sliceDonut;
        if (options.donutSolid) {
          pathClassName = options.classNames.sliceDonutSolid;
        }
      }
      var pathElement = seriesGroups[index].elem('path', {
        d: path.stringify()
      }, pathClassName);

      // Adding the pie series value to the path
      pathElement.attr({
        'ct:value': data.normalized.series[index],
        'ct:meta': Chartist.serialize(series.meta)
      });

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut && !options.donutSolid) {
        pathElement._node.style.strokeWidth = donutWidth.value + 'px';
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: data.normalized.series[index],
        totalDataSum: totalDataSum,
        index: index,
        meta: series.meta,
        series: series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        var labelPosition;
        if(data.raw.series.length === 1) {
          // If we have only 1 series, we can position the label in the center of the pie
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          // Position at the labelRadius distance from center and between start and end angle
          labelPosition = Chartist.polarToCartesian(
            center.x,
            center.y,
            labelRadius,
            startAngle + (endAngle - startAngle) / 2
          );
        }

        var rawValue;
        if(data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
          rawValue = data.normalized.labels[index];
        } else {
          rawValue = data.normalized.series[index];
        }

        var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

        if(interpolatedValue || interpolatedValue === 0) {
          var labelElement = labelsGroup.elem('text', {
            dx: labelPosition.x,
            dy: labelPosition.y,
            'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text('' + interpolatedValue);

          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'label',
            index: index,
            group: labelsGroup,
            element: labelElement,
            text: '' + interpolatedValue,
            x: labelPosition.x,
            y: labelPosition.y
          });
        }
      }

      // Set next startAngle to current endAngle.
      // (except for last slice)
      startAngle = endAngle;
    }.bind(this));

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(window, document, Chartist));

return Chartist;

}));


/***/ }),

/***/ "./node_modules/ng-chartist/dist/ng-chartist.js":
/*!******************************************************!*\
  !*** ./node_modules/ng-chartist/dist/ng-chartist.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var Chartist = __webpack_require__(0);
var ChartistComponent = (function () {
    function ChartistComponent(element) {
        this.element = element.nativeElement;
    }
    ChartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.type || !this.data) {
            Promise.reject("Expected at least type and data.");
        }
        return this.renderChart().then(function (chart) {
            if (_this.events !== undefined) {
                _this.bindEvents(chart);
            }
            return chart;
        });
    };
    ChartistComponent.prototype.ngOnChanges = function (changes) {
        this.update(changes);
    };
    ChartistComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    ChartistComponent.prototype.renderChart = function () {
        var _this = this;
        var promises = [
            this.type,
            this.element,
            this.data,
            this.options,
            this.responsiveOptions
        ];
        return Promise.all(promises).then(function (values) {
            var type = values[0], args = values.slice(1);
            if (!(type in Chartist)) {
                throw new Error(type + " is not a valid chart type");
            }
            _this.chart = (_a = Chartist)[type].apply(_a, args);
            return _this.chart;
            var _a;
        });
    };
    ChartistComponent.prototype.update = function (changes) {
        if (!this.chart || 'type' in changes) {
            this.renderChart();
        }
        else {
            if (changes['data']) {
                this.data = changes['data'].currentValue;
            }
            if (changes['options']) {
                this.options = changes['options'].currentValue;
            }
            this.chart.update(this.data, this.options);
        }
    };
    ChartistComponent.prototype.bindEvents = function (chart) {
        for (var _i = 0, _a = Object.keys(this.events); _i < _a.length; _i++) {
            var event_1 = _a[_i];
            chart.on(event_1, this.events[event_1]);
        }
    };
    return ChartistComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "responsiveOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "events", void 0);
ChartistComponent = __decorate([
    core_1.Component({
        selector: 'x-chartist',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ChartistComponent);
exports.ChartistComponent = ChartistComponent;
var ChartistModule = (function () {
    function ChartistModule() {
    }
    return ChartistModule;
}());
ChartistModule = __decorate([
    core_1.NgModule({
        declarations: [
            ChartistComponent
        ],
        exports: [
            ChartistComponent
        ]
    })
], ChartistModule);
exports.ChartistModule = ChartistModule;
// for angular-cli
exports.default = {
    directives: [ChartistComponent]
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=ng-chartist.js.map

/***/ }),

/***/ "./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js ***!
  \*********************************************************/
/*! exports provided: CKEditorComponent, CKEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorComponent", function() { return CKEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaults = {
    contentsCss: [''],
    customConfig: ''
};
var CKEditorComponent = /** @class */ (function () {
    function CKEditorComponent(ngZone, hostEl) {
        this.ngZone = ngZone;
        this.hostEl = hostEl;
        this.innerValue = '';
        this.disabled = false;
        this.editorInitialized = false;
        /**
         * Is readonly mode, default:false
         */
        this.readonly = false;
        /**
         * The ck-editor config object.
         */
        this.config = {};
        /**
         * The special skin, default: moono-lisa
         */
        this.skin = 'moono-lisa';
        /**
         * The special language, default: en
         */
        this.language = 'en';
        /**
         * Use fullpage mode, default:false
         */
        this.fullPage = false;
        /**
         * Use inline mode, default: false
         */
        this.inline = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = function (value) { };
        this.onTouched = function () { };
        this.identifier = CKEditorComponent.getRandomIdentifier(this.id);
    }
    /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    CKEditorComponent.getRandomIdentifier = /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (id === void 0) { id = ''; }
        return 'editor-' + (id !== '' ? id : String(CKEditorComponent.idx++));
    };
    Object.defineProperty(CKEditorComponent.prototype, "instance", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ckIns;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.editorInitialized) {
            this.destroyEditor();
            this.initEditor(this.identifier);
        }
    };
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (!this.editorInitialized && this.documentContains(this.textareaRef.nativeElement)) {
            this.editorInitialized = true;
            this.initEditor(this.identifier);
        }
        else if (this.editorInitialized && !this.documentContains(this.textareaRef.nativeElement)) {
            this.editorInitialized = false;
            this.destroyEditor();
        }
    };
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyEditor();
    };
    /**
     * @private
     * @param {?} identifier
     * @return {?}
     */
    CKEditorComponent.prototype.initEditor = /**
     * @private
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            return console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        /** @type {?} */
        var textareaEl = this.textareaRef.nativeElement;
        this.identifier = identifier;
        textareaEl.setAttribute('name', this.identifier);
        if (this.ckIns || !this.documentContains(this.textareaRef.nativeElement)) {
            return;
        }
        /** @type {?} */
        var opt = Object.assign({}, defaults, this.config, {
            readOnly: this.readonly,
            skin: this.skin,
            language: this.language,
            fullPage: this.fullPage,
            inline: this.inline
        });
        this.ckIns = this.inline ? CKEDITOR.inline(textareaEl, opt) : CKEDITOR.replace(textareaEl, opt);
        this.ckIns.setData(this.innerValue);
        this.ckIns.on('change', function () {
            /** @type {?} */
            var val = _this.ckIns.getData();
            _this.updateValue(val);
        });
        this.ckIns.on('instanceReady', function (evt) {
            _this.ngZone.run(function () {
                _this.ready.emit(evt);
            });
        });
        this.ckIns.on('blur', function (evt) {
            _this.ngZone.run(function () {
                _this.blur.emit(evt);
                _this.onTouched();
            });
        });
        this.ckIns.on('focus', function (evt) {
            _this.ngZone.run(function () {
                _this.focus.emit(evt);
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    CKEditorComponent.prototype.destroyEditor = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.ckIns) {
            // If use destroy, will fire 'Error code: editor-destroy-iframe'
            // this.ckIns.destroy();
            if (CKEDITOR.instances.hasOwnProperty(this.ckIns.name)) {
                CKEDITOR.remove(CKEDITOR.instances[this.ckIns.name]);
            }
            this.ckIns = null;
            /** @type {?} */
            var editorEl = this.hostEl.nativeElement.querySelector('#cke_' + this.identifier);
            if (editorEl != null && editorEl.parentElement) {
                editorEl.parentElement.removeChild(editorEl);
            }
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CKEditorComponent.prototype.updateValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.ngZone.run(function () {
            _this.innerValue = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    CKEditorComponent.prototype.documentContains = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CKEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.innerValue = value || '';
        if (this.ckIns) {
            // Fix bug that can't emit change event when set non-html tag value twice in fullpage mode.
            this.ckIns.setData(this.innerValue);
            /** @type {?} */
            var val = this.ckIns.getData();
            this.ckIns.setData(val);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CKEditorComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CKEditorComponent.idx = 1;
    CKEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ck-editor',
                    template: "\n    <textarea #textarea></textarea>\n  ",
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CKEditorComponent; }), multi: true }],
                    exportAs: 'ckEditor'
                },] },
    ];
    /** @nocollapse */
    CKEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    CKEditorComponent.propDecorators = {
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        skin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fullPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        textareaRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['textarea',] }]
    };
    return CKEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], CKEditorComponent],
                    declarations: [CKEditorComponent],
                    providers: []
                },] },
    ];
    return CKEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNrZWRpdG9yLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtY2tlZGl0b3IvbGliL2NrLWVkaXRvci5jb21wb25lbnQudHMiLCJuZzovL25neC1ja2VkaXRvci9saWIvY2stZWRpdG9yLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBmb3J3YXJkUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7XHJcblxyXG5jb25zdCBkZWZhdWx0cyA9IHtcclxuICBjb250ZW50c0NzczogWycnXSxcclxuICBjdXN0b21Db25maWc6ICcnXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NrLWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx0ZXh0YXJlYSAjdGV4dGFyZWE+PC90ZXh0YXJlYT5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENLRWRpdG9yQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfV0sXHJcbiAgZXhwb3J0QXM6ICdja0VkaXRvcidcclxufSlcclxuZXhwb3J0IGNsYXNzIENLRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3Q2hlY2tlZCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByaXZhdGUgY2tJbnM6IGFueTtcclxuICBwcml2YXRlIGlubmVyVmFsdWUgPSAnJztcclxuICBwcml2YXRlIGlkZW50aWZpZXI6IHN0cmluZztcclxuICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBlZGl0b3JJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBJcyByZWFkb25seSBtb2RlLCBkZWZhdWx0OmZhbHNlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHJlYWRvbmx5ID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNrLWVkaXRvciBjb25maWcgb2JqZWN0LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzcGVjaWFsIHNraW4sIGRlZmF1bHQ6IG1vb25vLWxpc2FcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgc2tpbiA9ICdtb29uby1saXNhJztcclxuICAvKipcclxuICAgKiBUaGUgc3BlY2lhbCBsYW5ndWFnZSwgZGVmYXVsdDogZW5cclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFuZ3VhZ2UgPSAnZW4nO1xyXG4gIC8qKlxyXG4gICAqIFVzZSBmdWxscGFnZSBtb2RlLCBkZWZhdWx0OmZhbHNlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGZ1bGxQYWdlID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogVXNlIGlubGluZSBtb2RlLCBkZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpbmxpbmUgPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBUaGUgZWRpdG9yIGlkXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJykgcHVibGljIHRleHRhcmVhUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpZHggPSAxO1xyXG4gIHByaXZhdGUgc3RhdGljIGdldFJhbmRvbUlkZW50aWZpZXIoaWQ6IHN0cmluZyA9ICcnKSB7XHJcbiAgICByZXR1cm4gJ2VkaXRvci0nICsgKGlkICE9PSAnJyA/IGlkIDogU3RyaW5nKENLRWRpdG9yQ29tcG9uZW50LmlkeCsrKSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7fTtcclxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgcHVibGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNrSW5zO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBob3N0RWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuaWRlbnRpZmllciA9IENLRWRpdG9yQ29tcG9uZW50LmdldFJhbmRvbUlkZW50aWZpZXIodGhpcy5pZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVkaXRvckluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveUVkaXRvcigpO1xyXG4gICAgICB0aGlzLmluaXRFZGl0b3IodGhpcy5pZGVudGlmaWVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIGlmICghdGhpcy5lZGl0b3JJbml0aWFsaXplZCAmJiB0aGlzLmRvY3VtZW50Q29udGFpbnModGhpcy50ZXh0YXJlYVJlZi5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICB0aGlzLmVkaXRvckluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0RWRpdG9yKHRoaXMuaWRlbnRpZmllcik7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdG9ySW5pdGlhbGl6ZWQgJiYgIXRoaXMuZG9jdW1lbnRDb250YWlucyh0aGlzLnRleHRhcmVhUmVmLm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9ySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kZXN0cm95RWRpdG9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveUVkaXRvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RWRpdG9yKGlkZW50aWZpZXI6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiBDS0VESVRPUiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUud2FybignQ0tFZGl0b3IgNC54IGlzIG1pc3NpbmcgKGh0dHA6Ly9ja2VkaXRvci5jb20vKScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dGFyZWFFbCA9IHRoaXMudGV4dGFyZWFSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XHJcbiAgICB0ZXh0YXJlYUVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuaWRlbnRpZmllcik7XHJcbiAgICBpZiAodGhpcy5ja0lucyB8fCAhdGhpcy5kb2N1bWVudENvbnRhaW5zKHRoaXMudGV4dGFyZWFSZWYubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCB0aGlzLmNvbmZpZywge1xyXG4gICAgICByZWFkT25seTogdGhpcy5yZWFkb25seSxcclxuICAgICAgc2tpbjogdGhpcy5za2luLFxyXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcclxuICAgICAgZnVsbFBhZ2U6IHRoaXMuZnVsbFBhZ2UsXHJcbiAgICAgIGlubGluZTogdGhpcy5pbmxpbmVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2tJbnMgPSB0aGlzLmlubGluZSA/IENLRURJVE9SLmlubGluZSh0ZXh0YXJlYUVsLCBvcHQpIDogQ0tFRElUT1IucmVwbGFjZSh0ZXh0YXJlYUVsLCBvcHQpO1xyXG4gICAgdGhpcy5ja0lucy5zZXREYXRhKHRoaXMuaW5uZXJWYWx1ZSk7XHJcblxyXG4gICAgdGhpcy5ja0lucy5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWwgPSB0aGlzLmNrSW5zLmdldERhdGEoKTtcclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ja0lucy5vbignaW5zdGFuY2VSZWFkeScsIChldnQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVhZHkuZW1pdChldnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2tJbnMub24oJ2JsdXInLCAoZXZ0OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmJsdXIuZW1pdChldnQpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ja0lucy5vbignZm9jdXMnLCAoZXZ0OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmZvY3VzLmVtaXQoZXZ0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveUVkaXRvcigpIHtcclxuICAgIGlmICh0aGlzLmNrSW5zKSB7XHJcbiAgICAgIC8vIElmIHVzZSBkZXN0cm95LCB3aWxsIGZpcmUgJ0Vycm9yIGNvZGU6IGVkaXRvci1kZXN0cm95LWlmcmFtZSdcclxuICAgICAgLy8gdGhpcy5ja0lucy5kZXN0cm95KCk7XHJcbiAgICAgIGlmIChDS0VESVRPUi5pbnN0YW5jZXMuaGFzT3duUHJvcGVydHkodGhpcy5ja0lucy5uYW1lKSkge1xyXG4gICAgICAgIENLRURJVE9SLnJlbW92ZShDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5ja0lucy5uYW1lXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ja0lucyA9IG51bGw7XHJcbiAgICAgIGNvbnN0IGVkaXRvckVsID0gdGhpcy5ob3N0RWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjY2tlXycgKyB0aGlzLmlkZW50aWZpZXIpO1xyXG4gICAgICBpZiAoZWRpdG9yRWwgIT0gbnVsbCAmJiBlZGl0b3JFbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgZWRpdG9yRWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlZGl0b3JFbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb2N1bWVudENvbnRhaW5zKG5vZGU6IE5vZGUpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jb250YWlucyA/IGRvY3VtZW50LmNvbnRhaW5zKG5vZGUpIDogZG9jdW1lbnQuYm9keS5jb250YWlucyhub2RlKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICBpZiAodGhpcy5ja0lucykge1xyXG4gICAgICAvLyBGaXggYnVnIHRoYXQgY2FuJ3QgZW1pdCBjaGFuZ2UgZXZlbnQgd2hlbiBzZXQgbm9uLWh0bWwgdGFnIHZhbHVlIHR3aWNlIGluIGZ1bGxwYWdlIG1vZGUuXHJcbiAgICAgIHRoaXMuY2tJbnMuc2V0RGF0YSh0aGlzLmlubmVyVmFsdWUpO1xyXG4gICAgICBjb25zdCB2YWwgPSB0aGlzLmNrSW5zLmdldERhdGEoKTtcclxuICAgICAgdGhpcy5ja0lucy5zZXREYXRhKHZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENLRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jay1lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogW0Zvcm1zTW9kdWxlLCBDS0VkaXRvckNvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ0tFZGl0b3JDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIENLRWRpdG9yTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFvQk0sUUFBUSxHQUFHO0lBQ2YsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2pCLFlBQVksRUFBRSxFQUFFO0NBQ2pCO0FBRUQ7SUErREUsMkJBQW9CLE1BQWMsRUFBVSxNQUFrQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQXJEdEQsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLEtBQUssQ0FBQzs7OztRQUtsQixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBSWpCLFdBQU0sR0FBUSxFQUFFLENBQUM7Ozs7UUFJakIsU0FBSSxHQUFHLFlBQVksQ0FBQzs7OztRQUlwQixhQUFRLEdBQUcsSUFBSSxDQUFDOzs7O1FBSWhCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFJakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQU1kLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBUzVDLGFBQVEsR0FBRyxVQUFDLEtBQWEsS0FBTyxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxlQUFRLENBQUM7UUFPbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEU7Ozs7OztJQWJjLHFDQUFtQjs7Ozs7SUFBbEMsVUFBbUMsRUFBZTtRQUFmLG1CQUFBLEVBQUEsT0FBZTtRQUNoRCxPQUFPLFNBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFO0lBS0Qsc0JBQVcsdUNBQVE7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7OztPQUFBOzs7O0lBTUQsb0NBQVE7OztJQUFSLGVBQWE7Ozs7O0lBRWIsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsQztLQUNGOzs7O0lBRUQsOENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEM7YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7OztJQUVPLHNDQUFVOzs7OztJQUFsQixVQUFtQixVQUFrQjtRQUFyQyxpQkE2Q0M7UUE1Q0MsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDbkMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDdkU7O1lBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDeEUsT0FBTztTQUNSOztZQUVLLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztRQUVGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFOztnQkFDaEIsR0FBRyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2hDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQUMsR0FBUTtZQUN0QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFRO1lBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEIsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBUTtZQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFTyx5Q0FBYTs7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7O1lBR2QsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0RCxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O2dCQUNaLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkYsSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQzlDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7S0FDRjs7Ozs7O0lBRU8sdUNBQVc7Ozs7O0lBQW5CLFVBQW9CLEtBQWE7UUFBakMsaUJBT0M7UUFOQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFFTyw0Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLElBQVU7UUFDakMsT0FBTyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkY7Ozs7O0lBRUQsc0NBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7WUFFZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O2dCQUM5QixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7S0FDRjs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWtCLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzVCO0lBdEljLHFCQUFHLEdBQUcsQ0FBQyxDQUFDOztnQkFuRHhCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDJDQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixHQUFBLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQzFHLFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7OztnQkF6QkMsTUFBTTtnQkFITixVQUFVOzs7MkJBdUNULEtBQUs7eUJBSUwsS0FBSzt1QkFJTCxLQUFLOzJCQUlMLEtBQUs7MkJBSUwsS0FBSzt5QkFJTCxLQUFLO3FCQUlMLEtBQUs7eUJBRUwsTUFBTTt3QkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTs4QkFFTixTQUFTLFNBQUMsVUFBVTs7SUF5SXZCLHdCQUFDO0NBQUE7Ozs7OztBQ25ORDtJQUlBO0tBTThCOztnQkFON0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztvQkFDekMsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLFNBQVMsRUFBRSxFQUFFO2lCQUNkOztJQUM0QixxQkFBQztDQUFBOzs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/qrcodejs2/qrcode.js":
/*!******************************************!*\
  !*** ./node_modules/qrcodejs2/qrcode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
var QRCode;

(function (root, factory) {

	/* CommonJS */
  if (true) module.exports = factory()

  /* AMD module */
  else {}

}(this, function () {	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];

		// Added to support UTF-8 Characters
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);

			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}

			this.parsedData.push(byteArray);
		}

		this.parsedData = Array.prototype.concat.apply([], this.parsedData);

		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}

	QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.parsedData.length;
		},
		write: function (buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];

	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}

	// android 2.x doesn't support Data-URI spec
	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;

		if (/android/i.test(sAgent)) { // android
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}

		return android;
	}

	var svgDrawer = (function() {

		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		Drawing.prototype.draw = function (oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);

			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}

			var svg = makeSVG("svg" , {'viewBox': '0 0 ' + String(nCount) + " " + String(nCount), 'width': '100%', 'height': '100%', 'fill': _htOption.colorLight});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			_el.appendChild(svg);

			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorLight, "width": "100%", "height": "100%"}));
			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorDark, "width": "1", "height": "1", "id": "template"}));

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					if (oQRCode.isDark(row, col)) {
						var child = makeSVG("use", {"x": String(col), "y": String(row)});
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
						svg.appendChild(child);
					}
				}
			}
		};
		Drawing.prototype.clear = function () {
			while (this._el.hasChildNodes())
				this._el.removeChild(this._el.lastChild);
		};
		return Drawing;
	})();

	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";

	// Drawing in DOM by using Table tag
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function () {
		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');

				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}

				aHTML.push('</tr>');
			}

			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');

			// Fix the margin values as real size.
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
			}
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._el.innerHTML = '';
		};

		return Drawing;
	})() : (function () { // Drawing in Canvas
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.display = "block";
			this._elCanvas.style.display = "none";
		}

		// Android 2.1 bug workaround
		// http://code.google.com/p/android/issues/detail?id=5141
		if (this._android && this._android <= 2.1) {
	    	var factor = 1 / window.devicePixelRatio;
	        var drawImage = CanvasRenderingContext2D.prototype.drawImage;
	    	CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	    		if (("nodeName" in image) && /img/i.test(image.nodeName)) {
		        	for (var i = arguments.length - 1; i >= 1; i--) {
		            	arguments[i] = arguments[i] * factor;
		        	}
	    		} else if (typeof dw == "undefined") {
	    			arguments[1] *= factor;
	    			arguments[2] *= factor;
	    			arguments[3] *= factor;
	    			arguments[4] *= factor;
	    		}

	        	drawImage.apply(this, arguments);
	    	};
		}

		/**
		 * Check whether the user's browser supports Data URI or not
		 *
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */
		function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;

            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;

                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;

                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };

                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
		};

		/**
		 * Drawing QRCode by using canvas
		 *
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options
		 */
		var Drawing = function (el, htOption) {
    		this._bIsPainted = false;
    		this._android = _getAndroid();

			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width;
			this._elCanvas.height = htOption.height;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.display = "none";
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;

			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);

			_elImage.style.display = "none";
			this.clear();

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight);

					// 안티 앨리어싱 방지 처리
					_oContext.strokeRect(
						Math.floor(nLeft) + 0.5,
						Math.floor(nTop) + 0.5,
						nRoundedWidth,
						nRoundedHeight
					);

					_oContext.strokeRect(
						Math.ceil(nLeft) - 0.5,
						Math.ceil(nTop) - 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
				}
			}

			this._bIsPainted = true;
		};

		/**
		 * Make the image from Canvas if the browser supports Data URI.
		 */
		Drawing.prototype.makeImage = function () {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};

		/**
		 * Return whether the QRCode is painted or not
		 *
		 * @return {Boolean}
		 */
		Drawing.prototype.isPainted = function () {
			return this._bIsPainted;
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			this._bIsPainted = false;
		};

		/**
		 * @private
		 * @param {Number} nNumber
		 */
		Drawing.prototype.round = function (nNumber) {
			if (!nNumber) {
				return nNumber;
			}

			return Math.floor(nNumber * 1000) / 1000;
		};

		return Drawing;
	})();

	/**
	 * Get the type by string length
	 *
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */
	function _getTypeNumber(sText, nCorrectLevel) {
		var nType = 1;
		var length = _getUTF8Length(sText);

		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;

			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L :
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M :
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q :
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H :
					nLimit = QRCodeLimitLength[i][3];
					break;
			}

			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}

		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}

		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}

	/**
	 * @class QRCode
	 * @constructor
	 * @example
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 *
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
	 */
	QRCode = function (el, vOption) {
		this._htOption = {
			width : 256,
			height : 256,
			typeNumber : 4,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRErrorCorrectLevel.H
		};

		if (typeof vOption === 'string') {
			vOption	= {
				text : vOption
			};
		}

		// Overwrites options
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}

		if (typeof el == "string") {
			el = document.getElementById(el);
		}

		if (this._htOption.useSVG) {
			Drawing = svgDrawer;
		}

		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawing(this._el, this._htOption);

		if (this._htOption.text) {
			this.makeCode(this._htOption.text);
		}
	};

	/**
	 * Make the QRCode
	 *
	 * @param {String} sText link data
	 */
	QRCode.prototype.makeCode = function (sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		this._el.title = sText;
		this._oDrawing.draw(this._oQRCode);
		this.makeImage();
	};

	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 *
	 * @private
	 */
	QRCode.prototype.makeImage = function () {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};

	/**
	 * Clear the QRCode
	 */
	QRCode.prototype.clear = function () {
		this._oDrawing.clear();
	};

	/**
	 * @name QRCode.CorrectLevel
	 */
	QRCode.CorrectLevel = QRErrorCorrectLevel;
	
	return QRCode;
	
}));


/***/ }),

/***/ "./src/app/dashboard/addtocart/addtocart.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/addtocart/addtocart.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Add To Cart List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr. No.</th>\r\n                                    <th>Social Name</th>\r\n                                    <th>Link</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of Addtocartdata; index as i\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{data.name }}</td>\r\n                                    <td>{{data.title }}</td>\r\n                                    <td>\r\n                                        <!--<a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <!--<a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreatedata(data.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteAddtocartdata(data.id)\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/addtocart/addtocart.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/addtocart/addtocart.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FkZHRvY2FydC9EOlxccmVzdGF1cmFudC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxhZGR0b2NhcnRcXGFkZHRvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZGR0b2NhcnQvYWRkdG9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWdyaWR7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XHJcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuNztcclxuICAgIGZpbGw6dXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50KSAhaW1wb3J0YW50O1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjk7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtbGluZXtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBFbmRzXHJcblxyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5TdGFja2JhcmNoYXJ0e1xyXG4gICAgLmN0LXNlcmllcy1hIHtcclxuICAgICAgICAuY3QtYmFye1xyXG4gICAgICAgICAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNsaW5lYXIpICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3Qtc2VyaWVzLWIge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogI2U5ZTllOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGV7XHJcbiAgICBzdHJva2U6ICM4NDNjZjc7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI0E2NzVGNDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjMzFhZmIyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGFiZWwge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIExpbmUgQ2hhcnQgIENTUyBFbmRzXHJcbiBcclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMwQ0MyN0U7XHJcbiAgICBzdHJva2Utd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0ZGQzEwNztcclxuICAgIHN0cm9rZS13aWR0aDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjN0U1N0MyO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMjE5NkYzO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmaWxsOiAjODY4ZTk2O1xyXG4gIH1cclxuXHJcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXHJcblxyXG4gIC8vIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMSkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ3KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisyKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDUpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzMpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nik7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rNCkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ0KTtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtZ3JpZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7ICAgIFxyXG4gICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydHNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgRW5kcyJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/addtocart/addtocart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/addtocart/addtocart.component.ts ***!
  \************************************************************/
/*! exports provided: AddtocartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtocartComponent", function() { return AddtocartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddtocartComponent = /** @class */ (function () {
    function AddtocartComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    AddtocartComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getAddtocartdata();
    };
    AddtocartComponent.prototype.getAddtocartdata = function () {
        var _this = this;
        this.appservice.addtocartdata()
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.Addtocartdata = data.data;
            }
        });
    };
    AddtocartComponent.prototype.deleteAddtocartdata = function (id) {
        var _this = this;
        this.appservice.deleteaddtocart(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.router.navigate(['/addtocart']);
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
                _this.router.navigate(['/addtocart']);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    AddtocartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtocart',
            template: __webpack_require__(/*! ./addtocart.component.html */ "./src/app/dashboard/addtocart/addtocart.component.html"),
            styles: [__webpack_require__(/*! ./addtocart.component.scss */ "./src/app/dashboard/addtocart/addtocart.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], AddtocartComponent);
    return AddtocartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/appuser/appuser.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/appuser/appuser.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <!--<div class=\"row\">\r\n                        <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"goToCreateUser(':id')\">Add Restaurant</button>\r\n                    </div>-->\r\n                    <div class=\"row\">\r\n                        <h4 class=\"card-title\">Restaurantr Info</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr. No.</th>\r\n                                    <th>Name</th>\r\n                                    <th>Email</th>\r\n                                    <th>Location</th>\r\n                                    <th>Restaurant Id</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let users of userData; index as i\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{users.name}}</td>\r\n                                    <td>{{users.email}}</td>\r\n                                    <td>{{users.mobile}}</td>\r\n                                    <td>{{users.restaurant_id}}</td>\r\n                                    <td>\r\n                                        <!--<a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreateUser(users.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/appuser/appuser.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/appuser/appuser.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FwcHVzZXIvRDpcXHJlc3RhdXJhbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcYXBwdXNlclxcYXBwdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hcHB1c2VyL2FwcHVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/appuser/appuser.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/appuser/appuser.component.ts ***!
  \********************************************************/
/*! exports provided: AppuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppuserComponent", function() { return AppuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppuserComponent = /** @class */ (function () {
    function AppuserComponent(appservice, route, cookieservice) {
        this.appservice = appservice;
        this.route = route;
        this.cookieservice = cookieservice;
    }
    AppuserComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.route.navigate(['/auth']);
        }
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.restid = JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.getUsers();
    };
    AppuserComponent.prototype.getUsers = function () {
        var _this = this;
        this.appservice.users(this.restid)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.userData = data.data;
            }
        });
    };
    AppuserComponent.prototype.goToCreateUser = function (id) {
        // alert();
        this.route.navigate(['/create-user', id]);
    };
    AppuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appuser',
            template: __webpack_require__(/*! ./appuser.component.html */ "./src/app/dashboard/appuser/appuser.component.html"),
            styles: [__webpack_require__(/*! ./appuser.component.scss */ "./src/app/dashboard/appuser/appuser.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AppuserComponent);
    return AppuserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/blog/blog.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/blog/blog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <!--<div class=\"card-header\">\r\n                    <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"goToCreatedata(':id')\">Add Blog Data</button>\r\n                </div>-->\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Blog Data List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr. No.</th>\r\n                                    <th>Title</th>\r\n                                    <th>Description</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of Blogdata; index as i\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{data.title }}</td>\r\n                                    <td><span [innerHTML]=\"data.description\"></span></td>\r\n                                    <td>\r\n                                        <!--<a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreatedata(data.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                        <!--<a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteBlogdata(data.id)\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/blog/blog.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/blog/blog.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Jsb2cvRDpcXHJlc3RhdXJhbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcYmxvZ1xcYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/blog/blog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/blog/blog.component.ts ***!
  \**************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogComponent = /** @class */ (function () {
    function BlogComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    BlogComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getBlogdata();
    };
    BlogComponent.prototype.getBlogdata = function () {
        var _this = this;
        this.appservice.blogdata()
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.Blogdata = data.data;
            }
        });
    };
    BlogComponent.prototype.goToCreatedata = function (id) {
        // alert();
        this.router.navigate(['/create-blog', id]);
    };
    BlogComponent.prototype.deleteBlogdata = function (id) {
        var _this = this;
        this.appservice.deleteblog(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.router.navigate(['/blog']);
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
                _this.router.navigate(['/blog']);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/dashboard/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/dashboard/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/carrier/carrier.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/carrier/carrier.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"goToaddcarrier(':id')\">Add carrier</button>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">carrier List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>carrier Name</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let carrier of Carrierdata; index as i\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{carrier.name}}</td>\r\n                                    <td>\r\n                                       <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreatecarrier(carrier.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/carrier/carrier.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/carrier/carrier.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NhcnJpZXIvRDpcXHJlc3RhdXJhbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcY2FycmllclxcY2Fycmllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jYXJyaWVyL2NhcnJpZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/carrier/carrier.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/carrier/carrier.component.ts ***!
  \********************************************************/
/*! exports provided: CarrierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierComponent", function() { return CarrierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarrierComponent = /** @class */ (function () {
    function CarrierComponent(appservice, route, cookieservice) {
        this.appservice = appservice;
        this.route = route;
        this.cookieservice = cookieservice;
    }
    CarrierComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.route.navigate(['/auth']);
        }
        this.getcarrier();
    };
    CarrierComponent.prototype.getcarrier = function () {
        var _this = this;
        this.appservice.carrier()
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.Carrierdata = data.data;
            }
        });
    };
    CarrierComponent.prototype.goToCreatecarrier = function (id) {
        // alert();
        this.route.navigate(['/create-carrier', id]);
    };
    CarrierComponent.prototype.goToaddcarrier = function (id) {
        // alert();
        this.route.navigate(['/create-carrier', id]);
    };
    CarrierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrier',
            template: __webpack_require__(/*! ./carrier.component.html */ "./src/app/dashboard/carrier/carrier.component.html"),
            styles: [__webpack_require__(/*! ./carrier.component.scss */ "./src/app/dashboard/carrier/carrier.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], CarrierComponent);
    return CarrierComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/category/category.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/category/category.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row akhil\">\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"col-lg-12 input-group\">\r\n                                    <div class=\"col-lg-6\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"goToaddcategory(':id')\">Add Food Type</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"projectinput5\" class=\"form-control\" id=\"getpage\" (change)=\"getrecord()\">\r\n                                        <option value=\"10\"  selected>10</option>\r\n                                        <option value=\"10000\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <a class=\"btn btn-raised mr-1 btn-primary\" (click)=\"exportAsXLSX()\">Download List</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Type List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Type Name</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let category of categorydata; index as i\">\r\n                                    <td>{{itemsPerPage *(currentPage-1)+i+1}}</td>\r\n                                    <td>{{category.name}}</td>\r\n                                    <td>\r\n                                       <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreatecategory(category.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletecategory(category.id)\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"totalRecords !== ''\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-pagination (pageChange)=\"handleChange($event)\" [collectionSize]=\"totalRecords\" [(page)]=\"initialPageValue\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/category/category.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/category/category.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.akhil {\n  margin-bottom: -45px;\n  margin-top: 28px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NhdGVnb3J5L0Q6XFxyZXN0YXVyYW50L3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNhdGVnb3J5XFxjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFDRDtFQUNJLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuLmFraGlse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG59XHJcblxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgRW5kcyJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/category/category.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/category/category.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(appservice, router, route, toasterservice, loaderservice, cookieservice, excelService) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.excelService = excelService;
        this.initialPageValue = 1;
        this.startpagevalue = 0;
    }
    //config.boundaryLinks = true
    CategoryComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getcategory();
    };
    CategoryComponent.prototype.getcategory = function () {
        var _this = this;
        this.appservice.category(this.startpagevalue, 10)
            .subscribe(function (data) {
            if (data.status == '1') {
                // this.currentPage2=data.count;
                _this.categorydata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    CategoryComponent.prototype.deletecategory = function (id) {
        var _this = this;
        this.appservice.deletecategory(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.categorydata = data.data;
                _this.toasterservice.Success(data.message);
                _this.router.navigate(['/category']);
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
                _this.router.navigate(['/category']);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    CategoryComponent.prototype.goToCreatecategory = function (id) {
        // alert();
        this.router.navigate(['/create-category', id]);
    };
    CategoryComponent.prototype.goToaddcategory = function (id) {
        // alert();
        this.router.navigate(['/create-category', id]);
    };
    CategoryComponent.prototype.handleChange = function (en) {
        var _this = this;
        this.pno = en - 1;
        this.appservice.category(this.pno, 10)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.categorydata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = en;
            }
        });
    };
    CategoryComponent.prototype.exportAsXLSX = function () {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.categorydata, 'sample');
    };
    CategoryComponent.prototype.getrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.appservice.category(this.startpagevalue, this.totalrecord.value)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.categorydata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/dashboard/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/dashboard/category/category.component.scss")],
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/closeorder/closeorder.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/closeorder/closeorder.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row akhil\">\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"projectinput5\" class=\"form-control\" id=\"getpage\" (change)=\"getrecord()\">\r\n                                        <option value=\"10\"  selected>10</option>\r\n                                        <option value=\"10000\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <a class=\"btn btn-raised mr-1 btn-primary\" (click)=\"exportAsXLSX()\">Download List</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Closed Orders</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Table Id</th>\r\n                                    <th>Order Amount</th>\r\n                                    <th>Customer Detail</th>\r\n                                    <th>Order Date</th>\r\n                                    <th>Item Info</th>\r\n                                    <!--<th>Status</th>-->\r\n                                   \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let product of TodaySolddata; index as i\">\r\n                                    <td>{{itemsPerPage *(currentPage-1)+i+1}}</td>\r\n                                    <td>{{product.name}}</td>\r\n                                    <td>{{product.total_amount}}</td>\r\n                                    <td>{{product.cust_name}}</td>\r\n                                    <input type=\"hidden\" id=\"restid\" value=\"{{product.restaurant_id}}\"/>\r\n                                    <input type=\"hidden\" id=\"tabid\" value=\"{{product.table_id}}\"/>\r\n                                    <td>{{product.created_date | date:'dd/MM/yyyy'}}</td>\r\n                                    <td>\r\n                                        <button class=\"btn btn-raised mr-1 btn-info\" (click)=\"open(content,product.id)\">Detail</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 1\" >\r\n                                        <button class=\"btn btn-raised mr-1 btn-success\" value=\"2\" (click)=\"changestatus('2')\">Accept</button>\r\n                                        <button class=\"btn btn-raised mr-1 btn-danger\" value=\"4\" (click)=\"changestatus('4')\">Reject</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 2\">\r\n                                        <button class=\"btn btn-raised mr-1 btn-primary\" value=\"3\" (click)=\"changestatus('3')\">Close order</button>\r\n                                    </td>\r\n                                    <!--<td id=\"statusreport\" *ngIf=\"product.status == 3\">Close</td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 4\">Cancel</td>-->\r\n                                    \r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"totalRecords !== ''\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-pagination (pageChange)=\"handleChange($event)\" [collectionSize]=\"totalRecords\" [(page)]=\"initialPageValue\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Item Info</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <!--<p>One fine body&hellip;</p>-->\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <table class=\"table table-responsive-md text-left\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Sr.No.</th>\r\n                                        <th>Item Name</th>\r\n                                        <th>Quantity</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of itemifo; index as i\">\r\n                                        <td>{{i+1}}</td>\r\n                                        <td>{{item.name}}</td>\r\n                                        <td>{{item.quantity}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <!--<button  type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"changestatus()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>-->\r\n                    <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/closeorder/closeorder.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/closeorder/closeorder.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.akhil {\n  margin-bottom: -45px;\n  margin-top: 28px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Nsb3Nlb3JkZXIvRDpcXHJlc3RhdXJhbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcY2xvc2VvcmRlclxcY2xvc2VvcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFDRDtFQUNJLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY2xvc2VvcmRlci9jbG9zZW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWdyaWR7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XHJcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuNztcclxuICAgIGZpbGw6dXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50KSAhaW1wb3J0YW50O1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjk7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtbGluZXtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBFbmRzXHJcblxyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5TdGFja2JhcmNoYXJ0e1xyXG4gICAgLmN0LXNlcmllcy1hIHtcclxuICAgICAgICAuY3QtYmFye1xyXG4gICAgICAgICAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNsaW5lYXIpICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3Qtc2VyaWVzLWIge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogI2U5ZTllOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGV7XHJcbiAgICBzdHJva2U6ICM4NDNjZjc7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI0E2NzVGNDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjMzFhZmIyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGFiZWwge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIExpbmUgQ2hhcnQgIENTUyBFbmRzXHJcbiBcclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMwQ0MyN0U7XHJcbiAgICBzdHJva2Utd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0ZGQzEwNztcclxuICAgIHN0cm9rZS13aWR0aDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjN0U1N0MyO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMjE5NkYzO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmaWxsOiAjODY4ZTk2O1xyXG4gIH1cclxuXHJcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXHJcblxyXG4gIC8vIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMSkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ3KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisyKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDUpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzMpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nik7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rNCkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ0KTtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtZ3JpZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7ICAgIFxyXG4gICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydHNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcbi5ha2hpbHtcclxuICAgIG1hcmdpbi1ib3R0b206IC00NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxufVxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgRW5kcyJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/closeorder/closeorder.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/closeorder/closeorder.component.ts ***!
  \**************************************************************/
/*! exports provided: NgbdModalContent, CloseorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseorderComponent", function() { return CloseorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var CloseorderComponent = /** @class */ (function () {
    function CloseorderComponent(modalService, appservice, router, route, toasterservice, loaderservice, cookieservice, excelService) {
        this.modalService = modalService;
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.excelService = excelService;
        this.initialPageValue = 1;
        this.startpagevalue = 0;
    }
    CloseorderComponent.prototype.ngOnInit = function () {
        this.d = new Date();
        this.today = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + this.d.getDate();
        //this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()-1);
        this.startValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() - 2);
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() + 1);
        ;
        //console.log(this.endValue);
        //console.log(this.startValue);
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getTodaySold();
        this.startdate = this.startValue;
        this.enddate = this.today;
    };
    CloseorderComponent.prototype.getTodaySold = function () {
        var _this = this;
        this.appservice.getreport(this.startpagevalue, 10, 3)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
                //this.ngOnInit();
            }
            else {
                _this.TodaySolddata = data.data;
                //this.ngOnInit();
            }
        });
    };
    CloseorderComponent.prototype.getsalesreport = function () {
        var _this = this;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, 10, 3)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    CloseorderComponent.prototype.handleChange = function (en) {
        var _this = this;
        this.pno = en - 1;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.pno, 10, 3)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = en;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    CloseorderComponent.prototype.exportAsXLSX = function () {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.TodaySolddata, 'sample');
    };
    CloseorderComponent.prototype.getrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 3)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    CloseorderComponent.prototype.getstatusrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 3)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    CloseorderComponent.prototype.open = function (content, id) {
        var _this = this;
        this.appservice.getiteminfo(id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.itemifo = data.data;
            }
            else {
                _this.itemifo = data.data;
            }
        });
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    CloseorderComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    CloseorderComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    CloseorderComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    CloseorderComponent.prototype.changestatus = function (state, id) {
        var _this = this;
        this.loaderservice.display(true);
        this.restid = document.getElementById("restid");
        this.tabid = document.getElementById("tabid");
        this.appservice.updatestatus(state, this.restid.value, this.tabid.value, id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.getTodaySold();
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    CloseorderComponent.prototype.changecook = function (con, val, oid) {
        var _this = this;
        this.loaderservice.display(true);
        this.appservice.updatecook(con, val, oid)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.itemifo = data.data;
            }
            else {
                _this.toasterservice.Error(data.message);
                _this.itemifo = data.data;
            }
        });
    };
    CloseorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closeorder',
            template: __webpack_require__(/*! ./closeorder.component.html */ "./src/app/dashboard/closeorder/closeorder.component.html"),
            styles: [__webpack_require__(/*! ./closeorder.component.scss */ "./src/app/dashboard/closeorder/closeorder.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], CloseorderComponent);
    return CloseorderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/contact/contact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/contact/contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <!--<div class=\"card-header\">\r\n                    <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"goToaddcontact(':id')\">Add Contact</button>\r\n                </div>-->\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Contact List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr. No.</th>\r\n                                    <th>Name</th>\r\n                                    <th>Email</th>\r\n                                    <th>Mobile</th>\r\n                                    <th>Address</th>\r\n                                    <th>License No</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let contact of Contactdata; index as i\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{contact.name}}</td>\r\n                                    <td>{{contact.email}}</td>\r\n                                    <td>{{contact.mobile}}</td>\r\n                                    <td>{{contact.address}}</td>\r\n                                    <td>{{contact.license_no}}</td>\r\n                                    <td>\r\n                                        <!--<a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreateContact(contact.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                        <!--<a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteContact(contact.id)\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/contact/contact.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/contact/contact.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbnRhY3QvRDpcXHJlc3RhdXJhbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactComponent = /** @class */ (function () {
    function ContactComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    ContactComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getContact();
    };
    ContactComponent.prototype.getContact = function () {
        var _this = this;
        this.appservice.contact()
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.Contactdata = data.data;
            }
        });
    };
    ContactComponent.prototype.goToCreateContact = function (id) {
        this.router.navigate(['/create-contact', id]);
    };
    ContactComponent.prototype.goToaddcontact = function (id) {
        this.router.navigate(['/create-contact', id]);
    };
    ContactComponent.prototype.deleteContact = function (id) {
        var _this = this;
        this.appservice.deletecontact(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.router.navigate(['/contact']);
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
                _this.router.navigate(['/contact']);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/dashboard/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/dashboard/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-blog/create-blog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/create-blog/create-blog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Blog Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"BlogForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> Blog Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Blog Title</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter title\" class=\"form-control\" formControlName=\"title\" required title>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"BlogForm.get('title').errors && (BlogForm.get('title').touched || BlogForm.get('title').dirty)\">\r\n                                                <span *ngIf=\"BlogForm.get('title').errors.required\">Title is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Blog Description</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-10\">\r\n                                        <div class=\"form-group\">\r\n                                            <ck-editor  skin=\"moono-lisa\" language=\"en\" *ngIf=\"descen.description\"\r\n                                            formControlName=\"description\" ></ck-editor>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"BlogForm.get('description').errors && (BlogForm.get('description').touched || BlogForm.get('description').dirty)\">\r\n                                                <span *ngIf=\"BlogForm.get('description').errors.required\">Description is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Blog Image</label>\r\n                                        </div>\r\n                                    </div>\r\n                                   <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"file\" style=\"display:none\" (change)=\"filechange($event)\" #fileinput  class=\"form-control-file\" image>\r\n                                            <button class=\"btn btn-raised btn-primary mr-2\" (click)=\"fileinput.click()\">select Image</button>\r\n                                            <span>{{name}}</span>\r\n                                            <span></span>\r\n                                           <!--<span>{{descen.image}}</span>-->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                                <button *ngIf=\"showbutton\" type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"editblogdata()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createblogdata()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-blog/create-blog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/create-blog/create-blog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtYmxvZy9jcmVhdGUtYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/create-blog/create-blog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/create-blog/create-blog.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBlogComponent", function() { return CreateBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateBlogComponent = /** @class */ (function () {
    function CreateBlogComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.editorValue = '';
    }
    CreateBlogComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getblogdata();
            this.showbutton = true;
            console.log(this.id);
            this.BlogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }
    };
    CreateBlogComponent.prototype.getblogdata = function () {
        var _this = this;
        this.appservice.BlogDataid(this.id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.descen = data.data[0];
                _this.BlogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].image, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
            }
            else {
                _this.showbutton = false;
            }
        });
    };
    CreateBlogComponent.prototype.filechange = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
        this.fileName = e.target.files[0];
        this.name = e.target.files[0].name;
    };
    CreateBlogComponent.prototype.createblogdata = function (image) {
        var _this = this;
        if (this.BlogForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.BlogForm.valid) {
            console.log(this.BlogForm);
            this.loaderservice.display(true);
            this.appservice.addBlogdata(this.BlogForm.value, this.fileName)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/blog']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/blog']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
            //console.log(this.UserForm.value);
        }
    };
    CreateBlogComponent.prototype.editblogdata = function () {
        var _this = this;
        if (this.BlogForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.BlogForm.valid) {
            this.loaderservice.display(true);
            this.appservice.editblogdata(this.BlogForm.value, this.id, this.fileName)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/blog']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/blog']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateBlogComponent.prototype.Gotolist = function () {
        this.router.navigate(['/blog']);
    };
    CreateBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./create-blog.component.html */ "./src/app/dashboard/create-blog/create-blog.component.html"),
            styles: [__webpack_require__(/*! ./create-blog.component.scss */ "./src/app/dashboard/create-blog/create-blog.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreateBlogComponent);
    return CreateBlogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-carrier/create-carrier.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-carrier/create-carrier.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Carrier Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"CarrierForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i>Carrier Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Carrier Name</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter Carrier name\" class=\"form-control\" formControlName=\"name\" required name>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"CarrierForm.get('name').errors && (CarrierForm.get('name').touched || CarrierForm.get('name').dirty)\">\r\n                                                <span *ngIf=\"CarrierForm.get('name').errors.required\">Name is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Last Date To Apply</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter Last Date\" class=\"form-control\" formControlName=\"last_date\" required last_date>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"CarrierForm.get('last_date').errors && (CarrierForm.get('last_date').touched || CarrierForm.get('last_date').dirty)\">\r\n                                                <span *ngIf=\"CarrierForm.get('last_date').errors.required\">Last date is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                 </div>\r\n                             </div>\r\n\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                                <button *ngIf=\"showbutton\" type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"editcarrierForm()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createcarrierForm()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-carrier/create-carrier.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-carrier/create-carrier.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtY2Fycmllci9jcmVhdGUtY2Fycmllci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/create-carrier/create-carrier.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/create-carrier/create-carrier.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateCarrierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCarrierComponent", function() { return CreateCarrierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateCarrierComponent = /** @class */ (function () {
    function CreateCarrierComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    CreateCarrierComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getcarrier();
            this.showbutton = true;
            console.log(this.id);
            this.CarrierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                last_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }
    };
    CreateCarrierComponent.prototype.getcarrier = function () {
        var _this = this;
        this.appservice.CarrierDetail(this.id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.CarrierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    last_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].last_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
            }
            else {
                _this.showbutton = false;
            }
        });
    };
    CreateCarrierComponent.prototype.createcarrierForm = function () {
        var _this = this;
        if (this.CarrierForm.invalid) {
            return;
        }
        if (this.CarrierForm.valid) {
            this.loaderservice.display(true);
            this.appservice.addcarrier(this.CarrierForm.value)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/carrier']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/carrier']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
            //console.log(this.UserForm.value);
        }
    };
    CreateCarrierComponent.prototype.editcarrierForm = function () {
        var _this = this;
        if (this.CarrierForm.invalid) {
            return;
        }
        if (this.CarrierForm.valid) {
            this.loaderservice.display(true);
            this.appservice.editcarrier(this.CarrierForm.value, this.id)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/carrier']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/carrier']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateCarrierComponent.prototype.Gotolist = function () {
        this.router.navigate(['/carrier']);
    };
    CreateCarrierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrier',
            template: __webpack_require__(/*! ./create-carrier.component.html */ "./src/app/dashboard/create-carrier/create-carrier.component.html"),
            styles: [__webpack_require__(/*! ./create-carrier.component.scss */ "./src/app/dashboard/create-carrier/create-carrier.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreateCarrierComponent);
    return CreateCarrierComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-category/create-category.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/create-category/create-category.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Type Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"CategoryForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> Type Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Type Name</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter category name\" class=\"form-control\" formControlName=\"name\" required name>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"CategoryForm.get('name').errors && (CategoryForm.get('name').touched || CategoryForm.get('name').dirty)\">\r\n                                                <span *ngIf=\"CategoryForm.get('name').errors.required\">Name is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                 </div>\r\n                             </div>\r\n\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                                <button *ngIf=\"showbutton\" type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"editcategory()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createcategory()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-category/create-category.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/create-category/create-category.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtY2F0ZWdvcnkvY3JlYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/create-category/create-category.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-category/create-category.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateCategoryComponent = /** @class */ (function () {
    function CreateCategoryComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    CreateCategoryComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getcategory();
            this.showbutton = true;
            console.log(this.id);
            this.CategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }
    };
    CreateCategoryComponent.prototype.getcategory = function () {
        var _this = this;
        this.appservice.CategoryDetail(this.id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.CategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
            }
            else {
                _this.showbutton = false;
            }
        });
    };
    CreateCategoryComponent.prototype.createcategory = function () {
        var _this = this;
        if (this.CategoryForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.CategoryForm.valid) {
            this.loaderservice.display(true);
            this.appservice.addcategory(this.CategoryForm.value)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/category']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/category']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
            //console.log(this.UserForm.value);
        }
    };
    CreateCategoryComponent.prototype.editcategory = function () {
        var _this = this;
        if (this.CategoryForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.CategoryForm.valid) {
            this.loaderservice.display(true);
            this.appservice.editcategory(this.CategoryForm.value, this.id)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/category']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/category']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateCategoryComponent.prototype.Gotolist = function () {
        this.router.navigate(['/category']);
    };
    CreateCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./create-category.component.html */ "./src/app/dashboard/create-category/create-category.component.html"),
            styles: [__webpack_require__(/*! ./create-category.component.scss */ "./src/app/dashboard/create-category/create-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreateCategoryComponent);
    return CreateCategoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-contact/create-contact.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-contact/create-contact.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Pharmacy Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"ContactForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i>Pharmacy Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Pharmacy Name</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter pharmacy name\" class=\"form-control\" formControlName=\"name\" required name>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"ContactForm.get('name').errors && (ContactForm.get('name').touched || ContactForm.get('name').dirty)\">\r\n                                                <span *ngIf=\"ContactForm.get('name').errors.required\">Name is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Pharmacy Email</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter email\" class=\"form-control\" formControlName=\"email\" required email>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"ContactForm.get('email').errors && (ContactForm.get('email').touched || ContactForm.get('email').dirty)\">\r\n                                                <span *ngIf=\"ContactForm.get('email').errors.required\">Email is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Pharmacy Mobile</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter mobile no\" class=\"form-control\" formControlName=\"mobile\" required mobile>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"ContactForm.get('mobile').errors && (ContactForm.get('mobile').touched || ContactForm.get('mobile').dirty)\">\r\n                                                <span *ngIf=\"ContactForm.get('mobile').errors.required\">Mobile is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Pharmacy Fax</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter fax no\" class=\"form-control\" formControlName=\"fax\" required fax>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"ContactForm.get('fax').errors && (ContactForm.get('fax').touched || ContactForm.get('fax').dirty)\">\r\n                                                <span *ngIf=\"ContactForm.get('fax').errors.required\">Fax is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Pharmacy License No</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter license no\" class=\"form-control\" formControlName=\"license_no\" required license_no>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"ContactForm.get('license_no').errors && (ContactForm.get('license_no').touched || ContactForm.get('license_no').dirty)\">\r\n                                                <span *ngIf=\"ContactForm.get('name').errors.required\">License no is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">License Expire Date</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <!--<input type=\"text\" placeholder=\"Enter Expire date\" class=\"form-control\" formControlName=\"expire_date\" required expire_date>-->\r\n                                            <input type=\"date\" id=\"issueinput3\" class=\"form-control\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"top\" data-title=\"Date Opened\" formControlName=\"expire_date\" required expire_date>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"ContactForm.get('expire_date').errors && (ContactForm.get('expire_date').touched || ContactForm.get('expire_date').dirty)\">\r\n                                                <span *ngIf=\"ContactForm.get('expire_date').errors.required\">Expire date is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Pharmacy Address</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter Address\" class=\"form-control\" formControlName=\"address\" required address>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"ContactForm.get('address').errors && (ContactForm.get('address').touched || ContactForm.get('address').dirty)\">\r\n                                                <span *ngIf=\"ContactForm.get('address').errors.required\">Address is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                                <button *ngIf=\"showbutton\" type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"editcontact()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createcontact()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-contact/create-contact.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-contact/create-contact.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtY29udGFjdC9jcmVhdGUtY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/create-contact/create-contact.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/create-contact/create-contact.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContactComponent", function() { return CreateContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateContactComponent = /** @class */ (function () {
    function CreateContactComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    CreateContactComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getcontact();
            this.showbutton = true;
            console.log(this.id);
            this.ContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                license_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                expire_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
        }
    };
    CreateContactComponent.prototype.getcontact = function () {
        var _this = this;
        this.appservice.ContactDetail(this.id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.ContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].fax, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    license_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].license_no, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    expire_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].expire_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
            }
            else {
                _this.showbutton = false;
            }
        });
    };
    CreateContactComponent.prototype.createcontact = function () {
        var _this = this;
        if (this.ContactForm.invalid) {
            return;
        }
        if (this.ContactForm.valid) {
            this.loaderservice.display(true);
            this.appservice.addcontact(this.ContactForm.value)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/contact']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/contact']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
            //console.log(this.UserForm.value);
        }
    };
    CreateContactComponent.prototype.editcontact = function () {
        var _this = this;
        if (this.ContactForm.invalid) {
            return;
        }
        if (this.ContactForm.valid) {
            this.loaderservice.display(true);
            this.appservice.editcontact(this.ContactForm.value, this.id)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/contact']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/contact']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateContactComponent.prototype.Gotolist = function () {
        this.router.navigate(['/contact']);
    };
    CreateContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./create-contact.component.html */ "./src/app/dashboard/create-contact/create-contact.component.html"),
            styles: [__webpack_require__(/*! ./create-contact.component.scss */ "./src/app/dashboard/create-contact/create-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreateContactComponent);
    return CreateContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-manager/create-manager.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-manager/create-manager.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Manager Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"UserForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i>Manager Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Manager Name</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter first name\"\r\n                                                    class=\"form-control\" formControlName=\"name\" required>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('name').errors && (UserForm.get('name').touched || UserForm.get('name').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('name').errors.required\">Name is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Manager Email</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter email\"\r\n                                                    class=\"form-control\" formControlName=\"email\" required email>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('email').errors && (UserForm.get('email').touched || UserForm.get('email').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('email').errors.required\">Email is required</span>\r\n                                                    <span *ngIf=\"UserForm.get('email').errors.email\">Invalid Email ID</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    \r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Manager Contact No </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter contact\"\r\n                                                    class=\"form-control\" formControlName=\"mobile\" required mobile>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('mobile').errors && (UserForm.get('mobile').touched || UserForm.get('mobile').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('mobile').errors.required\">Mobile Number is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Manager Address</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter Address\"\r\n                                                    class=\"form-control\" formControlName=\"address\" required >\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('address').errors && (UserForm.get('address').touched || UserForm.get('address').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('address').errors.required\">Address is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <span *ngIf=\"showErrorMsg\" style=\"color: red\">{{showErrorMsg}}</span>\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                               <button *ngIf=\"showbutton\" type=\"submit\" \r\n                                class=\"btn btn-raised btn-raised btn-primary\" (click)=\"edituser()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\" \r\n                                class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createuser()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-manager/create-manager.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-manager/create-manager.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtbWFuYWdlci9jcmVhdGUtbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/create-manager/create-manager.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/create-manager/create-manager.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateManagerComponent", function() { return CreateManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateManagerComponent = /** @class */ (function () {
    function CreateManagerComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.showbutton = false;
    }
    CreateManagerComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.restid = JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getUsers();
            this.showbutton = true;
            console.log(this.id);
        }
        console.log(this.showbutton);
        //this.getcountry();
        this.UserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CreateManagerComponent.prototype.getUsers = function () {
        var _this = this;
        this.appservice.managerDetail(this.id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.manaid = data.data[0].id;
                _this.UserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
            }
            else {
                _this.showbutton = false;
            }
            //console.log(data);
        });
    };
    CreateManagerComponent.prototype.filechange = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
        this.fileName = e.target.files[0];
        this.name = e.target.files[0].name;
    };
    CreateManagerComponent.prototype.createuser = function (image) {
        var _this = this;
        if (this.UserForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.UserForm.valid) {
            this.appservice.adduser(this.UserForm.value, this.restid, this.fileName)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/appuser']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/appuser']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateManagerComponent.prototype.edituser = function (image, manaid) {
        var _this = this;
        if (this.UserForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.UserForm.valid) {
            this.appservice.editmanager(this.UserForm.value, this.manaid, this.fileName)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/create-manager', _this.id]);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/create-manager', _this.id]);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateManagerComponent.prototype.Gotolist = function () {
        this.router.navigate(['/dashboard']);
    };
    CreateManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./create-manager.component.html */ "./src/app/dashboard/create-manager/create-manager.component.html"),
            styles: [__webpack_require__(/*! ./create-manager.component.scss */ "./src/app/dashboard/create-manager/create-manager.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreateManagerComponent);
    return CreateManagerComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-product/create-product.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-product/create-product.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Menu Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"ProductForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> Menu Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Name <em class=\"error\">*</em></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" placeholder=\"Enter product name\" class=\"form-control\" formControlName=\"name\" required name>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductForm.get('name').errors && (ProductForm.get('name').touched || ProductForm.get('name').dirty)\">\r\n                                                    <span *ngIf=\"ProductForm.get('name').errors.required\">Name is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Cost <em class=\"error\">*</em></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" placeholder=\"Enter Cost\" class=\"form-control\" formControlName=\"cost\" required>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductForm.get('cost').errors && (ProductForm.get('cost').touched || ProductForm.get('cost').dirty)\">\r\n                                                    <span *ngIf=\"ProductForm.get('cost').errors.required\">Cost is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Food Type <em class=\"error\">*</em></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <select id=\"projectinput5\" formControlName=\"cat_id\"  (changess)=\"getsubcategory($event.target.value)\" class=\"form-control\">\r\n                                                    <option value=\"\" selected=\"\" disabled=\"\">Select Type</option>\r\n                                                    <option *ngFor=\"let category of categorydata\"  value=\"{{category.id}}\">{{ category.name}}</option>\r\n                                                </select>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductForm.get('cat_id').errors && (ProductForm.get('cat_id').touched || ProductForm.get('cat_id').dirty)\">\r\n                                                    <span *ngIf=\"ProductForm.get('cat_id').errors.required\">Category required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Description <em class=\"error\">*</em></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" placeholder=\"Enter description\" class=\"form-control\" formControlName=\"description\" required>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductForm.get('description').errors && (ProductForm.get('description').touched || ProductForm.get('description').dirty)\">\r\n                                                    <span *ngIf=\"ProductForm.get('description').errors.required\">Description is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Tags <em class=\"error\">*</em></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" placeholder=\"Enter Tags\" class=\"form-control\" formControlName=\"tags\" required>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductForm.get('tags').errors && (ProductForm.get('tags').touched || ProductForm.get('tags').dirty)\">\r\n                                                    <span *ngIf=\"ProductForm.get('tags').errors.required\">Tags is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Is Veg<em class=\"error\">*</em></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <select id=\"\" formControlName=\"is_veg\"  class=\"form-control\">\r\n                                                    <option value=\"\" selected=\"\" disabled=\"\" >Select Veg Type</option>\r\n                                                    <option value=\"1\" >Veg</option>\r\n                                                    <option value=\"2\" >Non Veg</option>\r\n                                                </select>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductForm.get('is_veg').errors && (ProductForm.get('is_veg').touched || ProductForm.get('is_veg').dirty)\">\r\n                                                    <span *ngIf=\"ProductForm.get('is_veg').errors.required\">Veg required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    \r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">In Stock<em class=\"error\">*</em></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <select id=\"\" formControlName=\"in_stock\"  class=\"form-control\">\r\n                                                    <option value=\"\" selected=\"\" disabled=\"\" >Select Stock</option>\r\n                                                    <option value=\"1\" >In Stock</option>\r\n                                                    <option value=\"2\" >Out Of Stock</option>\r\n                                                </select>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductForm.get('in_stock').errors && (ProductForm.get('in_stock').touched || ProductForm.get('in_stock').dirty)\">\r\n                                                    <span *ngIf=\"ProductForm.get('in_stock').errors.required\">Stock required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                                <button *ngIf=\"showbutton\" type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"editproduct()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createproduct()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-product/create-product.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/create-product/create-product.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NyZWF0ZS1wcm9kdWN0L0Q6XFxyZXN0YXVyYW50L3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNyZWF0ZS1wcm9kdWN0XFxjcmVhdGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtcHJvZHVjdC9jcmVhdGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/create-product/create-product.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/create-product/create-product.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
var CreateProductComponent = /** @class */ (function () {
    function CreateProductComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.editorValue = '';
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.restid = JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getproduct();
            this.getcategory();
            this.getrestdata();
            this.showbutton = true;
            this.exdate = new Date();
            console.log(this.id);
            this.ProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                cat_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                in_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                is_veg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }
    };
    CreateProductComponent.prototype.getcategory = function () {
        var _this = this;
        //console.log(this.loguser);
        this.appservice.category(0, 100)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.categorydata = data.data;
            }
        });
    };
    CreateProductComponent.prototype.getrestdata = function () {
        var _this = this;
        this.appservice.restdata()
            .subscribe(function (data) {
            if (data.status == '1') {
                console.log(data);
                _this.restdata = data.data;
            }
        });
    };
    CreateProductComponent.prototype.getproduct = function () {
        var _this = this;
        this.appservice.ProductDetail(this.id)
            .subscribe(function (data) {
            //console.log(data);
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.descen = data.data[0].image;
                _this.exdate = data.data[0].expire_date;
                _this.gst = data.data[0].gst;
                _this.ProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    cat_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].cat_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].cost, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].tags, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    in_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].In_stock, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    is_veg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].Is_veg, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
                console.log(_this.ProductForm);
            }
            else {
                _this.showbutton = false;
            }
        });
    };
    CreateProductComponent.prototype.filechange = function (e) {
        //console.log('dd');
        this.file = e.target.files[0];
        //console.log(this.file);
        this.fileName = e.target.files[0];
        this.name = e.target.files[0].name;
    };
    CreateProductComponent.prototype.createproduct = function (image) {
        var _this = this;
        console.log(image);
        console.log(this.ProductForm);
        if (this.ProductForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.ProductForm.valid) {
            //console.log(this.ProductForm);
            this.loaderservice.display(true);
            this.appservice.addproduct(this.ProductForm.value, this.fileName, this.loguser, this.restid)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/product']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/product']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
            //console.log(this.UserForm.value);
        }
    };
    CreateProductComponent.prototype.editproduct = function () {
        var _this = this;
        if (this.ProductForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.ProductForm.valid) {
            this.loaderservice.display(true);
            this.appservice.editproduct(this.ProductForm.value, this.id, this.fileName, this.loguser, this.restid)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/product']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/product']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateProductComponent.prototype.xyz = function () {
        console.log('ccc');
        this.barcodeValue = 'aaaa';
        setTimeout(function () {
            $('#upfile').trigger('click');
        }, 10000);
        //$( '#upfile' ).off( 'click' );
        //$('#barcode').trigger('stop');
    };
    CreateProductComponent.prototype.Gotolist = function () {
        this.router.navigate(['/product']);
    };
    CreateProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./create-product.component.html */ "./src/app/dashboard/create-product/create-product.component.html"),
            styles: [__webpack_require__(/*! ./create-product.component.scss */ "./src/app/dashboard/create-product/create-product.component.scss")],
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-table/create-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/create-table/create-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Table Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"TableForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i> Table Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"projectinput1\">Table Name</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" placeholder=\"Enter Table Name\" class=\"form-control\" formControlName=\"name\" required>\r\n                                            <span class=\"form-text text-muted danger\"\r\n                                                *ngIf=\"TableForm.get('name').errors && (TableForm.get('name').touched || TableForm.get('name').dirty)\">\r\n                                                <span *ngIf=\"TableForm.get('name').errors.required\">Table Name is required</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                 </div>\r\n                             </div>\r\n\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                                <button *ngIf=\"showbutton\" type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"editcategory()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createcategory()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-table/create-table.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/create-table/create-table.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtdGFibGUvY3JlYXRlLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/create-table/create-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/create-table/create-table.component.ts ***!
  \******************************************************************/
/*! exports provided: CreatetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetableComponent", function() { return CreatetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatetableComponent = /** @class */ (function () {
    function CreatetableComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    CreatetableComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.restid = JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getcategory();
            this.showbutton = true;
            console.log(this.id);
            this.TableForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }
    };
    CreatetableComponent.prototype.getcategory = function () {
        var _this = this;
        this.appservice.tabledetail(this.id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.TableForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
            }
            else {
                _this.showbutton = false;
            }
        });
    };
    CreatetableComponent.prototype.createcategory = function () {
        var _this = this;
        if (this.TableForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.TableForm.valid) {
            this.loaderservice.display(true);
            this.appservice.addtable(this.TableForm.value, this.restid)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/table']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/table']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
            //console.log(this.UserForm.value);
        }
    };
    CreatetableComponent.prototype.editcategory = function () {
        var _this = this;
        if (this.TableForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.TableForm.valid) {
            this.loaderservice.display(true);
            this.appservice.edittable(this.TableForm.value, this.id, this.restid)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/table']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/table']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreatetableComponent.prototype.Gotolist = function () {
        this.router.navigate(['/table']);
    };
    CreatetableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./create-table.component.html */ "./src/app/dashboard/create-table/create-table.component.html"),
            styles: [__webpack_require__(/*! ./create-table.component.scss */ "./src/app/dashboard/create-table/create-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreatetableComponent);
    return CreatetableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/create-user/create-user.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/create-user/create-user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Restaurant Form</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"px-3\">\r\n                        <form [formGroup]=\"UserForm\"  novalidate>\r\n                            <div class=\"form-body\">\r\n                                <h4 class=\"form-section\"><i class=\"ft-user\"></i>Restaurant Info</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Name</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter first name\"\r\n                                                    class=\"form-control\" formControlName=\"name\" required>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('name').errors && (UserForm.get('name').touched || UserForm.get('name').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('name').errors.required\">Name is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Email</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter email\"\r\n                                                    class=\"form-control\" formControlName=\"email\" required email>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('email').errors && (UserForm.get('email').touched || UserForm.get('email').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('email').errors.required\">Email is required</span>\r\n                                                    <span *ngIf=\"UserForm.get('email').errors.email\">Invalid Email ID</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    \r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Contact No </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter contact\"\r\n                                                    class=\"form-control\" formControlName=\"mobile\" required mobile>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('mobile').errors && (UserForm.get('mobile').touched || UserForm.get('mobile').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('mobile').errors.required\">Mobile Number is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Contact Person</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter contact person\"\r\n                                                    class=\"form-control\" formControlName=\"contactperson\" required>\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('contactperson').errors && (UserForm.get('contactperson').touched || UserForm.get('contactperson').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('contactperson').errors.required\">Contact person is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    \r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Address</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter Address\"\r\n                                                    class=\"form-control\" formControlName=\"address\" required >\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('address').errors && (UserForm.get('address').touched || UserForm.get('address').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('address').errors.required\">Address is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant City</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter City\"\r\n                                                    class=\"form-control\" formControlName=\"location\" required >\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('location').errors && (UserForm.get('location').touched || UserForm.get('location').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('location').errors.required\">Location is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    \r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Locality</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter Locality\"\r\n                                                    class=\"form-control\" formControlName=\"locality\" required >\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('locality').errors && (UserForm.get('locality').touched || UserForm.get('locality').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('locality').errors.required\">Locality is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Pin</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\"  placeholder=\"Enter Pin\"\r\n                                                    class=\"form-control\" formControlName=\"pin\" required >\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"UserForm.get('pin').errors && (UserForm.get('pin').touched || UserForm.get('pin').dirty)\">\r\n                                                    <span *ngIf=\"UserForm.get('pin').errors.required\">Pin is required</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Restaurant Logo</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-8\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"file\" style=\"display:none\" (change)=\"filechange($event)\" #fileinput  class=\"form-control-file\">\r\n                                                <button class=\"btn btn-raised btn-primary mr-2\" (click)=\"fileinput.click()\">select Image</button>\r\n                                                <span>{{name}}</span>\r\n                                                <span></span>\r\n                                                <span>{{descen}}</span>\r\n                                                <!--<span><img height=\"100px\" width=\"100px\" src=\"baseurl/{{descen}}\" /></span>-->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <span *ngIf=\"showErrorMsg\" style=\"color: red\">{{showErrorMsg}}</span>\r\n                            <div class=\"form-actions center\">\r\n                                <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                    <i class=\"ft-x\"></i> Cancel\r\n                                </button>\r\n                               <button *ngIf=\"showbutton\" type=\"submit\" \r\n                                class=\"btn btn-raised btn-raised btn-primary\" (click)=\"edituser()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                <button *ngIf=\"!showbutton\" type=\"submit\" \r\n                                class=\"btn btn-raised btn-raised btn-primary\" (click)=\"createuser()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/create-user/create-user.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/create-user/create-user.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/create-user/create-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/create-user/create-user.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.showbutton = false;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.restid = JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getUsers();
            this.showbutton = true;
            console.log(this.id);
        }
        console.log(this.showbutton);
        //this.getcountry();
        this.UserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            contactperson: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            locality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            pin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CreateUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.appservice.userDetail(this.id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.showErrorMsg = "";
                _this.UserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    contactperson: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].contactperson, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].location, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    locality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].locality, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    pin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.data[0].pin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                });
            }
            else {
                _this.showbutton = false;
            }
            //console.log(data);
        });
    };
    CreateUserComponent.prototype.filechange = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
        this.fileName = e.target.files[0];
        this.name = e.target.files[0].name;
    };
    CreateUserComponent.prototype.createuser = function (image) {
        var _this = this;
        if (this.UserForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.UserForm.valid) {
            this.appservice.adduser(this.UserForm.value, this.restid, this.fileName)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/appuser']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/appuser']);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateUserComponent.prototype.edituser = function (image) {
        var _this = this;
        if (this.UserForm.invalid) {
            this.toasterservice.Error("Please enter the required filed");
            return;
        }
        if (this.UserForm.valid) {
            this.appservice.edituser(this.UserForm.value, this.id, this.restid, this.fileName)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/create-user', _this.id]);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/create-user', _this.id]);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    CreateUserComponent.prototype.Gotolist = function () {
        this.router.navigate(['/dashboard']);
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/dashboard/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.scss */ "./src/app/dashboard/create-user/create-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var _appuser_appuser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appuser/appuser.component */ "./src/app/dashboard/appuser/appuser.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/dashboard/create-user/create-user.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/dashboard/product/product.component.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/dashboard/create-product/create-product.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/dashboard/contact/contact.component.ts");
/* harmony import */ var _create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-contact/create-contact.component */ "./src/app/dashboard/create-contact/create-contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/dashboard/blog/blog.component.ts");
/* harmony import */ var _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-blog/create-blog.component */ "./src/app/dashboard/create-blog/create-blog.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category.component */ "./src/app/dashboard/category/category.component.ts");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/dashboard/create-category/create-category.component.ts");
/* harmony import */ var _carrier_carrier_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carrier/carrier.component */ "./src/app/dashboard/carrier/carrier.component.ts");
/* harmony import */ var _create_carrier_create_carrier_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-carrier/create-carrier.component */ "./src/app/dashboard/create-carrier/create-carrier.component.ts");
/* harmony import */ var _addtocart_addtocart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addtocart/addtocart.component */ "./src/app/dashboard/addtocart/addtocart.component.ts");
/* harmony import */ var _todaysold_todaysold_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./todaysold/todaysold.component */ "./src/app/dashboard/todaysold/todaysold.component.ts");
/* harmony import */ var _expirethismonth_expirethismonth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./expirethismonth/expirethismonth.component */ "./src/app/dashboard/expirethismonth/expirethismonth.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _create_table_create_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./create-table/create-table.component */ "./src/app/dashboard/create-table/create-table.component.ts");
/* harmony import */ var _rejectorder_rejectorder_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rejectorder/rejectorder.component */ "./src/app/dashboard/rejectorder/rejectorder.component.ts");
/* harmony import */ var _pendingorder_pendingorder_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pendingorder/pendingorder.component */ "./src/app/dashboard/pendingorder/pendingorder.component.ts");
/* harmony import */ var _closeorder_closeorder_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./closeorder/closeorder.component */ "./src/app/dashboard/closeorder/closeorder.component.ts");
/* harmony import */ var _create_manager_create_manager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-manager/create-manager.component */ "./src/app/dashboard/create-manager/create-manager.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    {
        path: '',
        children: [
            {
                path: 'rejectorder',
                component: _rejectorder_rejectorder_component__WEBPACK_IMPORTED_MODULE_20__["RejectorderComponent"],
                data: {
                    title: 'Reject Order'
                }
            },
            {
                path: 'pendingorder',
                component: _pendingorder_pendingorder_component__WEBPACK_IMPORTED_MODULE_21__["PendingorderComponent"],
                data: {
                    title: 'Pending Order'
                }
            },
            {
                path: 'closeorder',
                component: _closeorder_closeorder_component__WEBPACK_IMPORTED_MODULE_22__["CloseorderComponent"],
                data: {
                    title: 'Close Order'
                }
            },
            {
                path: 'dashboard',
                component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard1Component"],
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'table',
                component: _table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
                data: {
                    title: 'TAble Manage'
                }
            },
            {
                path: 'create-table/:id',
                component: _create_table_create_table_component__WEBPACK_IMPORTED_MODULE_19__["CreatetableComponent"],
                data: {
                    title: 'Create Table'
                }
            },
            {
                path: 'appuser',
                component: _appuser_appuser_component__WEBPACK_IMPORTED_MODULE_3__["AppuserComponent"],
                data: {
                    title: 'App user'
                }
            },
            {
                path: 'create-manager/:id',
                component: _create_manager_create_manager_component__WEBPACK_IMPORTED_MODULE_23__["CreateManagerComponent"],
                data: {
                    title: 'Create Manager'
                }
            },
            {
                path: 'create-user/:id',
                component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"],
                data: {
                    title: 'Create User'
                }
            },
            {
                path: 'product',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                data: {
                    title: 'Product list'
                }
            },
            {
                path: 'create-product/:id',
                component: _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_6__["CreateProductComponent"],
                data: {
                    title: 'Add Product'
                }
            },
            {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                data: {
                    title: 'Contact list'
                }
            },
            {
                path: 'create-contact/:id',
                component: _create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_8__["CreateContactComponent"],
                data: {
                    title: 'Add Contact'
                }
            },
            {
                path: 'blog',
                component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
                data: {
                    title: 'Blog list'
                }
            },
            {
                path: 'create-blog/:id',
                component: _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_10__["CreateBlogComponent"],
                data: {
                    title: 'Add Blog'
                }
            },
            {
                path: 'category',
                component: _category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
                data: {
                    title: 'Category list'
                }
            },
            {
                path: 'create-category/:id',
                component: _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_12__["CreateCategoryComponent"],
                data: {
                    title: 'Add Category'
                }
            },
            {
                path: 'carrier',
                component: _carrier_carrier_component__WEBPACK_IMPORTED_MODULE_13__["CarrierComponent"],
                data: {
                    title: 'Carrier list'
                }
            },
            {
                path: 'create-carrier/:id',
                component: _create_carrier_create_carrier_component__WEBPACK_IMPORTED_MODULE_14__["CreateCarrierComponent"],
                data: {
                    title: 'Add Carrier'
                }
            },
            {
                path: 'addtocart',
                component: _addtocart_addtocart_component__WEBPACK_IMPORTED_MODULE_15__["AddtocartComponent"],
                data: {
                    title: 'Add to cart list'
                }
            },
            {
                path: 'todaysold',
                component: _todaysold_todaysold_component__WEBPACK_IMPORTED_MODULE_16__["TodaySoldComponent"],
                data: {
                    title: 'Today Sold list'
                }
            },
            {
                path: 'expirethismonth',
                component: _expirethismonth_expirethismonth_component__WEBPACK_IMPORTED_MODULE_17__["ExpirethismonthComponent"],
                data: {
                    title: 'Expire this month list'
                }
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var _appuser_appuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appuser/appuser.component */ "./src/app/dashboard/appuser/appuser.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/dashboard/create-user/create-user.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "./src/app/dashboard/product/product.component.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/dashboard/create-product/create-product.component.ts");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/dashboard/contact/contact.component.ts");
/* harmony import */ var _create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-contact/create-contact.component */ "./src/app/dashboard/create-contact/create-contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/dashboard/blog/blog.component.ts");
/* harmony import */ var _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-blog/create-blog.component */ "./src/app/dashboard/create-blog/create-blog.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category/category.component */ "./src/app/dashboard/category/category.component.ts");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/dashboard/create-category/create-category.component.ts");
/* harmony import */ var _carrier_carrier_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./carrier/carrier.component */ "./src/app/dashboard/carrier/carrier.component.ts");
/* harmony import */ var _create_carrier_create_carrier_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./create-carrier/create-carrier.component */ "./src/app/dashboard/create-carrier/create-carrier.component.ts");
/* harmony import */ var _addtocart_addtocart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./addtocart/addtocart.component */ "./src/app/dashboard/addtocart/addtocart.component.ts");
/* harmony import */ var _todaysold_todaysold_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./todaysold/todaysold.component */ "./src/app/dashboard/todaysold/todaysold.component.ts");
/* harmony import */ var _expirethismonth_expirethismonth_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./expirethismonth/expirethismonth.component */ "./src/app/dashboard/expirethismonth/expirethismonth.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _create_table_create_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./create-table/create-table.component */ "./src/app/dashboard/create-table/create-table.component.ts");
/* harmony import */ var _rejectorder_rejectorder_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rejectorder/rejectorder.component */ "./src/app/dashboard/rejectorder/rejectorder.component.ts");
/* harmony import */ var _pendingorder_pendingorder_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pendingorder/pendingorder.component */ "./src/app/dashboard/pendingorder/pendingorder.component.ts");
/* harmony import */ var _closeorder_closeorder_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./closeorder/closeorder.component */ "./src/app/dashboard/closeorder/closeorder.component.ts");
/* harmony import */ var _create_manager_create_manager_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./create-manager/create-manager.component */ "./src/app/dashboard/create-manager/create-manager.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { Dashboard2Component } from "./dashboard2/dashboard2.component";





















//import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';


var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_30__["QRCodeModule"],
            ],
            exports: [],
            declarations: [
                _table_table_component__WEBPACK_IMPORTED_MODULE_24__["TableComponent"],
                _create_table_create_table_component__WEBPACK_IMPORTED_MODULE_25__["CreatetableComponent"],
                _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard1Component"],
                _appuser_appuser_component__WEBPACK_IMPORTED_MODULE_8__["AppuserComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__["CreateUserComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
                _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__["CreateProductComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_14__["CreateContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
                _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_16__["CreateBlogComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_17__["CategoryComponent"],
                _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_18__["CreateCategoryComponent"],
                _carrier_carrier_component__WEBPACK_IMPORTED_MODULE_19__["CarrierComponent"],
                _create_carrier_create_carrier_component__WEBPACK_IMPORTED_MODULE_20__["CreateCarrierComponent"],
                _addtocart_addtocart_component__WEBPACK_IMPORTED_MODULE_21__["AddtocartComponent"],
                _todaysold_todaysold_component__WEBPACK_IMPORTED_MODULE_22__["TodaySoldComponent"],
                _expirethismonth_expirethismonth_component__WEBPACK_IMPORTED_MODULE_23__["ExpirethismonthComponent"],
                _rejectorder_rejectorder_component__WEBPACK_IMPORTED_MODULE_26__["RejectorderComponent"],
                _pendingorder_pendingorder_component__WEBPACK_IMPORTED_MODULE_27__["PendingorderComponent"],
                _closeorder_closeorder_component__WEBPACK_IMPORTED_MODULE_28__["CloseorderComponent"],
                _create_manager_create_manager_component__WEBPACK_IMPORTED_MODULE_29__["CreateManagerComponent"],
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-blackberry\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">{{Total}}</h3>\r\n\t\t\t\t\t\t\t<span>Total Menu</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-pie-chart font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-ibiza-sunset\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">{{Available}}</h3>\r\n\t\t\t\t\t\t\t<span>In Stock</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-bulb font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-green-tea\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">₹ {{price}}</h3>\r\n\t\t\t\t\t\t\t<span>This Month Sale</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-graph font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--Statistics cards Ends-->\r\n\r\n<!--Line with Area Chart 1 Starts-->\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">Orders</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"chart-info mb-3 ml-3\">\r\n\t\t\t\t\t\t<span class=\"gradient-blackberry d-inline-block rounded-circle mr-1\" style=\"width:15px; height:15px;\"></span> Sales\r\n\t\t\t\t\t\t<span class=\"gradient-mint d-inline-block rounded-circle mr-1 ml-2\" style=\"width:15px; height:15px;\"></span> Visits\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"line-area\" class=\"height-350 lineArea\">\r\n\t\t\t\t\t\t<x-chartist [data]=\"lineArea.data\" [type]=\"lineArea.type\" [options]=\"lineArea.options\"\r\n\t\t\t\t\t\t [responsiveOptions]=\"lineArea.responsiveOptions\" [events]=\"lineArea.events\">\r\n\t\t\t\t\t\t</x-chartist>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--Line with Area Chart 1 Ends-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDEvRDpcXHJlc3RhdXJhbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkMVxcZGFzaGJvYXJkMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQxL2Rhc2hib2FyZDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.ts ***!
  \**************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var Dashboard1Component = /** @class */ (function () {
    function Dashboard1Component(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        // line chart configuration Starts
        this.WidgetlineChart = {
            type: 'Line', data: data['WidgetlineChart'],
            options: {
                axisX: {
                    showGrid: true,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true,
            },
        };
        // Line chart configuration Ends
        // Line area chart configuration Starts
        this.lineArea = {
            type: 'Line',
            data: data['lineAreaDashboard'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(146, 254, 157, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient1',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
            },
        };
    }
    Dashboard1Component.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.getDetail();
    };
    Dashboard1Component.prototype.getDetail = function () {
        var _this = this;
        this.appservice.Detail(this.loguser)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.Total = data.total;
                _this.Available = data.available;
                _this.Price = data.price;
                _this.Month = data.month;
            }
        });
    };
    Dashboard1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard1',
            template: __webpack_require__(/*! ./dashboard1.component.html */ "./src/app/dashboard/dashboard1/dashboard1.component.html"),
            styles: [__webpack_require__(/*! ./dashboard1.component.scss */ "./src/app/dashboard/dashboard1/dashboard1.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_6__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], Dashboard1Component);
    return Dashboard1Component;
}());



/***/ }),

/***/ "./src/app/dashboard/expirethismonth/expirethismonth.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/expirethismonth/expirethismonth.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Expire this month List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Category Name</th>\r\n                                    <th>SubCategory Name</th>\r\n                                    <th>Product Name</th>\r\n                                    <th>Chemical Name</th>\r\n                                    <th>Mrp</th>\r\n                                    <th>Selling Price</th>\r\n                                    <th>Company Name</th>\r\n                                    <th>Quantity</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of Expiremonthdata; index as i\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{data.cname}}</td>\r\n                                    <td>{{data.scname}}</td>\r\n                                    <td>{{data.name}}</td>\r\n                                    <td>{{data.chemical_name}}</td>\r\n                                    <td>{{data.mrp}}</td>\r\n                                    <td>{{data.selling_price}}</td>\r\n                                    <td>{{data.company_name}}</td>\r\n                                    <td>{{data.quantity}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/expirethismonth/expirethismonth.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/expirethismonth/expirethismonth.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2V4cGlyZXRoaXNtb250aC9EOlxccmVzdGF1cmFudC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxleHBpcmV0aGlzbW9udGhcXGV4cGlyZXRoaXNtb250aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9leHBpcmV0aGlzbW9udGgvZXhwaXJldGhpc21vbnRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWdyaWR7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XHJcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuNztcclxuICAgIGZpbGw6dXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50KSAhaW1wb3J0YW50O1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjk7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtbGluZXtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBFbmRzXHJcblxyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5TdGFja2JhcmNoYXJ0e1xyXG4gICAgLmN0LXNlcmllcy1hIHtcclxuICAgICAgICAuY3QtYmFye1xyXG4gICAgICAgICAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNsaW5lYXIpICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3Qtc2VyaWVzLWIge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogI2U5ZTllOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGV7XHJcbiAgICBzdHJva2U6ICM4NDNjZjc7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI0E2NzVGNDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjMzFhZmIyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGFiZWwge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIExpbmUgQ2hhcnQgIENTUyBFbmRzXHJcbiBcclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMwQ0MyN0U7XHJcbiAgICBzdHJva2Utd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0ZGQzEwNztcclxuICAgIHN0cm9rZS13aWR0aDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjN0U1N0MyO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMjE5NkYzO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmaWxsOiAjODY4ZTk2O1xyXG4gIH1cclxuXHJcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXHJcblxyXG4gIC8vIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMSkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ3KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisyKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDUpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzMpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nik7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rNCkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ0KTtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtZ3JpZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7ICAgIFxyXG4gICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydHNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgRW5kcyJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/expirethismonth/expirethismonth.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/expirethismonth/expirethismonth.component.ts ***!
  \************************************************************************/
/*! exports provided: ExpirethismonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpirethismonthComponent", function() { return ExpirethismonthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExpirethismonthComponent = /** @class */ (function () {
    function ExpirethismonthComponent(appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
    }
    ExpirethismonthComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getExpiremonth();
    };
    ExpirethismonthComponent.prototype.getExpiremonth = function () {
        var _this = this;
        this.appservice.expirethismonth()
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.Expiremonthdata = data.data;
            }
        });
    };
    ExpirethismonthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expirethismonth',
            template: __webpack_require__(/*! ./expirethismonth.component.html */ "./src/app/dashboard/expirethismonth/expirethismonth.component.html"),
            styles: [__webpack_require__(/*! ./expirethismonth.component.scss */ "./src/app/dashboard/expirethismonth/expirethismonth.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], ExpirethismonthComponent);
    return ExpirethismonthComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pendingorder/pendingorder.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/pendingorder/pendingorder.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row akhil\">\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"projectinput5\" class=\"form-control\" id=\"getpage\" (change)=\"getrecord()\">\r\n                                        <option value=\"10\"  selected>10</option>\r\n                                        <option value=\"10000\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <a class=\"btn btn-raised mr-1 btn-primary\" (click)=\"exportAsXLSX()\">Download List</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">New Orders</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Table Id</th>\r\n                                    <th>Order Amount</th>\r\n                                    <th>Customer Detail</th>\r\n                                    <th>Order Date</th>\r\n                                    <th>Item Info</th>\r\n                                    <th>Status</th>\r\n                                   \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let product of TodaySolddata; index as i\">\r\n                                    <td>{{itemsPerPage *(currentPage-1)+i+1}}</td>\r\n                                    <td>{{product.name}}</td>\r\n                                    <td>{{product.total_amount}}</td>\r\n                                    <td>{{product.cust_name}}</td>\r\n                                    <input type=\"hidden\" id=\"restid\" value=\"{{product.restaurant_id}}\"/>\r\n                                    <input type=\"hidden\" id=\"tabid\" value=\"{{product.table_id}}\"/>\r\n                                    <td>{{product.created_date | date:'dd/MM/yyyy'}}</td>\r\n                                    <td>\r\n                                        <button class=\"btn btn-raised mr-1 btn-info\" (click)=\"open(content,product.id)\">Detail</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 1\" >\r\n                                        <button class=\"btn btn-raised mr-1 btn-success\" value=\"2\" (click)=\"open1(content1,product.id)\">Accept</button>\r\n                                        <button class=\"btn btn-raised mr-1 btn-danger\" value=\"4\" (click)=\"open2(content2,product.id)\">Reject</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 2\">\r\n                                        <button class=\"btn btn-raised mr-1 btn-primary\" value=\"3\" (click)=\"changestatus('3')\">Close order</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 3\">Close</td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 4\">Cancel</td>\r\n                                    \r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"totalRecords !== ''\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-pagination (pageChange)=\"handleChange($event)\" [collectionSize]=\"totalRecords\" [(page)]=\"initialPageValue\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Item Info</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <!--<p>One fine body&hellip;</p>-->\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <table class=\"table table-responsive-md text-left\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Sr.No.</th>\r\n                                        <th>Item Name</th>\r\n                                        <th>Quantity</th>\r\n                                        <th>Status</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of itemifo; index as i\">\r\n                                        <td>{{i+1}}</td>\r\n                                        <td>{{item.name}}</td>\r\n                                        <td>{{item.quantity}}</td>\r\n                                        <td *ngIf=\"item.status == 1\">\r\n                                            <button class=\"btn btn-raised mr-1 btn-primary\"  (click)=\"changecook(item.id,2,item.order_id)\">Cooking</button>\r\n                                        </td>\r\n                                        <td *ngIf=\"item.status == 2\">\r\n                                            <button class=\"btn btn-raised mr-1 btn-primary\"  (click)=\"changecook(item.id,1,item.order_id)\">Cooked</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <!--<button  type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"changestatus()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>-->\r\n                    <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\" >\r\n        <div class=\"card-block\">\r\n            <ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Confirm Box</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Do you want to accept this order?</p>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"changestatus('2',listid)\" (click)=\"c('Close click')\">Accept</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\" >\r\n        <div class=\"card-block\">\r\n            <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Confirm Box</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Do you want to reject this order?</p>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"changestatus('4',listid)\" (click)=\"c('Close click')\">Reject</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/pendingorder/pendingorder.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/pendingorder/pendingorder.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.akhil {\n  margin-bottom: -45px;\n  margin-top: 28px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BlbmRpbmdvcmRlci9EOlxccmVzdGF1cmFudC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxwZW5kaW5nb3JkZXJcXHBlbmRpbmdvcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFDRDtFQUNJLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcGVuZGluZ29yZGVyL3BlbmRpbmdvcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9zY3NzL2dyYWRpZW50LXZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1ncmlke1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjc7XHJcbiAgICBmaWxsOnVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudCkgIWltcG9ydGFudDtcclxuICAgIGZpbGwtb3BhY2l0eTogMC45O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LWxpbmV7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMSBDU1MgRW5kc1xyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuU3RhY2tiYXJjaGFydHtcclxuICAgIC5jdC1zZXJpZXMtYSB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjbGluZWFyKSAhaW1wb3J0YW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN0LXNlcmllcy1iIHtcclxuICAgICAgICAuY3QtYmFye1xyXG4gICAgICAgICAgICBzdHJva2U6ICNlOWU5ZTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xle1xyXG4gICAgc3Ryb2tlOiAjODQzY2Y3O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6ICNBNjc1RjQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogIzMxYWZiMjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBMaW5lIENoYXJ0ICBDU1MgRW5kc1xyXG4gXHJcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMENDMjdFO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LXByb2dyZXNzIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNGRkMxMDc7XHJcbiAgICBzdHJva2Utd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzdFNTdDMjtcclxuICAgIHN0cm9rZS13aWR0aDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LXN0YXJ0ZWQgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzIxOTZGMztcclxuICAgIHN0cm9rZS13aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtbGFiZWwge1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmlsbDogIzg2OGU5NjtcclxuICB9XHJcblxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG5cclxuICAvLyBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzEpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nyk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMikge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ1KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0biszKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDYpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzQpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NCk7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIEJhciBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWdyaWQge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4OyAgICBcclxuICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnRzaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG4uYWtoaWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbn1cclxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIEVuZHMiXX0= */"

/***/ }),

/***/ "./src/app/dashboard/pendingorder/pendingorder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/pendingorder/pendingorder.component.ts ***!
  \******************************************************************/
/*! exports provided: NgbdModalContent, PendingorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingorderComponent", function() { return PendingorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var PendingorderComponent = /** @class */ (function () {
    function PendingorderComponent(modalService, appservice, router, route, toasterservice, loaderservice, cookieservice, excelService) {
        this.modalService = modalService;
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.excelService = excelService;
        this.initialPageValue = 1;
        this.startpagevalue = 0;
    }
    PendingorderComponent.prototype.ngOnInit = function () {
        this.d = new Date();
        this.today = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + this.d.getDate();
        //this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()-1);
        this.startValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() - 2);
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() + 1);
        ;
        //console.log(this.endValue);
        //console.log(this.startValue);
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getTodaySold();
        this.startdate = this.startValue;
        this.enddate = this.today;
    };
    PendingorderComponent.prototype.getTodaySold = function () {
        var _this = this;
        this.appservice.getreport(this.startpagevalue, 10, 1)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
                //this.ngOnInit();
            }
            else {
                _this.TodaySolddata = data.data;
                //this.ngOnInit();
            }
        });
    };
    PendingorderComponent.prototype.getsalesreport = function () {
        var _this = this;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, 10, 1)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    PendingorderComponent.prototype.handleChange = function (en) {
        var _this = this;
        this.pno = en - 1;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.pno, 10, 1)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = en;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    PendingorderComponent.prototype.exportAsXLSX = function () {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.TodaySolddata, 'sample');
    };
    PendingorderComponent.prototype.getrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 1)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    PendingorderComponent.prototype.getstatusrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 1)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    PendingorderComponent.prototype.open = function (content, id) {
        var _this = this;
        this.appservice.getiteminfo(id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.itemifo = data.data;
            }
            else {
                _this.itemifo = data.data;
            }
        });
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PendingorderComponent.prototype.open1 = function (content1, id) {
        var _this = this;
        this.listid = id;
        this.modalService.open(content1).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PendingorderComponent.prototype.open2 = function (content2, id) {
        var _this = this;
        this.listid = id;
        this.modalService.open(content2).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    PendingorderComponent.prototype.getDismissReason = function (reason) {
        console.log(reason);
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    PendingorderComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    PendingorderComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    PendingorderComponent.prototype.changestatus = function (state, id) {
        var _this = this;
        this.loaderservice.display(true);
        this.restid = document.getElementById("restid");
        this.tabid = document.getElementById("tabid");
        this.appservice.updatestatus(state, this.restid.value, this.tabid.value, id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.getTodaySold();
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    PendingorderComponent.prototype.changecook = function (con, val, oid) {
        var _this = this;
        this.loaderservice.display(true);
        this.appservice.updatecook(con, val, oid)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.itemifo = data.data;
            }
            else {
                _this.toasterservice.Error(data.message);
                _this.itemifo = data.data;
            }
        });
    };
    PendingorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pendingorder',
            template: __webpack_require__(/*! ./pendingorder.component.html */ "./src/app/dashboard/pendingorder/pendingorder.component.html"),
            styles: [__webpack_require__(/*! ./pendingorder.component.scss */ "./src/app/dashboard/pendingorder/pendingorder.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], PendingorderComponent);
    return PendingorderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product/product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/product/product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"akhil\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-2\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"goToaddproduct(':id')\">Add Menu</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4\">\r\n                                    <form [formGroup]=\"ProductSearch\"  novalidate>\r\n                                        <div class=\"input-group\">\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input type=\"text\" placeholder=\"Search product name\" (keyup)=\"getproductname()\" class=\"form-control\" formControlName=\"search\" required search>\r\n                                            </div>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <span class=\"form-text text-muted danger\"\r\n                                                    *ngIf=\"ProductSearch.get('search').errors && (ProductSearch.get('search').touched || ProductSearch.get('search').dirty)\">\r\n                                                    <span *ngIf=\"ProductSearch.get('search').errors.required\">Enter some value</span>\r\n                                                </span>  \r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                                <div class=\"col-lg-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <select id=\"projectinput5\" class=\"form-control\" id=\"getpage\" (change)=\"getrecord()\">\r\n                                            <option value=\"10\"  selected>10</option>\r\n                                            <option value=\"10000\">All</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                \r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-3\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <a class=\"btn btn-raised mr-1 btn-primary\" (click)=\"exportAsXLSX()\">Download List</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4\" style=\"display:none;\">\r\n                                    <div class=\"input-group\">\r\n                                        <select  class=\"form-control\" id=\"getsortpage\" (change)=\"getsortrecord()\">\r\n                                            <option value=\"name\"  selected>Name</option>\r\n                                             <option value=\"expire_date\">Expire date</option>\r\n                                           <option value=\"cat_id\">Menu Type</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4\">\r\n                                    <div class=\"input-group\">\r\n                                        <select id=\"gettype\"  (change)=\"gettypedata()\" class=\"form-control\">\r\n                                            <option value=\"\" selected=\"\" disabled=\"\">Select Menu Type</option>\r\n                                            <option *ngFor=\"let category of categorydata\"  value=\"{{category.name}}\">{{ category.name}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <!--<div class=\"col-lg-4\">\r\n                                    <div class=\"input-group\">\r\n                                       <input type=\"date\" (change)=\"getexpiredata()\" class=\"form-control\" value=\"{{myDate}}\" id=\"searchexpire\" value=\"{{myDate | date : 'yyyy-MM-dd'}}\">\r\n                                    </div>\r\n                                </div>-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Menu List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Type</th>\r\n                                    <th>Name</th>\r\n                                    <th>Mrp</th>\r\n                                    <th>In Stock</th>\r\n                                    <th>Is Veg</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let product of productdata; index as i\">\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\">{{itemsPerPage *(currentPage-1)+i+1}}</td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\">{{product.catname}}</td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\">{{product.name}}</td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\">₹ {{product.cost}}</td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\" *ngIf=\"product.In_stock == 1\">\r\n                                        <button class=\"btn btn-raised mr-1 btn-info\" (click)=\"changestock(product.id,2)\">In stock</button>\r\n                                    </td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\" *ngIf=\"product.In_stock == 2\">\r\n                                        <button class=\"btn btn-raised mr-1 btn-info\" (click)=\"changestock(product.id,1)\">Out Of Stock </button>\r\n                                    </td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\" *ngIf=\"product.Is_veg == 1\">Veg</td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\" *ngIf=\"product.Is_veg == 2\">Non Veg</td>\r\n                                    <td [ngClass]=\"{'alert alert-secondary':product.quantity <= 10 }\">\r\n                                        <!--<a class=\"btn btn-raised gradient-purple-bliss white shadow-z-1-hover\" data-original-title=\"\" title=\"\" (click)=\"addbilling(product.id)\">\r\n                                            <i class=\"ft-plus font-medium-3 mr-2\"></i>Add Billing\r\n                                        </a>-->\r\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreateProduct(product.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>Edit\r\n                                        </a>\r\n                                        <!--<a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"totalRecords !== ''\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-pagination (pageChange)=\"handleChange($event)\" [collectionSize]=\"totalRecords\" [(page)]=\"initialPageValue\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/product/product.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/product/product.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.akhil {\n  margin-bottom: -45px;\n  margin-top: 28px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QvRDpcXHJlc3RhdXJhbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFDRDtFQUNJLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWdyaWR7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XHJcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuNztcclxuICAgIGZpbGw6dXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50KSAhaW1wb3J0YW50O1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjk7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtbGluZXtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBFbmRzXHJcblxyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5TdGFja2JhcmNoYXJ0e1xyXG4gICAgLmN0LXNlcmllcy1hIHtcclxuICAgICAgICAuY3QtYmFye1xyXG4gICAgICAgICAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNsaW5lYXIpICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3Qtc2VyaWVzLWIge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogI2U5ZTllOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGV7XHJcbiAgICBzdHJva2U6ICM4NDNjZjc7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI0E2NzVGNDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjMzFhZmIyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGFiZWwge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIExpbmUgQ2hhcnQgIENTUyBFbmRzXHJcbiBcclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMwQ0MyN0U7XHJcbiAgICBzdHJva2Utd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0ZGQzEwNztcclxuICAgIHN0cm9rZS13aWR0aDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjN0U1N0MyO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMjE5NkYzO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmaWxsOiAjODY4ZTk2O1xyXG4gIH1cclxuXHJcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXHJcblxyXG4gIC8vIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMSkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ3KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisyKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDUpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzMpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nik7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rNCkge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ0KTtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtZ3JpZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7ICAgIFxyXG4gICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydHNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcbi5ha2hpbHtcclxuICAgIG1hcmdpbi1ib3R0b206IC00NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxufVxyXG4vLyBXaWRnZXQgbGluZSBDaGFydCBDU1MgRW5kcyJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/product/product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/product/product.component.ts ***!
  \********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductComponent = /** @class */ (function () {
    function ProductComponent(excelService, appservice, route, cookieservice, toasterservice, loaderservice) {
        this.excelService = excelService;
        this.appservice = appservice;
        this.route = route;
        this.cookieservice = cookieservice;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.initialPageValue = 1;
        this.startpagevalue = 0;
    }
    ProductComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.route.navigate(['/auth']);
        }
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.getProduct();
        this.getcategory();
        this.ProductSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    ProductComponent.prototype.getProduct = function () {
        var _this = this;
        this.sortby = document.getElementById("getsortpage");
        this.gettype = document.getElementById("gettype");
        this.appservice.product(this.loguser, this.startpagevalue, 10, this.sortby.value, this.gettype.value)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.productdata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
                _this.myDate = new Date();
            }
        });
    };
    ProductComponent.prototype.getcategory = function () {
        var _this = this;
        //console.log(this.loguser);
        this.appservice.category(0, 100)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.categorydata = data.data;
            }
        });
    };
    ProductComponent.prototype.getproductname = function () {
        var _this = this;
        //console.log(this.ProductSearch);
        this.loaderservice.display(true);
        this.sortby = document.getElementById("getsortpage");
        this.gettype = document.getElementById("gettype");
        this.appservice.productsearch(this.ProductSearch.value, this.loguser, this.startpagevalue, 10, this.sortby.value, this.gettype.value)
            .subscribe(function (data) {
            //console.log(data);return;
            if (data.status == '1') {
                _this.productdata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else if (data.status == '2') {
                _this.productdata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    ProductComponent.prototype.addbilling = function (id) {
        var _this = this;
        this.appservice.addbilling(id, 1)
            .subscribe(function (data) {
            //console.log(data);return;
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.productdata = data.data;
                _this.route.navigate(['/product']);
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
                _this.productdata = data.data;
                _this.route.navigate(['/product']);
            }
        });
    };
    ProductComponent.prototype.goToCreateProduct = function (id) {
        // alert();
        this.route.navigate(['/create-product', id]);
    };
    ProductComponent.prototype.goToaddproduct = function (id) {
        // alert();
        this.route.navigate(['/create-product', id]);
    };
    ProductComponent.prototype.handleChange = function (en) {
        var _this = this;
        this.pno = en - 1;
        this.sortby = document.getElementById("getsortpage");
        this.gettype = document.getElementById("gettype");
        this.appservice.product(this.loguser, this.pno, 10, this.sortby.value, this.gettype.value)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.productdata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = en;
            }
        });
    };
    ProductComponent.prototype.exportAsXLSX = function () {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.productdata, 'sample');
    };
    ProductComponent.prototype.getrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.sortby = document.getElementById("getsortpage");
        this.gettype = document.getElementById("gettype");
        this.appservice.product(this.loguser, this.startpagevalue, this.totalrecord.value, this.sortby.value, this.gettype.value)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.productdata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    ProductComponent.prototype.getsortrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.sortby = document.getElementById("getsortpage");
        this.gettype = document.getElementById("gettype");
        this.appservice.product(this.loguser, this.startpagevalue, this.totalrecord.value, this.sortby.value, this.gettype.value)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.productdata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    ProductComponent.prototype.gettypedata = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.sortby = document.getElementById("getsortpage");
        this.gettype = document.getElementById("gettype");
        this.appservice.product(this.loguser, this.startpagevalue, this.totalrecord.value, this.sortby.value, this.gettype.value)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.productdata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.productdata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    ProductComponent.prototype.getexpiredata = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.expiredatesearch = document.getElementById("searchexpire");
        this.appservice.productsearchexpire(this.loguser, this.startpagevalue, this.totalrecord.value, this.expiredatesearch.value)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.productdata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.productdata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    ProductComponent.prototype.changestock = function (id, val) {
        var _this = this;
        this.appservice.updatestock(id, val)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.getProduct();
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/dashboard/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/dashboard/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"], _shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/rejectorder/rejectorder.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/rejectorder/rejectorder.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row akhil\">\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"projectinput5\" class=\"form-control\" id=\"getpage\" (change)=\"getrecord()\">\r\n                                        <option value=\"10\"  selected>10</option>\r\n                                        <option value=\"10000\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <a class=\"btn btn-raised mr-1 btn-primary\" (click)=\"exportAsXLSX()\">Download List</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Rejected Orders</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Table Id</th>\r\n                                    <th>Order Amount</th>\r\n                                    <th>Customer Detail</th>\r\n                                    <th>Order Date</th>\r\n                                    <th>Item Info</th>\r\n                                    <!--<th>Status</th>-->\r\n                                   \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let product of TodaySolddata; index as i\">\r\n                                    <td>{{itemsPerPage *(currentPage-1)+i+1}}</td>\r\n                                    <td>{{product.name}}</td>\r\n                                    <td>{{product.total_amount}}</td>\r\n                                    <td>{{product.cust_name}}</td>\r\n                                    <input type=\"hidden\" id=\"restid\" value=\"{{product.restaurant_id}}\"/>\r\n                                    <input type=\"hidden\" id=\"tabid\" value=\"{{product.table_id}}\"/>\r\n                                    <td>{{product.created_date | date:'dd/MM/yyyy'}}</td>\r\n                                    <td>\r\n                                        <button class=\"btn btn-raised mr-1 btn-info\" (click)=\"open(content,product.id)\">Detail</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 1\" >\r\n                                        <button class=\"btn btn-raised mr-1 btn-success\" value=\"2\" (click)=\"changestatus('2')\">Accept</button>\r\n                                        <button class=\"btn btn-raised mr-1 btn-danger\" value=\"4\" (click)=\"changestatus('4')\">Reject</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 2\">\r\n                                        <button class=\"btn btn-raised mr-1 btn-primary\" value=\"3\" (click)=\"changestatus('3')\">Close order</button>\r\n                                    </td>\r\n                                    <!--<td id=\"statusreport\" *ngIf=\"product.status == 3\">Close</td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 4\">Reject</td>-->\r\n                                    \r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"totalRecords !== ''\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-pagination (pageChange)=\"handleChange($event)\" [collectionSize]=\"totalRecords\" [(page)]=\"initialPageValue\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Item Info</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <!--<p>One fine body&hellip;</p>-->\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <table class=\"table table-responsive-md text-left\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Sr.No.</th>\r\n                                        <th>Item Name</th>\r\n                                        <th>Quantity</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of itemifo; index as i\">\r\n                                        <td>{{i+1}}</td>\r\n                                        <td>{{item.name}}</td>\r\n                                        <td>{{item.quantity}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <!--<button  type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"changestatus()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>-->\r\n                    <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/rejectorder/rejectorder.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/rejectorder/rejectorder.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.akhil {\n  margin-bottom: -45px;\n  margin-top: 28px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3JlamVjdG9yZGVyL0Q6XFxyZXN0YXVyYW50L3NyY1xcYXBwXFxkYXNoYm9hcmRcXHJlamVjdG9yZGVyXFxyZWplY3RvcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFDRDtFQUNJLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcmVqZWN0b3JkZXIvcmVqZWN0b3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuLmFraGlse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG59XHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/rejectorder/rejectorder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/rejectorder/rejectorder.component.ts ***!
  \****************************************************************/
/*! exports provided: NgbdModalContent, RejectorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectorderComponent", function() { return RejectorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var RejectorderComponent = /** @class */ (function () {
    function RejectorderComponent(modalService, appservice, router, route, toasterservice, loaderservice, cookieservice, excelService) {
        this.modalService = modalService;
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.excelService = excelService;
        this.initialPageValue = 1;
        this.startpagevalue = 0;
    }
    RejectorderComponent.prototype.ngOnInit = function () {
        this.d = new Date();
        this.today = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + this.d.getDate();
        //this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()-1);
        this.startValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() - 2);
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() + 1);
        ;
        //console.log(this.endValue);
        //console.log(this.startValue);
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getTodaySold();
        this.startdate = this.startValue;
        this.enddate = this.today;
    };
    RejectorderComponent.prototype.getTodaySold = function () {
        var _this = this;
        this.appservice.getreport(this.startpagevalue, 10, 4)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
                //this.ngOnInit();
            }
            else {
                _this.TodaySolddata = data.data;
                //this.ngOnInit();
            }
        });
    };
    RejectorderComponent.prototype.getsalesreport = function () {
        var _this = this;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, 10, 4)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    RejectorderComponent.prototype.handleChange = function (en) {
        var _this = this;
        this.pno = en - 1;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.getstatusvalue = document.getElementById("getstatus");
        this.appservice.getreport(this.pno, 10, 4)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = en;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    RejectorderComponent.prototype.exportAsXLSX = function () {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.TodaySolddata, 'sample');
    };
    RejectorderComponent.prototype.getrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 4)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    RejectorderComponent.prototype.getstatusrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 4)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    RejectorderComponent.prototype.open = function (content, id) {
        var _this = this;
        this.appservice.getiteminfo(id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.itemifo = data.data;
            }
            else {
                _this.itemifo = data.data;
            }
        });
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    RejectorderComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    RejectorderComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    RejectorderComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    RejectorderComponent.prototype.changestatus = function (state, id) {
        var _this = this;
        this.loaderservice.display(true);
        this.restid = document.getElementById("restid");
        this.tabid = document.getElementById("tabid");
        this.appservice.updatestatus(state, this.restid.value, this.tabid.value, id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.getTodaySold();
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    RejectorderComponent.prototype.changecook = function (con, val, oid) {
        var _this = this;
        this.loaderservice.display(true);
        this.appservice.updatecook(con, val, oid)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.itemifo = data.data;
            }
            else {
                _this.toasterservice.Error(data.message);
                _this.itemifo = data.data;
            }
        });
    };
    RejectorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rejectorder',
            template: __webpack_require__(/*! ./rejectorder.component.html */ "./src/app/dashboard/rejectorder/rejectorder.component.html"),
            styles: [__webpack_require__(/*! ./rejectorder.component.scss */ "./src/app/dashboard/rejectorder/rejectorder.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], RejectorderComponent);
    return RejectorderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/table/table.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/table/table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row akhil\">\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"col-lg-12 input-group\">\r\n                                    <div class=\"col-lg-6\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"goToaddcategory(':id')\">Add Table</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"projectinput5\" class=\"form-control\" id=\"getpage\" (change)=\"getrecord()\">\r\n                                        <option value=\"10\"  selected>10</option>\r\n                                        <option value=\"10000\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <a class=\"btn btn-raised mr-1 btn-primary\" (click)=\"exportAsXLSX()\">Download List</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Type List</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Table Name</th>\r\n                                    <th>Qr code</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let category of categorydata; index as i\">\r\n                                    <td>{{itemsPerPage *(currentPage-1)+i+1}}</td>\r\n                                    <td>{{category.name}} </td>\r\n                                    <td>\r\n                                        <button class=\"btn btn-raised mr-1 btn-info\" (click)=\"open(content,category.id)\">View Qr code</button>\r\n                                        \r\n                                    </td>\r\n                                    <!--<td> <button class=\"btn btn-raised mr-1 btn-success\" (click)=\"genqrcode(category.id)\">View Qr Code</button> {{qr}}</td>-->\r\n                                    <td> \r\n                                       <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                                            <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                                        </a>-->\r\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"goToCreatecategory(category.id)\">\r\n                                            <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletecategory(category.id)\">\r\n                                            <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"totalRecords !== ''\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-pagination (pageChange)=\"handleChange($event)\" [collectionSize]=\"totalRecords\" [(page)]=\"initialPageValue\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Qr Code</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <!--<p>One fine body&hellip;</p>-->\r\n                    <div class=\"card-body\">\r\n                        <qrcode id=\"qrCodeImage\" [qrdata]=\"myAngularxQrCode\" [size]=\"300\" [level]=\"'M'\"></qrcode>  \r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/table/table.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.akhil {\n  margin-bottom: -45px;\n  margin-top: 28px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RhYmxlL0Q6XFxyZXN0YXVyYW50L3NyY1xcYXBwXFxkYXNoYm9hcmRcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFDRDtFQUNJLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuLmFraGlse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG59XHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: NgbdModalContent, TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var TableComponent = /** @class */ (function () {
    function TableComponent(modalService, appservice, router, route, toasterservice, loaderservice, cookieservice, excelService) {
        this.modalService = modalService;
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.excelService = excelService;
        this.initialPageValue = 1;
        this.startpagevalue = 0;
        this.myAngularxQrCode = null;
        this.myAngularxQrCode = 'Your QR code data string';
    }
    //config.boundaryLinks = true
    TableComponent.prototype.ngOnInit = function () {
        this.restid = JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getcategory();
    };
    TableComponent.prototype.getcategory = function () {
        var _this = this;
        this.appservice.table(this.startpagevalue, 10, this.restid)
            .subscribe(function (data) {
            if (data.status == '1') {
                // this.currentPage2=data.count;
                _this.myAngularxQrCode = 'Your QR code data string';
                _this.categorydata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    TableComponent.prototype.deletecategory = function (id) {
        var _this = this;
        this.appservice.deletecategory(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.categorydata = data.data;
                _this.toasterservice.Success(data.message);
                _this.router.navigate(['/category']);
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
                _this.router.navigate(['/category']);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    TableComponent.prototype.goToCreatecategory = function (id) {
        // alert();
        this.router.navigate(['/create-table', id]);
    };
    TableComponent.prototype.goToaddcategory = function (id) {
        // alert();
        this.router.navigate(['/create-table', id]);
    };
    TableComponent.prototype.handleChange = function (en) {
        var _this = this;
        this.pno = en - 1;
        this.appservice.table(this.pno, 10, this.restid)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.categorydata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = en;
            }
        });
    };
    TableComponent.prototype.exportAsXLSX = function () {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.categorydata, 'sample');
    };
    TableComponent.prototype.getrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.appservice.table(this.startpagevalue, this.totalrecord.value, this.restid)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.categorydata = data.data;
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    TableComponent.prototype.open = function (content, id) {
        var _this = this;
        this.appservice.tabledetail(id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.restid = data.data[0].restaurant_id;
                _this.tabid = data.data[0].id;
                _this.qr = "http://13.233.172.180/Signup?restaurantcode=" + _this.restid + "&tableid=" + _this.tabid;
                //console.log(this.qr);
                _this.myAngularxQrCode = _this.qr;
            }
            else {
            }
        });
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    TableComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    TableComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    TableComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/dashboard/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/dashboard/table/table.component.scss")],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/todaysold/todaysold.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/todaysold/todaysold.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"extended\">\r\n    <div class=\"row text-left\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row akhil\">\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"projectinput5\" class=\"form-control\" id=\"getpage\" (change)=\"getrecord()\">\r\n                                        <option value=\"10\"  selected>10</option>\r\n                                        <option value=\"10000\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <a class=\"btn btn-raised mr-1 btn-primary\" (click)=\"exportAsXLSX()\">Download List</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Open Orders</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md text-left\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr.No.</th>\r\n                                    <th>Table Id</th>\r\n                                    <th>Order Amount</th>\r\n                                    <th>Customer Detail</th>\r\n                                    <th>Order Date</th>\r\n                                    <th>Item Info</th>\r\n                                    <th>Status</th>\r\n                                   \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let product of TodaySolddata; index as i\">\r\n                                    <td>{{itemsPerPage *(currentPage-1)+i+1}}</td>\r\n                                    <td>{{product.name}}</td>\r\n                                    <td>{{product.total_amount}}</td>\r\n                                    <td>{{product.custno}}</td>\r\n                                    <input type=\"hidden\" id=\"restid\" value=\"{{product.restaurant_id}}\"/>\r\n                                    <input type=\"hidden\" id=\"tabid\" value=\"{{product.table_id}}\"/>\r\n                                    <td>{{product.created_date | date:'dd/MM/yyyy'}}</td>\r\n                                    <td>\r\n                                        <button class=\"btn btn-raised mr-1 btn-info\" (click)=\"open(content,product.id)\">Detail</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 1\" >\r\n                                        <button class=\"btn btn-raised mr-1 btn-success\" value=\"2\" (click)=\"changestatus('2')\">Accept</button>\r\n                                        <button class=\"btn btn-raised mr-1 btn-danger\" value=\"4\" (click)=\"changestatus('4')\">Reject</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 2\">\r\n                                        <button class=\"btn btn-raised mr-1 btn-primary\" value=\"3\" (click)=\"open1(content1,product.id)\">Close order</button>\r\n                                    </td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 3\">Close</td>\r\n                                    <td id=\"statusreport\" *ngIf=\"product.status == 4\">Cancel</td>\r\n                                    \r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"totalRecords !== ''\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-pagination (pageChange)=\"handleChange($event)\" [collectionSize]=\"totalRecords\" [(page)]=\"initialPageValue\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"10\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Item Info</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <!--<p>One fine body&hellip;</p>-->\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <table class=\"table table-responsive-md text-left\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Sr.No.</th>\r\n                                        <th>Item Name</th>\r\n                                        <th>Quantity</th>\r\n                                        <th>Status</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of itemifo; index as i\">\r\n                                        <td>{{i+1}}</td>\r\n                                        <td>{{item.name}}</td>\r\n                                        <td>{{item.quantity}}</td>\r\n                                        <td *ngIf=\"item.status == 1\">\r\n                                            <button class=\"btn btn-raised mr-1 btn-primary\"  (click)=\"changecook(item.id,2,item.order_id)\">Cooking</button>\r\n                                        </td>\r\n                                        <td *ngIf=\"item.status == 2\">\r\n                                            <button class=\"btn btn-raised mr-1 btn-primary\"  (click)=\"changecook(item.id,1,item.order_id)\">Cooked</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <!--<button  type=\"submit\"  class=\"btn btn-raised btn-raised btn-primary\" (click)=\"changestatus()\"> <i class=\"fa fa-check-square-o\"></i>Save</button>-->\r\n                    <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\" >\r\n        <div class=\"card-block\">\r\n            <ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Confirm Box</h4>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Do you want to close this order?</p>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <button class=\"btn btn-raised mr-1 btn-primary\" (click)=\"changestatus('3',listid)\" (click)=\"c('Close click')\">Close</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/dashboard/todaysold/todaysold.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/todaysold/todaysold.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.akhil {\n  margin-bottom: -45px;\n  margin-top: 28px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RvZGF5c29sZC9EOlxccmVzdGF1cmFudC9zcmNcXGFwcFxcZGFzaGJvYXJkXFx0b2RheXNvbGRcXHRvZGF5c29sZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxrQkFBaUI7RUFDakIsd0RBQTRELEVBQy9EOztBQUVEO0VBQ0ksdURBQTREO0VBQzVELGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFNRDtFQUdZLHVEQUE0RCxFQUMvRDs7QUFKVDtFQVFZLGdCQUFlLEVBQ2xCOztBQVFUO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksd0RBQTZELEVBQ2hFOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBaUIsRUFDcEI7O0FBTUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFLQztFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFNRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFDRDtFQUNFLCtDQUFvRCxFQUNyRDs7QUFFRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBTUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDcEIsaUNBQWdDLEVBQ3BDOztBQUVEO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFDRDtFQUNJLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdG9kYXlzb2xkL3RvZGF5c29sZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9zY3NzL2dyYWRpZW50LXZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1ncmlke1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjc7XHJcbiAgICBmaWxsOnVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudCkgIWltcG9ydGFudDtcclxuICAgIGZpbGwtb3BhY2l0eTogMC45O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LWxpbmV7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMSBDU1MgRW5kc1xyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuU3RhY2tiYXJjaGFydHtcclxuICAgIC5jdC1zZXJpZXMtYSB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjbGluZWFyKSAhaW1wb3J0YW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN0LXNlcmllcy1iIHtcclxuICAgICAgICAuY3QtYmFye1xyXG4gICAgICAgICAgICBzdHJva2U6ICNlOWU5ZTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xle1xyXG4gICAgc3Ryb2tlOiAjODQzY2Y3O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6ICNBNjc1RjQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogIzMxYWZiMjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBMaW5lIENoYXJ0ICBDU1MgRW5kc1xyXG4gXHJcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMENDMjdFO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LXByb2dyZXNzIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNGRkMxMDc7XHJcbiAgICBzdHJva2Utd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzdFNTdDMjtcclxuICAgIHN0cm9rZS13aWR0aDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LXN0YXJ0ZWQgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzIxOTZGMztcclxuICAgIHN0cm9rZS13aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtbGFiZWwge1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmlsbDogIzg2OGU5NjtcclxuICB9XHJcblxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG5cclxuICAvLyBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzEpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nyk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMikge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ1KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0biszKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDYpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzQpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NCk7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIEJhciBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWdyaWQge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4OyAgICBcclxuICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnRzaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG4uYWtoaWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/todaysold/todaysold.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/todaysold/todaysold.component.ts ***!
  \************************************************************/
/*! exports provided: NgbdModalContent, TodaySoldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaySoldComponent", function() { return TodaySoldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    return NgbdModalContent;
}());

var TodaySoldComponent = /** @class */ (function () {
    function TodaySoldComponent(modalService, appservice, router, route, toasterservice, loaderservice, cookieservice, excelService) {
        this.modalService = modalService;
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.excelService = excelService;
        this.initialPageValue = 1;
        this.startpagevalue = 0;
    }
    TodaySoldComponent.prototype.ngOnInit = function () {
        this.d = new Date();
        this.today = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + this.d.getDate();
        //this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()-1);
        this.startValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() - 2);
        this.loguser = JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth() + 1) + "-" + (this.d.getDate() + 1);
        ;
        //console.log(this.endValue);
        //console.log(this.startValue);
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getTodaySold();
        this.startdate = this.startValue;
        this.enddate = this.today;
    };
    TodaySoldComponent.prototype.getTodaySold = function () {
        var _this = this;
        this.appservice.getreport(this.startpagevalue, 10, 2)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
                //this.ngOnInit();
            }
            else {
                _this.TodaySolddata = data.data;
                //this.ngOnInit();
            }
        });
    };
    TodaySoldComponent.prototype.getsalesreport = function () {
        var _this = this;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, 10, 2)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
        });
    };
    TodaySoldComponent.prototype.handleChange = function (en) {
        var _this = this;
        this.pno = en - 1;
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.pno, 10, 2)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                _this.totalRecords = data.record;
                _this.itemsPerPage = 10;
                _this.currentPage = en;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    TodaySoldComponent.prototype.exportAsXLSX = function () {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.TodaySolddata, 'sample');
    };
    TodaySoldComponent.prototype.getrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 2)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    TodaySoldComponent.prototype.getstatusrecord = function () {
        var _this = this;
        this.totalrecord = document.getElementById("getpage");
        this.startDateValue = document.getElementById("startdate");
        this.endDateValue = document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue, this.totalrecord.value, 2)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.TodaySolddata = data.data;
                // this.excelbaseurl=sessionStorage.getItem("excelurl");
                if (_this.totalrecord.value == 10) {
                    _this.totalRecords = data.record;
                }
                else {
                    _this.totalRecords = '';
                }
                _this.itemsPerPage = 10;
                _this.currentPage = _this.initialPageValue;
            }
            else {
                _this.TodaySolddata = data.data;
            }
        });
    };
    TodaySoldComponent.prototype.open = function (content, id) {
        var _this = this;
        this.appservice.getiteminfo(id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.itemifo = data.data;
            }
            else {
                _this.itemifo = data.data;
            }
        });
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TodaySoldComponent.prototype.open1 = function (content1, id) {
        var _this = this;
        this.listid = id;
        this.modalService.open(content1).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    TodaySoldComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    TodaySoldComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    TodaySoldComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    TodaySoldComponent.prototype.changestatus = function (state, id) {
        var _this = this;
        this.loaderservice.display(true);
        this.restid = document.getElementById("restid");
        this.tabid = document.getElementById("tabid");
        this.appservice.updatestatus(state, this.restid.value, this.tabid.value, id)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.getTodaySold();
            }
            else if (data.status == '2') {
                _this.toasterservice.Error(data.message);
            }
            else {
                _this.toasterservice.Error(data.message);
            }
        });
    };
    TodaySoldComponent.prototype.changecook = function (con, val, oid) {
        var _this = this;
        this.loaderservice.display(true);
        this.appservice.updatecook(con, val, oid)
            .subscribe(function (data) {
            if (data.status == '1') {
                _this.toasterservice.Success(data.message);
                _this.itemifo = data.data;
            }
            else {
                _this.toasterservice.Error(data.message);
                _this.itemifo = data.data;
            }
        });
    };
    TodaySoldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todaysold',
            template: __webpack_require__(/*! ./todaysold.component.html */ "./src/app/dashboard/todaysold/todaysold.component.html"),
            styles: [__webpack_require__(/*! ./todaysold.component.scss */ "./src/app/dashboard/todaysold/todaysold.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], TodaySoldComponent);
    return TodaySoldComponent;
}());



/***/ }),

/***/ "./src/app/shared/data/chartist.json":
/*!*******************************************!*\
  !*** ./src/app/shared/data/chartist.json ***!
  \*******************************************/
/*! exports provided: Bar, Line3, ScatterLine, Scatter, lineArea4, lineArea3, lineArea2, lineAreaDashboard, lineArea1, Bi-PolarLine, DistributedSeries, donut, donutDashboard, DashboardDonut, LineDashboard, line2, line1, WidgetlineChart, WidgetlineChart2, WidgetlineChart3, DashboardBar, Stackbarchart, default */
/***/ (function(module) {

module.exports = {"Bar":{"labels":["Jan","Feb","Mar","Apr"],"series":[[5,4,3,7],[3,2,9,5]]},"Line3":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[12,9,7,4,5,6,6],[2,1,10,7,3,7,2],[1,10,2,10,6,2,8]]},"ScatterLine":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"series":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},"Scatter":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"series":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},"lineArea4":{"labels":[1,2,3,4,5,6,7,8],"series":[[5,9,7,8,5,3,5,4]]},"lineArea3":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,5,15,8,15,9,30,0],[0,3,5,2,8,1,5,0]]},"lineArea2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[5,30,25,55,45,65,60,105,80,110,120,150],[80,95,87,155,140,147,130,180,160,175,165,200]]},"lineAreaDashboard":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,20,10,45,20,36,21,0],[0,5,22,14,32,12,28,0]]},"lineArea1":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[10,30,10,35,15,45,15,35,20,30],[0,10,30,10,30,15,30,15,30,0]]},"Bi-PolarLine":{"labels":[1,2,3,4,5,6,7,8],"series":[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,0.5,1,0.5,-1,-2.5]]},"DistributedSeries":{"labels":["XS","S","M","L","XL","XXL","XXXL"],"series":[50,70,120,200,180,120,150]},"donut":{"series":[20,10,30,40]},"donutDashboard":{"series":[{"name":"done","className":"ct-done","value":23},{"name":"progress","className":"ct-progress","value":14},{"name":"outstanding","className":"ct-outstanding","value":35},{"name":"started","className":"ct-started","value":28}]},"DashboardDonut":{"series":[{"name":"done","className":"ct-done","value":10},{"name":"outstanding","className":"ct-outstanding","value":3}]},"LineDashboard":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[80,85,75,65,63,70,82]]},"line2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[160,150,140,120,75,35,45,65,100,145,160,180],[100,95,90,100,110,120,130,140,130,95,75,80]]},"line1":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[65,105,145,105,145,185],[125,80,30,70,110,150],[175,190,160,190,140,100]]},"WidgetlineChart":{"labels":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"series":[[50,45,60,55,70,55,60,55,65,57,60,53,53]]},"WidgetlineChart2":{"labels":["Jan","Feb","Mar","Apr","May","June","July","Aug"],"series":[[55,60,50,55,50,60,55,57]]},"WidgetlineChart3":{"labels":["Jan","Feb","Mar","Apr","May"],"series":[[50,70,45,75,85]]},"DashboardBar":{"labels":["Sport","Music","Travel","News"],"series":[[53,23,40,30]]},"Stackbarchart":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[8,9,5,6,7,4],[2,1,5,4,3,6]]}};

/***/ }),

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // call our matchHeight function here
        setTimeout(function () { _this.matchHeights(_this.el.nativeElement, _this.matchHeight); }, 300);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        //Pixinvent - Match hight - fix --- comment below code
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map