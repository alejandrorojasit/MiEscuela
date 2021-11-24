"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemiescuelaserver"]("main",{

/***/ "./app/routes/PrivateRoute.jsx":
/*!*************************************!*\
  !*** ./app/routes/PrivateRoute.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AdminRoute\": () => (/* binding */ AdminRoute)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _Context_Store_useAuth_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context/Store/useAuth.jsx */ \"./app/Context/Store/useAuth.jsx\");\n/* harmony import */ var _Components_Logic_tokenhandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Logic/tokenhandler.js */ \"./app/Components/Logic/tokenhandler.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nconst AdminRoute = props => {\n  const {\n    stateUser\n  } = (0,_Context_Store_useAuth_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  switch (true) {\n    case stateUser.isAuthenticated === false:\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {\n        to: \"/LogIn\"\n      });\n\n    case stateUser.isAuthenticated === true:\n      if ((0,_Components_Logic_tokenhandler_js__WEBPACK_IMPORTED_MODULE_1__.DecodeToken)(1).usuario.role === 'admin') {\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { ...props\n        });\n      } else {\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {\n          to: \"/Forbidden\"\n        });\n      }\n\n  }\n};\n\n//# sourceURL=webpack://miescuelaserver/./app/routes/PrivateRoute.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26f6bf7e841d0d238eb6")
/******/ })();
/******/ 
/******/ }
);