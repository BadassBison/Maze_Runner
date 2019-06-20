/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/border.js":
/*!***********************!*\
  !*** ./src/border.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Border; });\nclass Border {\n    constructor() {\n        this.tl = {\"x\": 0, \"y\" : 0};\n        this.tr = {\"x\": innerWidth, \"y\" : 0};\n        this.br = {\"x\": innerWidth, \"y\" : innerHeight};\n        this.bl = {\"x\": 0, \"y\" : innerHeight};\n        this.flex = [0.05, true];\n    }\n\n    show() {\n        window.gradient = ctx.createLinearGradient(0, 0, innerWidth, innerHeight);\n        window.gradient.addColorStop(0, \"red\");\n        window.gradient.addColorStop(this.flex[0], \"magenta\");\n        window.gradient.addColorStop(0.5, \"blue\");\n        window.gradient.addColorStop(this.flex[0]+0.5, \"magenta\");\n        window.gradient.addColorStop(1, \"red\");\n        if(this.flex[1]) {\n            if(this.flex[0] < 0.45) {\n                this.flex[0] += 0.002;\n            } else {\n                this.flex[1] = false;\n            }\n        } else {\n            if(this.flex[0] > 0.05) {\n                this.flex[0] -= 0.002;\n            } else {\n                this.flex[1] = true;\n            }\n        }\n        window.ctx.lineWidth = 2;\n        window.ctx.strokeStyle = \"yellow\";\n        window.ctx.strokeRect(10, 10, innerWidth - 20, innerHeight - 20)\n        \n        window.ctx.strokeStyle = window.gradient;\n        window.ctx.lineWidth = 20;\n        window.ctx.strokeRect(0, 0, innerWidth, innerHeight);\n    }\n}\n\n//# sourceURL=webpack:///./src/border.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasEl; });\nclass CanvasEl {\n    constructor(width, height) {\n        this.canvasEl = document.querySelector(\"#gameCanvas\");\n        this.canvasEl.width = width;\n        this.canvasEl.height = height;\n        this.ctx = this.canvasEl.getContext(\"2d\");\n    }\n}\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var _characters_guy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/guy.js */ \"./src/characters/guy.js\");\n\n\nclass Character {\n\n    static sprites(sprite) {\n        switch(sprite) {\n            case \"guy\": \n                return new _characters_guy_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        }\n    }\n    \n    constructor( sprite, x, y ) {\n        this.sprite = Character.sprites(sprite);\n        this.x = x;\n        this.y = y;\n        this.midX = Math.floor(this.sprite.width/2 + x);\n        this.midY = Math.floor(this.sprite.height/2 + y);\n        this.defaultSpeed = 3;\n        this.speedX = this.defaultSpeed;\n        this.speedY = this.defaultSpeed;\n        this.direction = \"stand\";\n        this.movements = [];\n        this.spriteCycle = 0;\n    }\n\n    directionMove() {\n        this.direction = \"move\";\n    }\n\n    directionStand() {\n        this.direction = \"stand\";\n    }\n\n    show() {\n        this.spriteCycle++;\n    \n        if (this.direction !== \"stand\") {\n            if(this.spriteCycle % 8 === 0) {\n                this.spriteCycle = 0;\n                this.sprite.updateSprite(); \n            }\n        } else {\n            this.sprite.srcX = 0;\n        }\n    \n        window.ctx.drawImage(\n            this.sprite.img, \n            this.sprite.srcX, \n            this.sprite.srcY, \n            this.sprite.width, \n            this.sprite.height, \n            this.x, \n            this.y, \n            this.sprite.width * 1.4, \n            this.sprite.height * 1.4\n        );\n        this.moveCharacter();\n    }\n\n    changeDirection(keyVal) {\n    \n        switch(keyVal.key){\n            case \"ArrowUp\":\n            case \"w\":\n                if(!(this.movements.find(move => move === \"ArrowUp\"))) this.movements.push(\"ArrowUp\");\n                this.direction = \"up\";\n                break;\n                \n            case \"ArrowLeft\":\n            case \"a\":\n                if(!(this.movements.find(move => move === \"ArrowLeft\"))) this.movements.push(\"ArrowLeft\");\n                this.direction = \"left\";\n                break;\n        \n            case \"ArrowDown\":\n            case \"s\":\n                if(!(this.movements.find(move => move === \"ArrowDown\"))) this.movements.push(\"ArrowDown\");\n                this.direction = \"down\";\n                break;\n    \n            case \"ArrowRight\": \n            case \"d\":\n                if(!(this.movements.find(move => move === \"ArrowRight\"))) this.movements.push(\"ArrowRight\");\n                this.direction = \"right\";\n                break;\n        }\n    }\n\n    stopDirection(keyVal) {\n        switch(keyVal.key){\n            case \"ArrowUp\":\n            case \"w\":\n                this.movements = this.movements.filter(el => el !== \"ArrowUp\")\n                break;\n                \n            case \"ArrowLeft\":\n            case \"a\":\n                this.movements = this.movements.filter(el => el !== \"ArrowLeft\")\n                break;\n                \n            case \"ArrowDown\":\n            case \"s\":\n                this.movements = this.movements.filter(el => el !== \"ArrowDown\")\n                break;\n                \n            case \"ArrowRight\":\n            case \"d\":\n                this.movements = this.movements.filter(el => el !== \"ArrowRight\")\n                break;\n        }\n    }\n\n    moveCharacter() {\n        this.updateMid();\n    \n        if (this.movements.length === 0) {\n            this.direction = \"stand\";\n            return null;\n        }\n    \n        this.movements.forEach(movement => {\n            switch(movement){\n                case \"ArrowDown\":\n                    this.y = (this.y < canvas.height-95) ? this.y + this.speedY : this.y;\n                    this.sprite.srcY = 2 * this.sprite.height;\n                    break;\n            \n                case \"ArrowRight\":\n                    this.x = (this.x < canvas.width-77) ? this.x + this.speedX : this.x;\n                    this.sprite.srcY = 3 * this.sprite.height;\n                    break;\n                \n                case \"ArrowUp\":\n                    this.y = (this.y > -5) ? this.y - this.speedY : this.y;\n                    this.sprite.srcY = 0 * this.sprite.height;\n                    break;\n                \n                case \"ArrowLeft\":\n                    this.x = (this.x > -12) ? this.x - this.speedX : this.x;\n                    this.sprite.srcY = 1 * this.sprite.height;\n                    break;\n            }\n        })\n    }\n\n    updateMid() {\n        switch(this.direction) {\n            case 'up':\n                this.midX = Math.floor(this.sprite.width/2 + this.x + 30);\n                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);\n                break;\n            case 'right':\n                this.midX = Math.floor(this.sprite.width/2 + this.x);\n                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);\n                break;\n            case 'down':\n                this.midX = Math.floor(this.sprite.width/2 + this.x);\n                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);\n                break;\n            case 'left':\n                this.midX = Math.floor(this.sprite.width/2 + this.x);\n                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);\n                break;\n        }\n        \n    }\n\n    // bump(dx, dy){\n    //     let val = setInterval(() => {\n    //         this.x += dx;\n    //         this.y += dy;\n    //     }, 50);\n    //     setTimeout(() => {\n    //         clearInterval(val);\n    //     }, 150);\n    // }     \n}\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/characters/guy.js":
