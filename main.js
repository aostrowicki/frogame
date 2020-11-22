import { gameWidth, gameHeight, gridSize, ctx1, ctx2, ctx3, ctx5, background } from './js/setup.js'
import { state } from './js/data.js'
import { isColliding, reset, score, drawHud } from './js/utils.js'


const { frog, obstacles } = state;


// EVENT LISTENERS
let keys = new Set([]);
window.addEventListener('keydown', (e) => {
    if (!keys.has(e.key) && ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(e.key)) {
        keys.add(e.key);
        frog.moving = 1;
        frog.y < gridSize && e.key === "ArrowUp" ? score() : frog.jump(e.key);     // jump or score
    }
});
window.addEventListener('keyup', (e) => {
    keys.delete(e.key);
    frog.moving = false;
});


// ANIMATION LOOP
function animate() {
    ctx3.clearRect(0, 0, gameWidth, gameHeight);                                    // draw player
    frog.draw();

    ctx2.clearRect(0, 0, gameWidth, gameHeight);                                    // draw obstacles
    ctx2.drawImage(background, 0, 0, gameWidth, gameHeight);
    obstacles.forEach(obstacle => obstacle.update());
    obstacles.forEach(obstacle => obstacle.draw());

    frog.y > gridSize && frog.y < gridSize * 3 ?                                    // collision detection
        obstacles.some(obstacle => obstacle.type !== 'CAR' && isColliding(frog, obstacle)) && frog.x > 0 && frog.x + frog.width < gameWidth ?
            frog.x += obstacles.find(obstacle => isColliding(frog, obstacle)).velocity * state.speed : reset() :
        obstacles.some(obstacle => obstacle.type === 'CAR' && isColliding(frog, obstacle)) && reset();

    drawHud(ctx5);

    requestAnimationFrame(animate);
}
animate();