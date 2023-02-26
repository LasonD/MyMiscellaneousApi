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

/***/ "./client/Games/Platformer/index.ts":
/*!******************************************!*\
  !*** ./client/Games/Platformer/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst scripts_1 = __webpack_require__(/*! ../../Utils/scripts */ \"./client/Utils/scripts.ts\");\r\nconst canvas = document.getElementById(\"playGround\");\r\nconst context = canvas.getContext(\"2d\");\r\nconst gravity = 0.5;\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\nclass Entity {\r\n    constructor(canvas, x, y, width, height, color) {\r\n        this.canvas = canvas;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.color = color;\r\n        this.xV = 0;\r\n        this.yV = 0;\r\n        this.context = canvas.getContext(\"2d\");\r\n    }\r\n    draw() {\r\n        this.context.fillStyle = this.color;\r\n        this.context.fillRect(this.x, this.y, this.width, this.height);\r\n    }\r\n    floorXVelocity() {\r\n        if (this.xV !== 0) {\r\n            const slowDown = this.xV > 0 ? -0.5 : 0.5;\r\n            this.xV += slowDown;\r\n            if (Math.abs(this.xV) < Math.abs(slowDown)) {\r\n                this.xV = 0;\r\n            }\r\n        }\r\n    }\r\n}\r\nclass Player extends Entity {\r\n    constructor(canvas) {\r\n        super(canvas, 500, 30, 30, 30, \"red\");\r\n        this.keys = {\r\n            left: {\r\n                pressed: false,\r\n            },\r\n            right: {\r\n                pressed: false,\r\n            },\r\n        };\r\n        this.isCollided = false;\r\n        this.platforms = [];\r\n        window.addEventListener(\"keydown\", (e) => {\r\n            switch (e.key) {\r\n                case \"d\":\r\n                    this.keys.right.pressed = true;\r\n                    break;\r\n                case \"a\":\r\n                    this.keys.left.pressed = true;\r\n                    break;\r\n                case \"w\":\r\n                    if (this.yV === 0 || this.isCollided) {\r\n                        this.yV -= 15;\r\n                    }\r\n                    break;\r\n                case \"s\":\r\n                    this.yV += 1;\r\n                    break;\r\n            }\r\n        });\r\n        window.addEventListener(\"keyup\", (e) => {\r\n            switch (e.key) {\r\n                case \"d\":\r\n                    this.keys.right.pressed = false;\r\n                    break;\r\n                case \"a\":\r\n                    this.keys.left.pressed = false;\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n    checkCollision() {\r\n        this.platforms.forEach((platform) => {\r\n            const playerBottomY = this.y + this.height;\r\n            const playerEndX = this.x + this.width;\r\n            const platformEndX = platform.x + platform.width;\r\n            const hasXCollision = playerEndX >= platform.x && this.x <= platformEndX;\r\n            const hasYCollision = playerBottomY <= platform.y && playerBottomY + this.yV >= platform.y;\r\n            if (hasYCollision && hasXCollision) {\r\n                this.yV = 0;\r\n            }\r\n        });\r\n        this.isCollided = !this.yV;\r\n    }\r\n    update() {\r\n        this.updatePlatforms();\r\n        this.checkCollision();\r\n        this.x += this.xV;\r\n        this.y += this.yV;\r\n        this.updateYVelocity();\r\n        this.updateXVelocity();\r\n        this.draw();\r\n    }\r\n    updatePlatforms() {\r\n        this.platforms.forEach((p) => p.update());\r\n    }\r\n    updateYVelocity() {\r\n        if (this.y + this.height + this.yV <= this.canvas.height) {\r\n            this.yV += gravity;\r\n        }\r\n        else {\r\n            this.yV = 0;\r\n        }\r\n    }\r\n    updateXVelocity() {\r\n        const isLeftBorderHit = this.x <= 200;\r\n        const isRightBorderHit = this.x + this.width >= window.innerWidth - 200;\r\n        if ((this.keys.left.pressed && isLeftBorderHit) ||\r\n            (this.keys.right.pressed && isRightBorderHit)) {\r\n            this.updatePlatformsVelocity(-this.xV);\r\n            this.xV = 0;\r\n            return;\r\n        }\r\n        let change = 0;\r\n        if (this.keys.left.pressed) {\r\n            change = -1;\r\n        }\r\n        if (this.keys.right.pressed) {\r\n            change = 1;\r\n        }\r\n        if (this.platforms.some((p) => p.xV !== 0)) {\r\n            this.platforms.forEach((p) => (p.xV += -change));\r\n        }\r\n        else {\r\n            this.xV += change;\r\n        }\r\n        this.floorXVelocity();\r\n    }\r\n    updatePlatformsVelocity(x) {\r\n        this.platforms.forEach((platform) => (platform.xV += x));\r\n    }\r\n}\r\nclass Platform extends Entity {\r\n    constructor(player, canvas, x, y) {\r\n        super(canvas, x, y, (0, scripts_1.getRandomInt)(20, 500), 10, \"black\");\r\n        this.player = player;\r\n    }\r\n    draw() {\r\n        this.context.fillStyle = this.color;\r\n        this.context.fillRect(this.x, this.y, this.width, this.height);\r\n    }\r\n    update() {\r\n        this.x += this.xV;\r\n        this.y += this.yV;\r\n        this.updateXVelocity();\r\n        this.draw();\r\n    }\r\n    updateXVelocity() {\r\n        const isLeftBorderHit = this.player.x <= 200;\r\n        const isRightBorderHit = this.player.x + this.player.width >= window.innerWidth - 200;\r\n        if (this.player.keys.left.pressed && isLeftBorderHit) {\r\n            this.xV += 1;\r\n        }\r\n        if (this.player.keys.right.pressed && isRightBorderHit) {\r\n            this.xV -= 1;\r\n        }\r\n        this.floorXVelocity();\r\n    }\r\n}\r\nconst player = new Player(canvas);\r\nfor (let i = 0; i < 10000; i++) {\r\n    let randY = (0, scripts_1.getRandomInt)(0, 1200);\r\n    randY = randY - (randY % 50);\r\n    player.platforms.push(new Platform(player, canvas, (0, scripts_1.getRandomInt)(-100000, 100000), randY));\r\n}\r\nplayer.platforms.push(new Platform(player, canvas, 1200, 100));\r\nplayer.platforms.push(new Platform(player, canvas, 1000, 200));\r\nplayer.platforms.push(new Platform(player, canvas, 800, 300));\r\nplayer.platforms.push(new Platform(player, canvas, 500, 400));\r\nplayer.platforms.push(new Platform(player, canvas, 300, 500));\r\nsetInterval(showMessage, 3000);\r\nanimate();\r\nfunction animate() {\r\n    requestAnimationFrame(animate);\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n    player.update();\r\n}\r\nconst possibleNotifications = [\r\n    \"Так тримати, Богдане!\",\r\n    \"Побий світовий рекорд!\",\r\n    \"Ти вже близько!\",\r\n    \"Не підведи світову спільноту Богданів!\",\r\n    \"Не підведи червоний квадратик. Він на тебе розраховує!\",\r\n    \"Подумай про майбутнє червого квадратика!\",\r\n    \"Ми завтра прийдемо!\",\r\n    \"Світ на тебе розраховує\",\r\n    \"Тільки від тебе залежить доля червоного квадратика!\",\r\n    \"Покажи, що ти вищий за ці платформи!\",\r\n    \"Бодька - бос всіх павуків\",\r\n    \"Ех, Шарік (((\",\r\n    \"Будь готовий до будь-якої погоди. © Гугл Везер\",\r\n    \"Я хорні?\",\r\n];\r\nfunction showMessage() {\r\n    const notificationsBar = document.getElementById(\"notificationsBar\");\r\n    const currentNotification = possibleNotifications[(0, scripts_1.getRandomInt)(0, possibleNotifications.length)];\r\n    notificationsBar.innerText = currentNotification;\r\n}\r\n\n\n//# sourceURL=webpack://mymiscellaneousapi/./client/Games/Platformer/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/Games/Platformer/index.ts");
/******/ 	
/******/ })()
;