/*!*******************************!*\
  !*** ./src/characters/guy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Guy; });\nclass Guy {\n\n    constructor() {\n        this.img = new Image();\n        this.img.src = './assets/guy.png';\n        this.sheetWidth = 576;\n        this.sheetHeight = 256;\n        this.cols = 9;\n        this.rows = 4;\n        this.width = this.sheetWidth / this.cols;\n        this.height = (this.sheetHeight / this.rows) + 1;\n        this.hitbox = {\n            x: 44.5,\n            y: 75,\n            width: 27,\n            height: 24,\n            radius: 15\n        }\n        this.health = 100;\n        this.srcX = 0;\n        this.srcY = 2 * this.height;\n        this.currentFrame = 1;\n    }\n\n    updateSprite() {\n        this.currentFrame = (++this.currentFrame % (this.cols-1)) + 1\n        this.srcX = this.currentFrame * this.width;\n    }\n\n    hit() {\n        if (this.health > 0) this.health -= 2;\n        if (this.health < 2) this.health = 0;\n    }\n\n    heal() {\n        if (this.health > 0 && this.health < 100) this.health += 0.03;\n    }\n\n    fullHealth() {\n        this.health = 100;\n    }\n}\n\n//# sourceURL=webpack:///./src/characters/guy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.js */ \"./src/character.js\");\n/* harmony import */ var _border_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./border.js */ \"./src/border.js\");\n/* harmony import */ var _wall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wall.js */ \"./src/wall.js\");\n/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light.js */ \"./src/light.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\n\n\n\n\n// Canvas setup\nlet canvasEl = new _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](innerWidth, innerHeight);\nlet canvas = canvasEl.canvasEl;\nwindow.canvas = canvas;\nlet ctx = canvasEl.ctx;\nwindow.ctx = ctx;\nctx.lineCap = \"round\";\nctx.fillStyle = 'black';\n\n// Game variables\nconst boundaries = [];\nconst character = new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"guy\", innerWidth-350, innerHeight/2.5);\n// for (let i = 0; i < 1; i++){\n//     boundaries.push(new Wall(rando(\"x\"), rando(\"y\"), rando(\"x\"), rando(\"y\")));\n// }\nlet border = new _border_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nlet wall = new _wall_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](500, 100, 200, 200);\nlet light = new _light_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](character.midX, character.midY);\n\nlet mouseX;\nlet mouseY;\n\nconst draw = () => {\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[\"refresh\"])();\n    ctx.fillRect(0, 0, innerWidth, innerHeight);\n    // let pt = ray.cast(wall);\n    // ray.lookAt(mouseX, mouseY);\n    // ray.updateSource(character.midX, character.midY);\n    // ray.show();\n    // detectCollision(character, wall, spriteCycle);\n    light.show(wall, character);\n    wall.show();\n    border.show();\n    character.show();\n    window.requestAnimationFrame(draw);\n}\n\nfunction updateMousePos(e) {\n    mouseX = e.clientX;\n    mouseY = e.clientY;\n}\n\nwindow.addEventListener(\"keydown\", e => character.changeDirection(e));\nwindow.addEventListener(\"keyup\", e => character.stopDirection(e));\nwindow.addEventListener(\"mousemove\", e => updateMousePos(e));\n\ndraw();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Light; });\n/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ray.js */ \"./src/ray.js\");\n\n\nclass Light {\n    constructor(x, y) {\n        this.pos = {\"x\": x, \"y\": y}\n        this.rays = [];\n        for (let i = 0; i < 1; i++) {\n            this.rays.push(new _ray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.pos.x, this.pos.y));\n        }\n    }\n\n    // look(wall, character) {\n    //     for (let ray of this.rays) {\n            \n    //     }\n    // }\n    \n    updateSource(x, y) {\n        this.pos.x = x;\n        this.pos.y = y;\n    }\n    \n    show(wall, character) {\n        for (let ray of this.rays) {\n            const pt = ray.cast(wall)\n            if(pt){\n                console.log(\"hit\")\n            }\n            ray.show();\n            this.updateSource(character.midX, character.midY);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/light.js?");

