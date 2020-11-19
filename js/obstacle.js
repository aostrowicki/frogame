import { ctx1, gameWidth } from './setup.js'
import { state } from './data.js'

export default class Obstacle {
    constructor(x, y, width, height, velocity) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
    }

    update() {
        if (this.x > gameWidth && this.velocity > 0) return this.x = 0 - this.width;
        if (this.x < 0 - this.width && this.velocity < 0) return this.x = gameWidth;
        this.x += this.velocity * state.speed;
    }

    draw() {
        ctx1.fillStyle = 'red';
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
}