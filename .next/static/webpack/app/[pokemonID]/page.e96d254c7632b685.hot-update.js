"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[pokemonID]/page",{

/***/ "(app-pages-browser)/./src/hooks/usePokemon.ts":
/*!*********************************!*\
  !*** ./src/hooks/usePokemon.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePokemon; }\n/* harmony export */ });\n/* harmony import */ var _network_pokemon_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/network/pokemon-api */ \"(app-pages-browser)/./src/network/pokemon-api.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n\n\n\nfunction usePokemon(name) {\n    const { data, isLoading } = swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, async ()=>{\n        try {\n            return await _network_pokemon_api__WEBPACK_IMPORTED_MODULE_0__.getPokemon(name);\n        } catch (error) {\n            var _error_response;\n            if (error instanceof axios__WEBPACK_IMPORTED_MODULE_2__.AxiosError && ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 404) {\n                return null;\n            } else {\n                throw error;\n            }\n        }\n    });\n    return {\n        pokemon: data,\n        pokemonLoading: isLoading\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VQb2tlbW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFDakI7QUFDTDtBQUVmLFNBQVNHLFdBQVdDLElBQVk7SUFDM0MsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHSiwyQ0FBYyxDQUFDRSxNQUFNO1FBQzdDLElBQUk7WUFDQSxPQUFPLE1BQU1KLDREQUFxQixDQUFDSTtRQUN2QyxFQUFFLE9BQU9LLE9BQU87Z0JBQ3VCQTtZQUFuQyxJQUFJQSxpQkFBaUJSLDZDQUFVQSxJQUFJUSxFQUFBQSxrQkFBQUEsTUFBTUMsUUFBUSxjQUFkRCxzQ0FBQUEsZ0JBQWdCRSxNQUFNLE1BQUssS0FBSztnQkFDL0QsT0FBTztZQUNYLE9BQU87Z0JBQ0gsTUFBTUY7WUFDVjtRQUNKO0lBQ0o7SUFFQSxPQUFPO1FBQ0hHLFNBQVNQO1FBQ1RRLGdCQUFnQlA7SUFDcEI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUG9rZW1vbi50cz8zMzhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBva2Vtb25BcGkgZnJvbSAnQC9uZXR3b3JrL3Bva2Vtb24tYXBpJztcclxuaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICogYXMgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQb2tlbW9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZVNXUi5kZWZhdWx0KG5hbWUsIGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUG9rZW1vbkFwaS5nZXRQb2tlbW9uKG5hbWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEF4aW9zRXJyb3IgJiYgZXJyb3IucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBva2Vtb246IGRhdGEsXHJcbiAgICAgICAgcG9rZW1vbkxvYWRpbmc6IGlzTG9hZGluZyxcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiUG9rZW1vbkFwaSIsIkF4aW9zRXJyb3IiLCJ1c2VTV1IiLCJ1c2VQb2tlbW9uIiwibmFtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJkZWZhdWx0IiwiZ2V0UG9rZW1vbiIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJwb2tlbW9uIiwicG9rZW1vbkxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/usePokemon.ts\n"));

/***/ })

});