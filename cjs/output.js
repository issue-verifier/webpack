const modules = {
  "./a.js": (function (module, exports, __webpack_require__) {
    eval("const b = __webpack_require__(/*! ./b */ \"./b.js\");\n\nconst c = `${b} world`;\n\nmodule.exports = c;\n\n//# sourceURL=webpack:///./a.js?");
  }),
  "./b.js": (function (module, exports) {
    eval("const a = 'hello';\n\nmodule.exports = a;\n\n//# sourceURL=webpack:///./b.js?");
  }),
  "./index.js": (function (module, exports, __webpack_require__) {
    eval("const str = __webpack_require__(/*! ./a */ \"./a.js\");\n\nconsole.log(str);\n\n//# sourceURL=webpack:///./index.js?");
  }),
  /*  !*** multi ./index.js ***! */
  /*! no static exports found */
  0: (function (module, exports, __webpack_require__) {
    eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");
  })
};

(function (modules) { // webpackBootstrap
  // The module cache
  var installedModules = {};

  // The require function
  function __webpack_require__(moduleId) {

    console.log('moduleId', moduleId)
    // Check if module is in cache
    if (installedModules[moduleId]) return installedModules[moduleId].exports;

    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // 0
    // (module, exports) { eval("const a = 'hello';\n\nmodule.exports = a;\n\n//# sourceURL=webpack:///./b.js?"); }
    // others: e.g. index.js
    // (module, exports, __webpack_require__) { eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?"); }
    // console.log(modules[moduleId])
    console.log('moduleId', moduleId)

    // Execute the module function
    // (module, exports, __webpack_require__)
    // 各モジュールでラップされたfunction(){}をmodule.exportsをバインドとして呼ぶ
    // 末端のmodulesはこれ以上再帰的な走査をする必要がないため__webpack_require__を持たない
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // 0
    // {i: 0, l: false, exports: {…}}
    // others
    // {i: "./index.js", l: false, exports: {…}} // TODO: exportsの確認
    // {i: "./a.js", l: false, exports: "hello world"}
    // console.log('module.exports', module.exports)
    console.log('===moduleId', moduleId)

    // Flag the module as loaded
    module.l = true;

    // 普通のコードのmodule.exportsの中身
    // Return the exports of the module
    return module.exports;
  }

  // モジュールリスト
  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // モジュールキャッシュ(moduleが入っている、L30参照)
  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault() { return module['default']; } :
      function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

  // __webpack_public_path__
  __webpack_require__.p = "";


  console.log('__webpack_require__', Object.entries(__webpack_require__));

  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = 0);
})(modules);