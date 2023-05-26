// Parámetros de las piernas
const legHeight = 100;
const legWidth = 20;
const stepSize = 2;

// Parámetros de la superficie irregular
const terrainDetail = 0.2;
let terrain;

// Variables de control del movimiento
let walking = false;
let stepCounter = 0;

function setup() {
  createCanvas(800, 400);

  // Generar la superficie irregular
  terrain = generateTerrain(width, height, terrainDetail);
}

function draw() {
  background(220);

  // Dibujar la superficie
  drawTerrain();

  // Dibujar las piernas
  if (walking) {
    walk();
  } else {
    drawLegs(width / 2, height - legHeight);
  }
}

function mousePressed() {
  walking = true;
}

function walk() {
  // Realizar un paso hacia adelante
  if (stepCounter < width) {
    translate(stepSize, 0);
    drawLegs(0, height - legHeight);
    stepCounter += stepSize;
  } else {
    // Reiniciar la posición de las piernas y el contador de pasos
    translate(-stepCounter, 0);
    stepCounter = 0;
    walking = false;
  }
}

function drawLegs(x, y) {
  // Dibujar las piernas en la posición dada
  fill(0);
  rect(x, y, legWidth, legHeight);
  rect(x + legWidth, y, legWidth, legHeight);
}

function generateTerrain(width, height, detail) {
  // Generar una matriz con valores de altura para simular una superficie irregular
  const terrain = [];
  let yoff = 0;

 
