import { ctx2, gameWidth, cars, turtles, log } from './setup.js'
import { state } from './data.js'

export default class Obstacle {
    constructor(x, y, width, height, velocity, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.direction = velocity > 0 ? 0 : this.width / 2.5;
        this.type = type;
        this.carType = this.type === 'CAR' ? Math.floor(Math.random() * 4) : null;
    }

    update() {
        if (this.x > gameWidth && this.velocity > 0) {
            this.carType = this.type === 'CAR' ? Math.floor(Math.random() * 4) : null;
            return this.x = 0 - this.width;
        }
        if (this.x < 0 - this.width && this.velocity < 0) {
            this.carType = this.type === 'CAR' ? Math.floor(Math.random() * 4) : null;
            return this.x = gameWidth;
        }
        this.x += this.velocity * state.speed;
    }

    draw() {
        this.type === 'CAR' ?
            ctx2.drawImage(cars, this.direction, 40 * this.carType, 80, 40, this.x, this.y, this.width, this.height) :
            this.type === 'TURTLE' ?
                ctx2.drawImage(turtles, this.x % 80 > 40 ? 0 : 70, 0, 70, 70, this.x, this.y, this.width * 1.2, this.height * 1.2) :
                ctx2.drawImage(log, this.x, this.y, this.width, this.height);
    }
}