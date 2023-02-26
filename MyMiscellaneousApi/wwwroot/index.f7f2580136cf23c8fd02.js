/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/index.ts":
/*!*************************!*\
  !*** ./client/index.ts ***!
  \*************************/
/***/ (() => {

eval("\r\nhandleRedSquareBtn();\r\nfunction handleRedSquareBtn() {\r\n    const btnRedSquare = document.getElementById(\"btnRedSquare\");\r\n    const originalContent = btnRedSquare.innerText;\r\n    btnRedSquare.addEventListener(\"mouseover\", (e) => {\r\n        btnRedSquare.innerText = 'Тисни вже!';\r\n    });\r\n    btnRedSquare.addEventListener(\"mouseout\", (e) => {\r\n        btnRedSquare.innerText = originalContent;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://mymiscellaneousapi/./client/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/index.ts"]();
/******/ 	
/******/ })()
;