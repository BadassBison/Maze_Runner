export default class CanvasEl {
    constructor(width, height) {
        this.canvasEl = document.querySelector("#gameCanvas");
        this.canvasEl.width = width;
        this.canvasEl.height = height;
        this.ctx = this.canvasEl.getContext("2d");
    }
}