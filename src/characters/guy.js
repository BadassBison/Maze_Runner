export default class Guy {

    constructor() {
        this.img = new Image();
        this.img.src = './assets/guy.png';
        this.sheetWidth = 576;
        this.sheetHeight = 256;
        this.cols = 9;
        this.rows = 4;
        this.width = this.sheetWidth / this.cols;
        this.height = (this.sheetHeight / this.rows) + 1;
        this.hitbox = {
            x: 34,
            y: 40,
            width: 35,
            height: 44,
            radius: 15
        }
        this.health = 100;
        this.srcX = 0;
        this.srcY = 2 * this.height;
        this.currentFrame = 1;
    }

    updateSprite() {
        this.currentFrame = (++this.currentFrame % (this.cols-1)) + 1
        this.srcX = this.currentFrame * this.width;
    }

    updateHitbox(x, y) {
        this.hitbox.x = x + 28;
        this.hitbox.y = y + 42;
    }
}