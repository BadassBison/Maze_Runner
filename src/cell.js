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
            let wallX = wall.hitbox.x;
            window.wallX = wallX;
            let wallY = wall.hitbox.y;
            let wallW = wall.hitbox.width;
            let wallH = wall.hitbox.height;
            let cX = window.character.sprite.hitbox.x;
            let cY = window.character.sprite.hitbox.y;
            let cW = window.character.sprite.hitbox.width;
            let cH = window.character.sprite.hitbox.height;
            
            if (wallX < cX + cW &&
                wallX + wallW > cX &&
                wallY < cY + cH &&
                wallY + wallH > cY) {
                window.atBorder = true
            }
            
            wall.show();
        });
        // console.log(this.walls);
    }

    visit() {
        this.visited = true;
    }
}