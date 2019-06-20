//-------------------------------------------------------------------------------------
// Refreshes the Canvas
export const refresh = () => {
    window.ctx.clearRect(0, 0, innerWidth, innerHeight);
}


//-------------------------------------------------------------------------------------
// Generates Random number for boundaries
export const rando = (x) => {
    switch(x) {
        case "x":
            return Math.floor(Math.random() * innerWidth);
        case "y":
            return Math.floor(Math.random() * innerHeight);
    }
}


//-------------------------------------------------------------------------------------
// Collision detection
export const detectCollision = (character, boundary, spriteCycle) => {

    // Main character touches a wall
    let dx, dy, dist;
    dx = Math.min(Math.abs(boundary.p1.x - character.x), Math.abs(boundary.p2.x - character.x));
    dy = Math.min(Math.abs(boundary.p1.y - character.y), Math.abs(boundary.p2.y - character.y));
    if (dy === 0) dy = 0.000001;
    dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < (character.sprite.hitbox.radius + boundary.radius)) {
        console.log("collision detected");
    }
    
    // Any Enemy touches any other enemy
    // let all = characters.concat(c);
    // for(let i = 0; i < all.length - 1; i++){
    //     for(let j = i+1; j < all.length; j++){
    //         let dx = all[i].x - all[j].x;
    //         let dy = all[i].y - all[j].y;
    //         if (dy === 0) dy += 0.000001;
    //         let dist = Math.sqrt(dx*dx + dy*dy);
                
    //         if (dist < (all[i].sprite.hitbox.radius + all[j].sprite.hitbox.radius)) {
    //             all[i].bump(dx/dist * 2, dy/dist * 2)
    //         }
    //     }
    // }
}