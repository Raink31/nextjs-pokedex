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

/***/ "(app-pages-browser)/./src/network/pokemon-api.ts":
/*!************************************!*\
  !*** ./src/network/pokemon-api.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPokemon: function() { return /* binding */ getPokemon; },\n/* harmony export */   getPokemonPage: function() { return /* binding */ getPokemonPage; }\n/* harmony export */ });\n/* harmony import */ var _axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosInstance */ \"(app-pages-browser)/./src/network/axiosInstance.ts\");\n\nasync function getPokemon(name) {\n    // const delay = Math.random() * 2000;\n    // await new Promise(r => setTimeout(r, delay))\n    const response = await _axiosInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/pokemon/\" + name);\n    return response.data;\n}\nasync function getPokemonPage(page) {\n    const pageSize = 151;\n    const response = await _axiosInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/pokemon?limit=\".concat(pageSize, \"&offset=\").concat(pageSize * (page - 1)));\n    return response.data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9uZXR3b3JrL3Bva2Vtb24tYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNrQztBQUUzQixlQUFlQyxXQUFXQyxJQUFZO0lBQ3pDLHNDQUFzQztJQUN0QywrQ0FBK0M7SUFDL0MsTUFBTUMsV0FBVyxNQUFNSCxzREFBR0EsQ0FBQ0ksR0FBRyxDQUFVLGNBQWNGO0lBQ3RELE9BQU9DLFNBQVNFLElBQUk7QUFDeEI7QUFFTyxlQUFlQyxlQUFlQyxJQUFZO0lBQzdDLE1BQU1DLFdBQVc7SUFDakIsTUFBTUwsV0FBVyxNQUFNSCxzREFBR0EsQ0FBQ0ksR0FBRyxDQUFjLGtCQUFxQ0ksT0FBbkJBLFVBQVMsWUFBZ0MsT0FBdEJBLFdBQVlELENBQUFBLE9BQU87SUFDcEcsT0FBT0osU0FBU0UsSUFBSTtBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbmV0d29yay9wb2tlbW9uLWFwaS50cz83YmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBva2Vtb24sIFBva2Vtb25QYWdlIH0gZnJvbSBcIkAvbW9kZWxzL3Bva2Vtb25cIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi9heGlvc0luc3RhbmNlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9rZW1vbihuYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vIGNvbnN0IGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDIwMDA7XHJcbiAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgZGVsYXkpKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0PFBva2Vtb24+KFwiL3Bva2Vtb24vXCIgKyBuYW1lKVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb2tlbW9uUGFnZShwYWdlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHBhZ2VTaXplID0gMTUxO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0PFBva2Vtb25QYWdlPihgL3Bva2Vtb24/bGltaXQ9JHtwYWdlU2l6ZX0mb2Zmc2V0PSR7cGFnZVNpemUgKiAocGFnZSAtIDEpfWApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn0iXSwibmFtZXMiOlsiYXBpIiwiZ2V0UG9rZW1vbiIsIm5hbWUiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJnZXRQb2tlbW9uUGFnZSIsInBhZ2UiLCJwYWdlU2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/network/pokemon-api.ts\n"));

/***/ })

});