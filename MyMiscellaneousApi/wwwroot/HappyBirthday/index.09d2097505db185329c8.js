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

/***/ "./client/HappyBirthday/baloons.ts":
/*!*****************************************!*\
  !*** ./client/HappyBirthday/baloons.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Baloon = void 0;\r\nconst scripts_1 = __webpack_require__(/*! ../Utils/scripts */ \"./client/Utils/scripts.ts\");\r\nconst KAPPA = (4 * (Math.sqrt(2) - 1)) / 3;\r\nconst WIDTH_FACTOR = 0.0333;\r\nconst HEIGHT_FACTOR = 0.4;\r\nconst TIE_WIDTH_FACTOR = 0.12;\r\nconst TIE_HEIGHT_FACTOR = 0.1;\r\nconst TIE_CURVE_FACTOR = 0.13;\r\nconst GRADIENT_FACTOR = 0.3;\r\nconst GRADIENT_CIRCLE_RADIUS = 3;\r\nclass Baloon {\r\n    constructor(context, centerX, centerY, radius, color) {\r\n        this.gfxContext = context;\r\n        this.centerX = centerX;\r\n        this.centerY = centerY;\r\n        this.xV = 0;\r\n        this.yV = radius * (-0.05);\r\n        this.radius = radius;\r\n        this.baseColor = color;\r\n        this.darkColor = (0, scripts_1.getRandomColor)();\r\n        this.lightColor = (0, scripts_1.getRandomColor)();\r\n    }\r\n    isVisible() {\r\n        const heightDiff = this.radius * HEIGHT_FACTOR;\r\n        const balloonBottomY = this.centerY + this.radius + heightDiff;\r\n        return balloonBottomY >= 0;\r\n    }\r\n    updatePosition() {\r\n        this.centerX = this.centerX + this.xV;\r\n        this.centerY = this.centerY + this.yV;\r\n    }\r\n    draw() {\r\n        this.updatePosition();\r\n        const gfxContext = this.gfxContext;\r\n        const radius = this.radius;\r\n        const centerX = this.centerX;\r\n        const centerY = this.centerY;\r\n        const handleLength = KAPPA * radius;\r\n        const widthDiff = radius * WIDTH_FACTOR;\r\n        const heightDiff = radius * HEIGHT_FACTOR;\r\n        const balloonBottomY = centerY + radius + heightDiff;\r\n        // Begin balloon path\r\n        gfxContext.beginPath();\r\n        // Top Left Curve\r\n        const topLeftCurveStartX = centerX - radius;\r\n        const topLeftCurveStartY = centerY;\r\n        const topLeftCurveEndX = centerX;\r\n        const topLeftCurveEndY = centerY - radius;\r\n        gfxContext.moveTo(topLeftCurveStartX, topLeftCurveStartY);\r\n        gfxContext.bezierCurveTo(topLeftCurveStartX, topLeftCurveStartY - handleLength - widthDiff, topLeftCurveEndX - handleLength, topLeftCurveEndY, topLeftCurveEndX, topLeftCurveEndY);\r\n        // Top Right Curve\r\n        const topRightCurveStartX = centerX;\r\n        const topRightCurveStartY = centerY - radius;\r\n        const topRightCurveEndX = centerX + radius;\r\n        const topRightCurveEndY = centerY;\r\n        gfxContext.bezierCurveTo(topRightCurveStartX + handleLength + widthDiff, topRightCurveStartY, topRightCurveEndX, topRightCurveEndY - handleLength, topRightCurveEndX, topRightCurveEndY);\r\n        // Bottom Right Curve\r\n        const bottomRightCurveStartX = centerX + radius;\r\n        const bottomRightCurveStartY = centerY;\r\n        const bottomRightCurveEndX = centerX;\r\n        const bottomRightCurveEndY = balloonBottomY;\r\n        gfxContext.bezierCurveTo(bottomRightCurveStartX, bottomRightCurveStartY + handleLength, bottomRightCurveEndX + handleLength, bottomRightCurveEndY, bottomRightCurveEndX, bottomRightCurveEndY);\r\n        // Bottom Left Curve\r\n        const bottomLeftCurveStartX = centerX;\r\n        const bottomLeftCurveStartY = balloonBottomY;\r\n        const bottomLeftCurveEndX = centerX - radius;\r\n        const bottomLeftCurveEndY = centerY;\r\n        gfxContext.bezierCurveTo(bottomLeftCurveStartX - handleLength, bottomLeftCurveStartY, bottomLeftCurveEndX, bottomLeftCurveEndY + handleLength, bottomLeftCurveEndX, bottomLeftCurveEndY);\r\n        // Create balloon gradient\r\n        const gradientOffset = radius / 3;\r\n        const balloonGradient = gfxContext.createRadialGradient(centerX + gradientOffset, centerY - gradientOffset, GRADIENT_CIRCLE_RADIUS, centerX, centerY, radius + heightDiff);\r\n        balloonGradient.addColorStop(0, this.lightColor);\r\n        balloonGradient.addColorStop(0.7, this.darkColor);\r\n        gfxContext.fillStyle = balloonGradient;\r\n        gfxContext.fill();\r\n        // End balloon path\r\n        // Create balloon tie\r\n        const halfTieWidth = (radius * TIE_WIDTH_FACTOR) / 2;\r\n        const tieHeight = radius * TIE_HEIGHT_FACTOR;\r\n        const tieCurveHeight = radius * TIE_CURVE_FACTOR;\r\n        gfxContext.beginPath();\r\n        gfxContext.moveTo(centerX - 1, balloonBottomY);\r\n        gfxContext.lineTo(centerX - halfTieWidth, balloonBottomY + tieHeight);\r\n        gfxContext.quadraticCurveTo(centerX, balloonBottomY + tieCurveHeight, centerX + halfTieWidth, balloonBottomY + tieHeight);\r\n        gfxContext.lineTo(centerX + 1, balloonBottomY);\r\n        gfxContext.fill();\r\n    }\r\n}\r\nexports.Baloon = Baloon;\r\n\n\n//# sourceURL=webpack://mymiscellaneousapi/./client/HappyBirthday/baloons.ts?");

