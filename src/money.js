export default class Money {
    constructor() {
        this.img = new Image();
        this.img.src = './assets/stack_money.png';
        this.x = Math.floor(Math.random() * (innerWidth/100 - 1)) * 100 + 30;
        this.y = Math.floor(Math.random() * (innerHeight/100 - 1)) * 100 + 30;
        this.width = 40;
        this.height = 40;
        this.hitbox = {
            x: this.x + 10, 
            y: this.y + 13,
            width: 20,
            height: 14
        }
        this.found = false;
    }

    show() {
        let cX = window.character.sprite.hitbox.x;
        let cY = window.character.sprite.hitbox.y;
        let cW = window.character.sprite.hitbox.width;
        let cH = window.character.sprite.hitbox.height;

        if (this.hitbox.x < cX + cW &&
            this.hitbox.x + this.hitbox.width > cX &&
            this.hitbox.y < cY + cH &&
            this.hitbox.y + this.hitbox.height > cY){
            if(!this.found) window.character.addCash();
            this.found = true;
        }
        
        if (!this.found) {
            window.ctx.drawImage(
                this.img, 
                this.x, 
                this.y, 
                this.width, 
                this.height 
            );
        }
    }
}