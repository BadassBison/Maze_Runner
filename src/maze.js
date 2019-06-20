import Cell from './cell.js';
import Border from './border.js';

export default class maze {
    constructor() {
        this.rows = Math.floor(innerHeight/100);
        this.cols = Math.floor(innerWidth/100);
        this.border = new Border();
        this.cells = [];
        this.current = [0, 0];
        this.stack = [];
        this.buildCells();
        this.buildMaze();
    }

    show() {
        this.cells.forEach(row => {
            row.forEach(cell => cell.show());
        });
        this.border.show();
    }

    buildMaze() {
        let next = this.getNeighbor();
        while(this.stack.length > 0) {
            this.getNeighbor()
        }
    }

    getNeighbor() {
        let pos = this.current;
        let current = this.cells[pos[0]][pos[1]]
        current.visit();

        let neighbors = [];
        let top, right, bottom, left;
        if (pos[1]-1 >= 0) top = {
            "side": "top",
            "cell": this.cells[pos[0]][pos[1]-1],
            "pos": [pos[0], pos[1]-1]
        }
        if (pos[0]+1 < this.cells.length) right = {
            "side": "right",
            "cell": this.cells[pos[0]+1][pos[1]],
            "pos": [pos[0]+1, pos[1]]
        }
        if (pos[1]+1 < this.cells[0].length) bottom = {
            "side": "bottom",
            "cell": this.cells[pos[0]][pos[1]+1],
            "pos": [pos[0], pos[1]+1]
        }
        if (pos[0]-1 >= 0) left = {
            "side": "left",
            "cell": this.cells[pos[0]-1][pos[1]],
            "pos": [pos[0]-1, pos[1]]
        }

        if (top && !top.cell.visited) neighbors.push(top);
        if (right && !right.cell.visited) neighbors.push(right);
        if (bottom && !bottom.cell.visited) neighbors.push(bottom);
        if (left && !left.cell.visited) neighbors.push(left);

        // neighbors.forEach(neighb => neighb.cell.changeBg('yellow'))
        if (neighbors.length > 0) {
            let r = Math.floor(Math.random() * neighbors.length)
            this.stack.push(this.current);
            this.current = neighbors[r].pos;
            this.removeWall(current, neighbors[r]);
        } else {
            this.current = this.stack.pop();
        }
    }

    removeWall(current, neighbor) {
        switch(neighbor.side) {
            case "top":
                current.walls.shift();
                break;
            case "right":
                neighbor.cell.walls.pop();
                break;
            case "bottom":
                neighbor.cell.walls.shift();
                break;
            case "left":
                current.walls.pop();
                break;
        }
    }

    buildCells() {
        for (let i = 0; i < innerWidth - 100; i += 100) {
            let row = [];
            for (let j = 0; j < innerHeight - 100; j += 100) {
                row.push(new Cell(i, j))
            }
            this.cells.push(row);
        }
    }

}