/***/ }),

/***/ "./client/HappyBirthday/index.ts":
/*!***************************************!*\
  !*** ./client/HappyBirthday/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst scripts_1 = __webpack_require__(/*! ../Utils/scripts */ \"./client/Utils/scripts.ts\");\r\nconst baloons_1 = __webpack_require__(/*! ./baloons */ \"./client/HappyBirthday/baloons.ts\");\r\nconst canvas = document.getElementById(\"happyCanvas\");\r\nconst context = canvas.getContext(\"2d\");\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\nconst words = [\r\n    \"Вітаю\",\r\n    \"з Днем\",\r\n    \"Народження!\",\r\n    `Бажаю Щастя, Здоров'я`,\r\n    \"Всього найкращого!\",\r\n];\r\nconst baloons = [];\r\nfor (let i = 0; i < 10; i++) {\r\n    baloons.push(generateRandomBaloon());\r\n}\r\nfunction generateRandomBaloon() {\r\n    const baloonColor = (0, scripts_1.getRandomColor)();\r\n    const baloonRadius = (0, scripts_1.getRandomInt)(5, 100);\r\n    const x = (0, scripts_1.getRandomInt)(0, canvas.width);\r\n    const y = canvas.height + baloonRadius;\r\n    return new baloons_1.Baloon(context, x, y, baloonRadius, baloonColor);\r\n}\r\nfunction update() {\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n    for (let index = 0; index < baloons.length; index++) {\r\n        let baloon = baloons[index];\r\n        if (!baloon.isVisible()) {\r\n            baloons.splice(index, 1);\r\n        }\r\n        baloon.draw();\r\n    }\r\n}\r\nfunction animate() {\r\n    requestAnimationFrame(animate);\r\n    update();\r\n}\r\nanimate();\r\nlet clicksCount = 0;\r\ndocument.addEventListener(\"click\", () => {\r\n    clicksCount++;\r\n    const baloon = generateRandomBaloon();\r\n    baloons.push(baloon);\r\n    if (clicksCount % 10 === 0) {\r\n        for (let i = 0; i < clicksCount; i++) {\r\n            const baloon = generateRandomBaloon();\r\n            baloons.push(baloon);\r\n        }\r\n    }\r\n});\r\n// const drawGreeting = function () {\r\n//   const baloonCoords = getRandomCoordinate(canvas);\r\n//   const baloonColor = getRandomColor();\r\n//   const baloonRadius = getRandomInt(5, 100);\r\n//   const baloon = new Baloon(context, baloonCoords.x, baloonCoords.y, baloonRadius, baloonColor);\r\n//   baloon.draw();\r\n//   const greetCoords = getRandomCoordinate(canvas);\r\n//   const greeting = getRandomArrayElement(words);\r\n//   context.fillText(greeting, greetCoords.x, greetCoords.y);\r\n//   interval -= 10;\r\n//   setTimeout(drawGreeting, interval);\r\n// };\r\n// setTimeout(drawGreeting, interval);\r\n\n\n//# sourceURL=webpack://mymiscellaneousapi/./client/HappyBirthday/index.ts?");

/***/ }),

/***/ "./client/Utils/scripts.ts":
/*!*********************************!*\
  !*** ./client/Utils/scripts.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getRandomColor = exports.getRandomArrayElement = exports.getRandomInt = exports.getRandomCoordinate = void 0;\r\nfunction getRandomCoordinate(canvas) {\r\n    const x = getRandomInt(0, canvas.width);\r\n    const y = getRandomInt(0, canvas.height);\r\n    return { x, y };\r\n}\r\nexports.getRandomCoordinate = getRandomCoordinate;\r\nfunction getRandomInt(min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n}\r\nexports.getRandomInt = getRandomInt;\r\nfunction getRandomArrayElement(arr) {\r\n    const index = getRandomInt(0, arr.length);\r\n    return arr[index];\r\n}\r\nexports.getRandomArrayElement = getRandomArrayElement;\r\nfunction getRandomColor() {\r\n    const r = getRandomInt(0, 255);\r\n    const g = getRandomInt(0, 255);\r\n    const b = getRandomInt(0, 255);\r\n    return `rgb(${r}, ${g}, ${b})`;\r\n}\r\nexports.getRandomColor = getRandomColor;\r\n\n\n//# sourceURL=webpack://mymiscellaneousapi/./client/Utils/scripts.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/HappyBirthday/index.ts");
/******/ 	
/******/ })()
;