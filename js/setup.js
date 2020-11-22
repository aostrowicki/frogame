// VARIABLES
export const gameWidth = 1000;
export const gameHeight = 700;
export const gridSize = 100;


// SPRITES
export const background = new Image();
background.src = '../images/bg.png';
const backgroundWater = new Image();
backgroundWater.src = '../images/water-bg.png';
export const cars = new Image();
cars.src = '../images/cars.png';
export const frog = new Image();
frog.src = '../images/frog.png';
export const turtles = new Image();
turtles.src = '../images/turtles.png';
export const log = new Image();
log.src = '../images/log.png';


// SETUP
const canvas1 = document.getElementById('canvas1');
export const ctx1 = canvas1.getContext('2d');
canvas1.width = gameWidth;
canvas1.height = gameHeight;
backgroundWater.onload = () => ctx1.drawImage(backgroundWater, 0, -5, gameWidth, gameHeight + 20);

const canvas2 = document.getElementById('canvas2');
export const ctx2 = canvas2.getContext('2d');
canvas2.width = gameWidth;
canvas2.height = gameHeight;

const canvas3 = document.getElementById('canvas3');
export const ctx3 = canvas3.getContext('2d');
canvas3.width = gameWidth;
canvas3.height = gameHeight;

const canvas4 = document.getElementById('canvas4');
export const ctx4 = canvas4.getContext('2d');
canvas4.width = gameWidth;
canvas4.height = gameHeight;

const canvas5 = document.getElementById('canvas5');
export const ctx5 = canvas5.getContext('2d');
canvas5.width = gameWidth;
canvas5.height = gameHeight;


