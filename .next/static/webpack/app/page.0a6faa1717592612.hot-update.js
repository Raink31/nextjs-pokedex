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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _network_pokemon_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/network/pokemon-api */ \"(app-pages-browser)/./src/network/pokemon-api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { data: pokemonList, isLoading: pokemonLoad } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"getPokemonPage\",\n        151\n    ], ()=>_network_pokemon_api__WEBPACK_IMPORTED_MODULE_2__.getPokemonPage(151));\n    if (pokemonLoad) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: \"fill-white animate-spin\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        height: \"40\",\n        viewBox: \"0 -960 960 960\",\n        width: \"40\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 10,\n            columnNumber: 151\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 10,\n        columnNumber: 27\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center items-center flex-col pt-6 gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl text-[#fafafa]\",\n                children: \"All pok\\xe9mons\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"J2S99NDB2h+5PIRispyIACmPQZ8=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR3dCO0FBQzJCO0FBRXBDLFNBQVNFOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLFdBQVcsRUFBRUMsV0FBV0MsV0FBVyxFQUFFLEdBQUdOLCtDQUFNQSxDQUFDO1FBQUM7UUFBa0I7S0FBSSxFQUFFLElBQU1DLGdFQUF5QixDQUFDO0lBRXRILElBQUlLLGFBQWEscUJBQU8sOERBQUNFO1FBQUlDLFdBQVU7UUFBMEJDLE9BQU07UUFBNkJDLFFBQU87UUFBS0MsU0FBUTtRQUFpQkMsT0FBTTtrQkFBSyw0RUFBQ0M7WUFBS0MsR0FBRTs7Ozs7Ozs7Ozs7SUFFNUoscUJBQ0UsOERBQUNDO1FBQUtQLFdBQVU7OzBCQUNkLDhEQUFDUTtnQkFBR1IsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNTOzs7Ozs7Ozs7OztBQUtQO0dBYndCaEI7O1FBQ2dDRiwyQ0FBTUE7OztLQUR0Q0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUG9rZW1vbkVudHJ5IGZyb20gJ0AvY29tcG9uZW50cy9wb2tlbW9uRW50cnknXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgKiBhcyBQb2tlbW9uQXBpIGZyb20gJ0AvbmV0d29yay9wb2tlbW9uLWFwaSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBwb2tlbW9uTGlzdCwgaXNMb2FkaW5nOiBwb2tlbW9uTG9hZCB9ID0gdXNlU1dSKFtcImdldFBva2Vtb25QYWdlXCIsIDE1MV0sICgpID0+IFBva2Vtb25BcGkuZ2V0UG9rZW1vblBhZ2UoMTUxKSlcclxuXHJcbiAgaWYgKHBva2Vtb25Mb2FkKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJmaWxsLXdoaXRlIGFuaW1hdGUtc3BpblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIHdpZHRoPVwiNDBcIj48cGF0aCBkPVwiTTQ4MC04MHEtODIgMC0xNTUtMzEuNXQtMTI3LjUtODZRMTQzLTI1MiAxMTEuNS0zMjVUODAtNDgwcTAtODMgMzEuNS0xNTUuNXQ4Ni0xMjdRMjUyLTgxNyAzMjUtODQ4LjVUNDgwLTg4MHExNyAwIDI4LjUgMTEuNVQ1MjAtODQwcTAgMTctMTEuNSAyOC41VDQ4MC04MDBxLTEzMyAwLTIyNi41IDkzLjVUMTYwLTQ4MHEwIDEzMyA5My41IDIyNi41VDQ4MC0xNjBxMTMzIDAgMjI2LjUtOTMuNVQ4MDAtNDgwcTAtMTcgMTEuNS0yOC41VDg0MC01MjBxMTcgMCAyOC41IDExLjVUODgwLTQ4MHEwIDgyLTMxLjUgMTU1dC04NiAxMjcuNXEtNTQuNSA1NC41LTEyNyA4NlQ0ODAtODBaXCIgLz48L3N2Zz5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgcHQtNiBnYXAtMic+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIHRleHQtWyNmYWZhZmFdJz5BbGwgcG9rw6ltb25zPC9oMT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJQb2tlbW9uQXBpIiwiSG9tZSIsImRhdGEiLCJwb2tlbW9uTGlzdCIsImlzTG9hZGluZyIsInBva2Vtb25Mb2FkIiwiZ2V0UG9rZW1vblBhZ2UiLCJzdmciLCJjbGFzc05hbWUiLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsInBhdGgiLCJkIiwibWFpbiIsImgxIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});