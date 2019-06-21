export default class Wall {
    constructor(x1, y1, x2, y2) {
        this.p1 = {"x": x1, "y": y1};
        this.p2 = {"x": x2, "y": y2};
        this.dy = (this.p2.y-this.p1.y);
        this.dx = (this.p2.x-this.p1.x);
        if (this.dx === 0) this.dx = 0.00001;
        this.slope = this.dy / this.dx;
        this.angle = this.angle(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
        this.radius = 9;
        this.hitbox;
        this.calculateHitbox();
    }

    angle(cx, cy, ex, ey) {
        let dy = ey - cy;
        let dx = ex - cx;
        let theta = Math.atan2(dy, dx); // range (-PI, PI]
        // theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
        //if (theta < 0) theta = 360 + theta; // range [0, 360)
        return theta;
    }

    calculateHitbox() {
        let dy = this.radius * Math.sin(this.angle + 1.57);
        let dx = this.radius * Math.cos(this.angle + 1.57);
        let p1Left = {"x": this.p1.x + dx, "y": this.p1.y + dy};
        let p1Right = {"x": this.p1.x - dx, "y": this.p1.y - dy};
        let p2Left = {"x": this.p2.x + dx, "y": this.p2.y + dy};
        let p2Right = {"x": this.p2.x - dx, "y": this.p2.y - dy};
        let vertical = this.p1.y === this.p2.y;
        let width = vertical ? 20 : 100;
        let height = vertical ? 100 : 20;
        this.hitbox = {
            "x": p1Left.x-20,
            "y": p1Left.y-20,
            "width": width,
            "height": height,
            "p1L": p1Left, 
            "p1R": p1Right, 
            "p2L": p2Left, 
            "p2R": p2Right, 
        };
    }

    show() {
        window.ctx.strokeStyle = window.gradient;
        window.ctx.lineWidth = 20;
        window.ctx.beginPath(); 
        window.ctx.moveTo(this.p1.x, this.p1.y);
        window.ctx.lineTo(this.p2.x, this.p2.y);
        window.ctx.stroke();

        // circle 1
        window.ctx.lineWidth = 2;
        window.ctx.strokeStyle = "yellow";
        window.ctx.beginPath();
        window.ctx.arc(this.p1.x, this.p1.y, 9, 0, 2 * Math.PI);
        window.ctx.stroke();

        //  circle 2
        window.ctx.beginPath();
        window.ctx.arc(this.p2.x, this.p2.y, 9, 0, 2 * Math.PI);
        window.ctx.stroke();

        // outer lines
        window.ctx.beginPath();
        window.ctx.moveTo(this.hitbox.p1L.x, this.hitbox.p1L.y);
        window.ctx.lineTo(this.hitbox.p2L.x, this.hitbox.p2L.y);
        window.ctx.stroke();

        window.ctx.beginPath();
        window.ctx.moveTo(this.hitbox.p1R.x, this.hitbox.p1R.y);
        window.ctx.lineTo(this.hitbox.p2R.x, this.hitbox.p2R.y);
        window.ctx.stroke();
    }
}