/***/ }),

/***/ "./src/ray.js":
/*!********************!*\
  !*** ./src/ray.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ray; });\nclass Ray {\n    constructor(x, y) {\n        this.pos = {\"x\": x, \"y\": y};\n        this.dir = {\"dx\": 0, \"dy\": 1};\n    }\n\n    cast(wall) {\n        const x1 = wall.p1.x;\n        const y1 = wall.p1.y;\n        const x2 = wall.p2.x;\n        const y2 = wall.p2.y;\n\n        const x3 = this.pos.x;\n        const y3 = this.pos.y;\n        const x4 = this.pos.x + this.dir.dx;\n        const y4 = this.pos.y + this.dir.dy;\n\n        const den = ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));\n        if (den === 0) return;\n        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;\n        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;\n        if (t > 0 && t < 1 && u > 0) {\n            const pt = {};\n            pt[\"x\"] = x1 + t * (x2 - x1);\n            pt[\"y\"] = y1 + t * (y2 - y1);\n            return pt;\n        }\n        return;\n    }\n\n    lookAt(x, y) {\n        this.dir.dx = x - this.pos.x;\n        this.dir.dy = y - this.pos.y;\n    }\n\n    show() {\n        window.ctx.lineWidth = 1;\n        window.ctx.strokeStyle = \"#EBE775\";\n        window.ctx.beginPath(); \n        window.ctx.moveTo(this.pos.x, this.pos.y);\n        window.ctx.lineTo(this.pos.x + this.dir.dx, this.pos.y + this.dir.dy);\n        window.ctx.stroke();\n    }\n}\n\n//# sourceURL=webpack:///./src/ray.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: refresh, rando, detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refresh\", function() { return refresh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rando\", function() { return rando; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\n//-------------------------------------------------------------------------------------\n// Refreshes the Canvas\nconst refresh = () => {\n    window.ctx.clearRect(0, 0, innerWidth, innerHeight);\n}\n\n\n//-------------------------------------------------------------------------------------\n// Generates Random number for boundaries\nconst rando = (x) => {\n    switch(x) {\n        case \"x\":\n            return Math.floor(Math.random() * innerWidth);\n        case \"y\":\n            return Math.floor(Math.random() * innerHeight);\n    }\n}\n\n\n//-------------------------------------------------------------------------------------\n// Collision detection\nconst detectCollision = (character, boundary, spriteCycle) => {\n\n    // Main character touches a wall\n    let dx, dy, dist;\n    dx = Math.min(Math.abs(boundary.p1.x - character.x), Math.abs(boundary.p2.x - character.x));\n    dy = Math.min(Math.abs(boundary.p1.y - character.y), Math.abs(boundary.p2.y - character.y));\n    if (dy === 0) dy = 0.000001;\n    dist = Math.sqrt(dx*dx + dy*dy);\n    if (dist < (character.sprite.hitbox.radius + boundary.radius)) {\n        console.log(\"collision detected\");\n    }\n    \n    // Any Enemy touches any other enemy\n    // let all = characters.concat(c);\n    // for(let i = 0; i < all.length - 1; i++){\n    //     for(let j = i+1; j < all.length; j++){\n    //         let dx = all[i].x - all[j].x;\n    //         let dy = all[i].y - all[j].y;\n    //         if (dy === 0) dy += 0.000001;\n    //         let dist = Math.sqrt(dx*dx + dy*dy);\n                \n    //         if (dist < (all[i].sprite.hitbox.radius + all[j].sprite.hitbox.radius)) {\n    //             all[i].bump(dx/dist * 2, dy/dist * 2)\n    //         }\n    //     }\n    // }\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./src/wall.js":
/*!*********************!*\
  !*** ./src/wall.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wall; });\nclass Wall {\n    constructor(x1, y1, x2, y2) {\n        this.p1 = {\"x\": x1, \"y\": y1};\n        this.p2 = {\"x\": x2, \"y\": y2};\n        this.dy = (this.p2.y-this.p1.y);\n        this.dx = (this.p2.x-this.p1.x);\n        if (this.dx === 0) this.dx = 0.00001;\n        this.slope = this.dy / this.dx;\n        this.angle = this.angle(this.p1.x, this.p1.y, this.p2.x, this.p2.y)\n        this.radius = 9;\n        this.hitbox;\n        this.calculateHitbox();\n    }\n\n    angle(cx, cy, ex, ey) {\n        let dy = ey - cy;\n        let dx = ex - cx;\n        let theta = Math.atan2(dy, dx); // range (-PI, PI]\n        // theta *= 180 / Math.PI; // rads to degs, range (-180, 180]\n        //if (theta < 0) theta = 360 + theta; // range [0, 360)\n        return theta;\n    }\n\n    calculateHitbox() {\n        let dy = this.radius * Math.sin(this.angle + 1.57);\n        let dx = this.radius * Math.cos(this.angle + 1.57);\n        let p1Left = {\"x\": this.p1.x + dx, \"y\": this.p1.y + dy};\n        let p1Right = {\"x\": this.p1.x - dx, \"y\": this.p1.y - dy};\n        let p2Left = {\"x\": this.p2.x + dx, \"y\": this.p2.y + dy};\n        let p2Right = {\"x\": this.p2.x - dx, \"y\": this.p2.y - dy};\n        this.hitbox = {\"p1L\": p1Left, \"p1R\": p1Right, \"p2L\": p2Left, \"p2R\": p2Right};\n    }\n\n    show() {\n        window.ctx.strokeStyle = window.gradient;\n        window.ctx.lineWidth = 20;\n        window.ctx.beginPath(); \n        window.ctx.moveTo(this.p1.x, this.p1.y);\n        window.ctx.lineTo(this.p2.x, this.p2.y);\n        window.ctx.stroke();\n\n        // circle 1\n        window.ctx.lineWidth = 2;\n        window.ctx.strokeStyle = \"yellow\";\n        window.ctx.beginPath();\n        window.ctx.arc(this.p1.x, this.p1.y, 9, 0, 2 * Math.PI);\n        window.ctx.stroke();\n\n        //  circle 2\n        window.ctx.beginPath();\n        window.ctx.arc(this.p2.x, this.p2.y, 9, 0, 2 * Math.PI);\n        window.ctx.stroke();\n\n        // outer lines\n        window.ctx.beginPath();\n        window.ctx.moveTo(this.hitbox.p1L.x, this.hitbox.p1L.y);\n        window.ctx.lineTo(this.hitbox.p2L.x, this.hitbox.p2L.y);\n        window.ctx.stroke();\n\n        window.ctx.beginPath();\n        window.ctx.moveTo(this.hitbox.p1R.x, this.hitbox.p1R.y);\n        window.ctx.lineTo(this.hitbox.p2R.x, this.hitbox.p2R.y);\n        window.ctx.stroke();\n\n    }\n\n}\n\n//# sourceURL=webpack:///./src/wall.js?");

/***/ })

/******/ });