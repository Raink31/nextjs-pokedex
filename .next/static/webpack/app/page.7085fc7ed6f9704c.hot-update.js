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

/***/ "(app-pages-browser)/./src/components/pokemonEntry.tsx":
/*!*****************************************!*\
  !*** ./src/components/pokemonEntry.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PokemonEntry; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_usePokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/usePokemon */ \"(app-pages-browser)/./src/hooks/usePokemon.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PokemonEntry(param) {\n    let { name } = param;\n    _s();\n    const { pokemon, pokemonLoading } = (0,_hooks_usePokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"\".concat(name));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\" + name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                pokemonLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"fill-white animate-spin\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        height: \"40\",\n                        viewBox: \"0 -960 960 960\",\n                        width: \"40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 165\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 41\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 36\n                }, this),\n                pokemon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: pokemon.sprites.other[\"official-artwork\"].front_default,\n                            width: 150,\n                            height: 150,\n                            alt: \"pokemon\" + pokemon.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[#fafafa]\",\n                            children: pokemon.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Xhiro\\\\Desktop\\\\Code\\\\Next js\\\\nextjs-pokedex\\\\src\\\\components\\\\pokemonEntry.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_s(PokemonEntry, \"re3kX4UEdf+zkmN0njClFvmV3PU=\", false, function() {\n    return [\n        _hooks_usePokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = PokemonEntry;\nvar _c;\n$RefreshReg$(_c, \"PokemonEntry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bva2Vtb25FbnRyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2Y7QUFDRTtBQUVoQixTQUFTRyxhQUFhLEtBQTBCO1FBQTFCLEVBQUVDLElBQUksRUFBb0IsR0FBMUI7O0lBQ3JDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUUsR0FBR04sNkRBQVVBLENBQUMsR0FBUSxPQUFMSTtJQUU5QyxxQkFDSSw4REFBQ0gsa0RBQUlBO1FBQUNNLE1BQU0sTUFBTUg7a0JBQ2QsNEVBQUNJOztnQkFDSUYsZ0NBQWtCLDhEQUFDRTs4QkFBSSw0RUFBQ0M7d0JBQUlDLFdBQVU7d0JBQTBCQyxPQUFNO3dCQUE2QkMsUUFBTzt3QkFBS0MsU0FBUTt3QkFBaUJDLE9BQU07a0NBQUssNEVBQUNDOzRCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7O2dCQUUzSlgseUJBQ0csOERBQUNHO29CQUFJRSxXQUFVOztzQ0FDWCw4REFBQ1IsbURBQUtBOzRCQUNGZSxLQUFLWixRQUFRYSxPQUFPLENBQUNDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQ0MsYUFBYTs0QkFDNUROLE9BQU87NEJBQ1BGLFFBQVE7NEJBQ1JTLEtBQUssWUFBWWhCLFFBQVFELElBQUk7Ozs7OztzQ0FFakMsOERBQUNrQjs0QkFBR1osV0FBVTtzQ0FDVEwsUUFBUUQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekM7R0F4QndCRDs7UUFDWUgseURBQVVBOzs7S0FEdEJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bva2Vtb25FbnRyeS50c3g/MGUzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlUG9rZW1vbiBmcm9tIFwiQC9ob29rcy91c2VQb2tlbW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uRW50cnkoeyBuYW1lIH06IHsgbmFtZTogc3RyaW5nIH0pIHtcclxuY29uc3QgeyBwb2tlbW9uLCBwb2tlbW9uTG9hZGluZyB9ID0gdXNlUG9rZW1vbihgJHtuYW1lfWApO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIiArIG5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb25Mb2FkaW5nICYmIDxkaXY+PHN2ZyBjbGFzc05hbWU9XCJmaWxsLXdoaXRlIGFuaW1hdGUtc3BpblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIHdpZHRoPVwiNDBcIj48cGF0aCBkPVwiTTQ4MC04MHEtODIgMC0xNTUtMzEuNXQtMTI3LjUtODZRMTQzLTI1MiAxMTEuNS0zMjVUODAtNDgwcTAtODMgMzEuNS0xNTUuNXQ4Ni0xMjdRMjUyLTgxNyAzMjUtODQ4LjVUNDgwLTg4MHExNyAwIDI4LjUgMTEuNVQ1MjAtODQwcTAgMTctMTEuNSAyOC41VDQ4MC04MDBxLTEzMyAwLTIyNi41IDkzLjVUMTYwLTQ4MHEwIDEzMyA5My41IDIyNi41VDQ4MC0xNjBxMTMzIDAgMjI2LjUtOTMuNVQ4MDAtNDgwcTAtMTcgMTEuNS0yOC41VDg0MC01MjBxMTcgMCAyOC41IDExLjVUODgwLTQ4MHEwIDgyLTMxLjUgMTU1dC04NiAxMjcuNXEtNTQuNSA1NC41LTEyNyA4NlQ0ODAtODBaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtwb2tlbW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bva2Vtb24uc3ByaXRlcy5vdGhlcltcIm9mZmljaWFsLWFydHdvcmtcIl0uZnJvbnRfZGVmYXVsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJwb2tlbW9uXCIgKyBwb2tlbW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVsjZmFmYWZhXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVBva2Vtb24iLCJMaW5rIiwiSW1hZ2UiLCJQb2tlbW9uRW50cnkiLCJuYW1lIiwicG9rZW1vbiIsInBva2Vtb25Mb2FkaW5nIiwiaHJlZiIsImRpdiIsInN2ZyIsImNsYXNzTmFtZSIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsIndpZHRoIiwicGF0aCIsImQiLCJzcmMiLCJzcHJpdGVzIiwib3RoZXIiLCJmcm9udF9kZWZhdWx0IiwiYWx0IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/pokemonEntry.tsx\n"));

/***/ })

});