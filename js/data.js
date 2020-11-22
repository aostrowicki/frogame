import Frog from './frog.js'
import { generateObstacles } from './utils.js'


// STATE
export let state = {
    score: 0,
    highscore: localStorage.getItem('highscore') || 0,
    speed: 1,
    frog: new Frog(),
    obstacles: generateObstacles(),
}
export const setState = (newState) => {
    state = { ...state, ...newState };
}