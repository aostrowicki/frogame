import { state, setState } from './data.js'
import { gameHeight, gameWidth, gridSize } from './setup.js'
import Obstacle from './obstacle.js'


export function score() {
    const { score, speed, frog } = state;
    setState({ score: Math.floor(score + 1 * speed ** 3), speed: speed + 0.3 });
    frog.reset();
}

export function reset() {
    const { frog } = state;
    setState({ score: 0, speed: 1 });
    frog.reset();
}

export function generateObstacles() {
    const lanes = {
        lane0: 0,
        lane1: gridSize,
        lane2: gridSize * 2,
        lane3: gridSize * 3,
        lane4: gridSize * 4,
        lane5: gridSize * 5,
    }
    const type = {
        car: 'CAR',
        log: 'LOG',
        turtle: 'TURTLE',
    }

    const obstacles = [];
    for (let i = 0; i < 2; i++) {
        obstacles.push(new Obstacle(i * gridSize * 8, lanes.lane1, gridSize, gridSize, -0.7, type.turtle));
        obstacles.push(new Obstacle(i * gridSize * 4, lanes.lane1, gridSize, gridSize, -0.7, type.turtle));
        obstacles.push(new Obstacle(i * gridSize * 5, lanes.lane2, gridSize * 2, gridSize, 1, type.log));
        obstacles.push(new Obstacle(i * gridSize * 6, lanes.lane3, gridSize * 2, gridSize, -2, type.car));
        obstacles.push(new Obstacle(i * gridSize * 6, lanes.lane4, gridSize * 2, gridSize, 2, type.car));
        obstacles.push(new Obstacle(i * gridSize * 6, lanes.lane5, gridSize * 2, gridSize, -1, type.car));
    }
    return obstacles;
}

export function isColliding(frog, obstacle) {
    return !(
        frog.x > obstacle.x + obstacle.width ||
        frog.x + frog.width < obstacle.x ||
        frog.y > obstacle.y + obstacle.height ||
        frog.y + frog.height < obstacle.y
    )
}

export function drawHud(ctx) {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.font = '14px Arial';
    ctx.fillText('Score', 20, 40);
    ctx.font = '30px Arial';
    ctx.fillText(state.score, 65, 40);
    // ctx.font = '12px Arial';
    // ctx.fillText(`Speed: ${state.speed}`, 20, 60);
}