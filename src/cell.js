import Wall from './wall.js';

export default class Cell {
    constructor(x, y) {
        this.pos = {"x": x, "y": y};
        this.width = 100;
        this.count = 0;
        this.walls = [
            new Wall(this.pos.x, this.pos.y, this.pos.x+this.width, this.pos.y, Math.floor(Math.random() * 100000)), 
            new Wall(this.pos.x, this.pos.y+this.width, this.pos.x, this.pos.y, Math.floor(Math.random() * 100000))
        ]
        this.visited = false;
    }

    show() {
        this.walls.forEach(wall => {
            let vert = wall.hitbox.vert;
            let wallX = wall.hitbox.x;
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
                    
                    // top wall
                    if (wall.p1.y < cY && wall.p2.y < cY) {
                        window.topBorder = wall.id;
                        window.character.bump(0, 3)
                    } else {
                        window.topBorder = false;
                    }

                    // right wall
                    if (wall.p1.x > cX + cW && wall.p2.x > cX + cW) {
                        window.rightBorder = wall.id;
                        window.character.bump(-3, 0)
                    } else {
                        window.rightBorder = false;
                    }

                    // bottom wall
                    if (wall.p1.y > cY + cH && wall.p2.y > cY + cH) {
                        window.bottomBorder = wall.id;
                        window.character.bump(0, -3)
                    } else {
                        window.bottomBorder = false;
                    }

                    // left wall
                    if (wall.p1.x < cX && wall.p2.x < cX) {
                        window.leftBorder = wall.id;
                        window.character.bump(3, 0)
                    } else {
                        window.leftBorder = false;
                    }

            } else {
                if (wall.id === window.topBorder) window.topBorder = false;
                if (wall.id === window.rightBorder) window.rightBorder = false;
                if (wall.id === window.bottomBorder) window.bottomBorder = false;
                if (wall.id === window.leftBorder) window.leftBorder = false;
            }
            
            wall.show();
        });
    }

    visit() {
        this.visited = true;
    }
}