// Mikian Musser
// https://p5js.org/reference/

var x = 0;
var y = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(151);
  x = mouseX;
  y = mousey;
  fill(100, 255, 100)
  ellipse(x, y, 20, 20)
}