import Wall from './wall.js';

export default class Cell {
    constructor(x, y) {
        this.pos = {"x": x, "y": y};
        this.width = 100;
        this.walls = [
            new Wall(this.pos.x, this.pos.y, this.pos.x+this.width, this.pos.y), 
            new Wall(this.pos.x, this.pos.y+this.width, this.pos.x, this.pos.y)
        ]
        this.visited = false;
    }

    show() {
        this.walls.forEach(wall => {
            // let wallX = wall.hitbox.pl1.x;
            // let width = wall.hitbox.
            
            // if (wall.hitbox.x < moneyBox.x + moneyBox.width &&
            //     wall.hitbox.x + 20 > moneyBox.x &&
            //     hitBox.y < moneyBox.y + moneyBox.height &&
            //     hitBox.y + hitBox.height > moneyBox.y) {
            //     noOverlap = false
            // }
            
            wall.show();
        });
        // console.log(this.walls);
    }

    visit() {
        this.visited = true;
    }
}