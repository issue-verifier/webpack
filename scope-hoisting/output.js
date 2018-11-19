// /******/ ({

// /***/ "./a.js":
// /*!**************************!*\
//   !*** ./a.js + 1 modules ***!
//   \**************************/
// /*! exports provided: default, d */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("\n// CONCATENATED MODULE: ./b.js\nconst a = 'hello';\n\n/* harmony default export */ var b = (a);\n\nconst b_b = 'named export';\n// CONCATENATED MODULE: ./a.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return d; });\n\n\nconst c = `${b} world`;\n\n/* harmony default export */ var a_0 = __webpack_exports__[\"default\"] = (c);\nconst d = b_b;\n\n//# sourceURL=webpack:///./a.js_+_1_modules?");

// /***/ }),

// /***/ "./index.js":
// /*!******************!*\
//   !*** ./index.js ***!
//   \******************/
// /*! no exports provided */
// /*! ModuleConcatenation bailout: Module is an entry point */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./a.js\");\nconst str = __webpack_require__(/*! ./a */ \"./a.js\");\n\nconsole.log(str);\n\n\n\nconsole.log(_a__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _a__WEBPACK_IMPORTED_MODULE_0__[\"d\"]);\n\n//# sourceURL=webpack:///./index.js?");

// /***/ })

// /******/ });

/***/ "./a.js":
/*!**************************!*\
  !*** ./a.js + 1 modules ***!
  \**************************/
/*! exports provided: default, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./b.js
const a = 'hello';

/* harmony default export */ var b = (a);

const b_b = 'named export';
// CONCATENATED MODULE: ./a.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return d; });

const c = `${b} world`;

/* harmony default export */ var a_0 = __webpack_exports__["default"] = (c);
const d = b_b;

//# sourceURL=webpack:///./a.js_+_1_modules?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */
var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ "./a.js");
const str = __webpack_require__(/*! ./a */ "./a.js");

console.log(str);

console.log(_a__WEBPACK_IMPORTED_MODULE_0__["default"], _a__WEBPACK_IMPORTED_MODULE_0__["d"]);

//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });