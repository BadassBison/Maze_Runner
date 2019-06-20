import CanvasEl from './canvas.js';
import Character from './character.js';
import Border from './border.js';
import Wall from './wall.js';
import Light from './light.js';
import {
        refresh,
        rando, 
        detectCollision
} from './utils.js'

// Canvas setup
let canvasEl = new CanvasEl(innerWidth, innerHeight);
let canvas = canvasEl.canvasEl;
window.canvas = canvas;
let ctx = canvasEl.ctx;
window.ctx = ctx;
ctx.lineCap = "round";
ctx.fillStyle = 'black';

// Game variables
const boundaries = [];
const character = new Character("guy", innerWidth-350, innerHeight/2.5);
// for (let i = 0; i < 1; i++){
//     boundaries.push(new Wall(rando("x"), rando("y"), rando("x"), rando("y")));
// }
let border = new Border();
let wall = new Wall(500, 100, 200, 200);
let light = new Light(character.midX, character.midY);

let mouseX;
let mouseY;

const draw = () => {
    refresh();
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    // let pt = ray.cast(wall);
    // ray.lookAt(mouseX, mouseY);
    // ray.updateSource(character.midX, character.midY);
    // ray.show();
    // detectCollision(character, wall, spriteCycle);
    light.show(wall, character);
    wall.show();
    border.show();
    character.show();
    window.requestAnimationFrame(draw);
}

function updateMousePos(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

window.addEventListener("keydown", e => character.changeDirection(e));
window.addEventListener("keyup", e => character.stopDirection(e));
window.addEventListener("mousemove", e => updateMousePos(e));

draw();