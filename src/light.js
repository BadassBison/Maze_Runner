import Ray from './ray.js';

export default class Light {
    constructor(x, y) {
        this.pos = {"x": x, "y": y}
        this.rays = [];
        for (let i = 0; i < 1; i++) {
            this.rays.push(new Ray(this.pos.x, this.pos.y));
        }
    }

    // look(wall, character) {
    //     for (let ray of this.rays) {
            
    //     }
    // }
    
    updateSource(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }
    
    show(wall, character) {
        for (let ray of this.rays) {
            const pt = ray.cast(wall)
            if(pt){
                console.log("hit")
            }
            ray.show();
            this.updateSource(character.midX, character.midY);
        }
    }
}