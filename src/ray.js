export default class Ray {
    constructor(x, y) {
        this.pos = {"x": x, "y": y};
        this.dir = {"dx": 0, "dy": 1};
    }

    cast(wall) {
        const x1 = wall.p1.x;
        const y1 = wall.p1.y;
        const x2 = wall.p2.x;
        const y2 = wall.p2.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.dx;
        const y4 = this.pos.y + this.dir.dy;

        const den = ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
        if (den === 0) return;
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
            const pt = {};
            pt["x"] = x1 + t * (x2 - x1);
            pt["y"] = y1 + t * (y2 - y1);
            return pt;
        }
        return;
    }

    lookAt(x, y) {
        this.dir.dx = x - this.pos.x;
        this.dir.dy = y - this.pos.y;
    }

    show() {
        window.ctx.lineWidth = 1;
        window.ctx.strokeStyle = "#EBE775";
        window.ctx.beginPath(); 
        window.ctx.moveTo(this.pos.x, this.pos.y);
        window.ctx.lineTo(this.pos.x + this.dir.dx, this.pos.y + this.dir.dy);
        window.ctx.stroke();
    }
}