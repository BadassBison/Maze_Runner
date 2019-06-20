import Guy from './characters/guy.js';

export default class Character {

    static sprites(sprite) {
        switch(sprite) {
            case "guy": 
                return new Guy;
        }
    }
    
    constructor( sprite, x, y ) {
        this.sprite = Character.sprites(sprite);
        this.x = x;
        this.y = y;
        this.midX = Math.floor(this.sprite.width/2 + x);
        this.midY = Math.floor(this.sprite.height/2 + y);
        this.defaultSpeed = 3;
        this.speedX = this.defaultSpeed;
        this.speedY = this.defaultSpeed;
        this.direction = "stand";
        this.movements = [];
        this.spriteCycle = 0;
        this.touching = 'none';
    }

    directionMove() {
        this.direction = "move";
    }

    directionStand() {
        this.direction = "stand";
    }

    show() {
        this.spriteCycle++;
    
        if (this.direction !== "stand") {
            if(this.spriteCycle % 8 === 0) {
                this.spriteCycle = 0;
                this.sprite.updateSprite(); 
            }
        } else {
            this.sprite.srcX = 0;
        }
    
        window.ctx.drawImage(
            this.sprite.img, 
            this.sprite.srcX, 
            this.sprite.srcY, 
            this.sprite.width, 
            this.sprite.height, 
            this.x, 
            this.y, 
            this.sprite.width * 1.4, 
            this.sprite.height * 1.4
        );
        this.moveCharacter();
    }

    changeDirection(keyVal) {
    
        switch(keyVal.key){
            case "ArrowUp":
            case "w":
                if(!(this.movements.find(move => move === "ArrowUp"))) this.movements.push("ArrowUp");
                this.direction = "up";
                break;
                
            case "ArrowLeft":
            case "a":
                if(!(this.movements.find(move => move === "ArrowLeft"))) this.movements.push("ArrowLeft");
                this.direction = "left";
                break;
        
            case "ArrowDown":
            case "s":
                if(!(this.movements.find(move => move === "ArrowDown"))) this.movements.push("ArrowDown");
                this.direction = "down";
                break;
    
            case "ArrowRight": 
            case "d":
                if(!(this.movements.find(move => move === "ArrowRight"))) this.movements.push("ArrowRight");
                this.direction = "right";
                break;
        }
    }

    stopDirection(keyVal) {
        switch(keyVal.key){
            case "ArrowUp":
            case "w":
                this.movements = this.movements.filter(el => el !== "ArrowUp")
                break;
                
            case "ArrowLeft":
            case "a":
                this.movements = this.movements.filter(el => el !== "ArrowLeft")
                break;
                
            case "ArrowDown":
            case "s":
                this.movements = this.movements.filter(el => el !== "ArrowDown")
                break;
                
            case "ArrowRight":
            case "d":
                this.movements = this.movements.filter(el => el !== "ArrowRight")
                break;
        }
    }

    moveCharacter() {
        this.updateMid();
    
        if (this.movements.length === 0) {
            this.direction = "stand";
            return null;
        }
    
        this.movements.forEach(movement => {
            switch(movement){
                case "ArrowDown":
                    this.y = (this.y < canvas.height-98) ? this.y + this.speedY : this.y;
                    this.sprite.srcY = 2 * this.sprite.height;
                    break;
            
                case "ArrowRight":
                    this.x = (this.x < canvas.width-80) ? this.x + this.speedX : this.x;
                    this.sprite.srcY = 3 * this.sprite.height;
                    break;
                
                case "ArrowUp":
                    this.y = (this.y > -4) ? this.y - this.speedY : this.y;
                    this.sprite.srcY = 0 * this.sprite.height;
                    break;
                
                case "ArrowLeft":
                    this.x = (this.x > -10) ? this.x - this.speedX : this.x;
                    this.sprite.srcY = 1 * this.sprite.height;
                    break;
            }
        })
    }

    updateMid() {
        switch(this.direction) {
            case 'up':
                this.midX = Math.floor(this.sprite.width/2 + this.x + 30);
                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);
                break;
            case 'right':
                this.midX = Math.floor(this.sprite.width/2 + this.x);
                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);
                break;
            case 'down':
                this.midX = Math.floor(this.sprite.width/2 + this.x);
                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);
                break;
            case 'left':
                this.midX = Math.floor(this.sprite.width/2 + this.x);
                this.midY = Math.floor(this.sprite.height/2 + this.y + 30);
                break;
        }
        
    }

    // bump(dx, dy){
    //     let val = setInterval(() => {
    //         this.x += dx;
    //         this.y += dy;
    //     }, 50);
    //     setTimeout(() => {
    //         clearInterval(val);
    //     }, 150);
    // }     
}