export default class Border {
    constructor() {
        this.tl = {"x": 0, "y" : 0};
        this.tr = {"x": innerWidth, "y" : 0};
        this.br = {"x": innerWidth, "y" : innerHeight};
        this.bl = {"x": 0, "y" : innerHeight};
        this.flex = [0.05, true];
    }

    show() {
        window.gradient = ctx.createLinearGradient(0, 0, innerWidth, innerHeight);
        window.gradient.addColorStop(0, "red");
        window.gradient.addColorStop(this.flex[0], "magenta");
        window.gradient.addColorStop(0.5, "blue");
        window.gradient.addColorStop(this.flex[0]+0.5, "magenta");
        window.gradient.addColorStop(1, "red");
        if(this.flex[1]) {
            if(this.flex[0] < 0.45) {
                this.flex[0] += 0.002;
            } else {
                this.flex[1] = false;
            }
        } else {
            if(this.flex[0] > 0.05) {
                this.flex[0] -= 0.002;
            } else {
                this.flex[1] = true;
            }
        }
        window.ctx.lineWidth = 2;
        window.ctx.strokeStyle = "yellow";
        window.ctx.strokeRect(10, 10, innerWidth - 20, innerHeight - 20)
        
        window.ctx.strokeStyle = window.gradient;
        window.ctx.lineWidth = 20;
        window.ctx.strokeRect(0, 0, innerWidth, innerHeight);
    }
}