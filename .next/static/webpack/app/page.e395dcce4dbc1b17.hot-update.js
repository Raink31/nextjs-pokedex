"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_pokemonEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/pokemonEntry */ \"(app-pages-browser)/./src/components/pokemonEntry.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center items-center flex-col pt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl text-[#fafafa]\",\n                children: \"All pok\\xe9mons\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pokemonEntry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                name: \"bulbasaur\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pokemonEntry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                name: \"ivysaur\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pokemonEntry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                name: \"venusaur\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVvRDtBQUdyQyxTQUFTQztJQUN0QixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0gsZ0VBQVlBO2dCQUFDSyxNQUFLOzs7Ozs7MEJBQ25CLDhEQUFDTCxnRUFBWUE7Z0JBQUNLLE1BQUs7Ozs7OzswQkFDbkIsOERBQUNMLGdFQUFZQTtnQkFBQ0ssTUFBSzs7Ozs7Ozs7Ozs7O0FBR3pCO0tBVHdCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBQb2tlbW9uRW50cnkgZnJvbSAnQC9jb21wb25lbnRzL3Bva2Vtb25FbnRyeSdcclxuaW1wb3J0ICogYXMgUG9rZW1vbkFwaSBmcm9tICdAL25ldHdvcmsvcG9rZW1vbi1hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBwdC02Jz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgdGV4dC1bI2ZhZmFmYV0nPkFsbCBwb2vDqW1vbnM8L2gxPlxyXG4gICAgICA8UG9rZW1vbkVudHJ5IG5hbWU9XCJidWxiYXNhdXJcIiAvPlxyXG4gICAgICA8UG9rZW1vbkVudHJ5IG5hbWU9XCJpdnlzYXVyXCIgLz5cclxuICAgICAgPFBva2Vtb25FbnRyeSBuYW1lPVwidmVudXNhdXJcIiAvPlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUG9rZW1vbkVudHJ5IiwiSG9tZSIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});