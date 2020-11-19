import { gameWidth, gameHeight, gridSize, ctx1, ctx3, ctx5 } from './js/setup.js'
import { state } from './js/data.js'
import { isColliding, reset, score, drawHud } from './js/utils.js'


const { frog, obstacles } = state;


// EVENT LISTENERS
let keys = new Set([]);
window.addEventListener('keydown', (e) => {
    if (!keys.has(e.key)) {
        keys.add(e.key);
        frog.y < gridSize && e.key === "ArrowUp" ? score() : frog.jump(e.key);     // jump or score
    }
});
window.addEventListener('keyup', (e) => {
    keys.delete(e.key)
});


// ANIMATION LOOP
function animate() {
    ctx3.clearRect(0, 0, gameWidth, gameHeight);                                    // draw player
    frog.draw();

    ctx1.clearRect(0, 0, gameWidth, gameHeight);                                    // draw obstacles
    obstacles.forEach(obstacle => obstacle.draw());
    obstacles.forEach(obstacle => obstacle.update());

    obstacles.some(obstacle => isColliding(frog, obstacle)) && reset();             // collision detection
    drawHud(ctx5);

    requestAnimationFrame(animate);
}
animate();