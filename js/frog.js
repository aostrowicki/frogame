import { gameWidth, gameHeight, ctx3, gridSize } from './setup.js'


export default class Frog {
    constructor() {
        this.width = gridSize / 1.5;
        this.height = gridSize / 1.5;
        this.x = gameWidth / 2 - this.width / 2;
        this.y = gameHeight - gridSize + (gridSize - this.height) / 2;
    }

    update(x, y) {
        (this.x + x > 0 && this.x + x + this.width / 2 < gameWidth) ? this.x += x : '';
        (this.y + y >= 0 && this.y + y + this.height / 2 < gameHeight) ? this.y += y : '';
    }

    draw() {
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }

    jump(key) {
        key === 'ArrowUp' ? this.update(0, -gridSize)   :
        key === 'ArrowRight' ? this.update(gridSize, 0) :
        key === 'ArrowDown' ? this.update(0, gridSize)  :
        key === 'ArrowLeft' ? this.update(-gridSize, 0) : '';
    }

    reset() {
        this.x = gameWidth / 2 - this.width / 2;
        this.y = gameHeight - gridSize + (gridSize - this.height) / 2;
    }
}