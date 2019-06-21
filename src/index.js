import CanvasEl from './canvas.js';
import Character from './character.js';
import Maze from './maze.js';
import Light from './light.js';
import {
        refresh,
        rando, 
        detectCollision
} from './utils.js'

// Canvas setup
let width = Math.floor(innerWidth/100) * 100;
let height = Math.floor(innerHeight/100) * 100;
let canvasEl = new CanvasEl(width, height);
let canvas = canvasEl.canvasEl;
window.canvas = canvas;
let ctx = canvasEl.ctx;
window.ctx = ctx;
ctx.lineCap = "round";

// Game variables
const character = new Character("guy", 7, 2);
window.character = character;
let maze = new Maze();
window.atBorder = false;
let lightRadius = 2000;
// let light = new Light(character.midX, character.midY);
// let mouseX;
// let mouseY;

const draw = () => {
    refresh();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    maze.show();
    character.show();

    // Light area
    // ctx.beginPath();
    // ctx.arc(character.x + 43, character.y + 44, lightRadius, 0, 2 * Math.PI);
    // ctx.rect(innerWidth, 0, -innerWidth, 800);
    // ctx.fill();
    // if (lightRadius > 120) lightRadius -= 10;

    // let pt = ray.cast(wall);
    // ray.lookAt(mouseX, mouseY);
    // ray.updateSource(character.midX, character.midY);
    // ray.show();
    // detectCollision(character, wall, spriteCycle);
    // light.show(wall, character);
    window.requestAnimationFrame(draw);
}

function updateMousePos(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

window.addEventListener("keydown", e => character.changeDirection(e));
window.addEventListener("keyup", e => character.stopDirection(e));
// window.addEventListener("mousemove", e => updateMousePos(e));

draw();