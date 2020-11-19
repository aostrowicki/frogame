import { state, setState } from './data.js'
import { gridSize } from './setup.js'
import Obstacle from './obstacle.js'


export function score() {
    console.log(state);
    const { score, speed, frog } = state;
    setState({ score: score + 10, speed: speed + 0.5 });
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
        obstacles.push(new Obstacle(i * gridSize * 8, lanes.lane1, gridSize, gridSize, -0.5));
        obstacles.push(new Obstacle(i * gridSize * 4, lanes.lane1, gridSize, gridSize, -0.5));
        obstacles.push(new Obstacle(i * gridSize * 5, lanes.lane2, gridSize * 2, gridSize, 1));
        obstacles.push(new Obstacle(i * gridSize * 6, lanes.lane3, gridSize * 2, gridSize, -2));
        obstacles.push(new Obstacle(i * gridSize * 6, lanes.lane4, gridSize * 2, gridSize, 2));
        obstacles.push(new Obstacle(i * gridSize * 6, lanes.lane5, gridSize * 2, gridSize, -1));
    }
    return obstacles;
}