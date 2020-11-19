import { gameWidth, gameHeight, ctx1, ctx3 } from './js/setup.js'
import { state } from './js/data.js'


const { frog, obstacles } = state;

let keys = new Set([]);
window.addEventListener('keydown', (e) => {
    if (!keys.has(e.key)) {
        keys.add(e.key);
        frog.jump(e.key);
    }
});
window.addEventListener('keyup', (e) => {
    keys.delete(e.key)
});


function animate() {
    ctx3.clearRect(0, 0, gameWidth, gameHeight);
    frog.draw();

    ctx1.clearRect(0, 0, gameWidth, gameHeight);
    obstacles.forEach(obstacle => obstacle.draw());
    obstacles.forEach(obstacle => obstacle.update());

    requestAnimationFrame(animate);
}
animate();