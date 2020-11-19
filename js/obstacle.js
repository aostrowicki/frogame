import { ctx2, gameWidth } from './setup.js'
import { state } from './data.js'

export default class Obstacle {
    constructor(x, y, width, height, velocity, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.type = type;
    }

    update() {
        if (this.x > gameWidth && this.velocity > 0) return this.x = 0 - this.width;
        if (this.x < 0 - this.width && this.velocity < 0) return this.x = gameWidth;
        this.x += this.velocity * state.speed;
    }

    draw() {
        this.type === 'CAR' ? ctx2.fillStyle = 'red' : ctx2.fillStyle = 'blue';
        ctx2.fillRect(this.x, this.y, this.width, this.height);
    }
}