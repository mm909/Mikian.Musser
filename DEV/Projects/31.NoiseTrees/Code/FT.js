var a = Math.PI / 4;
var slider;
var length = 175
var c = 0;
var mainStep = 0;
var step = 1;

var r;
var g;
var b;

function setup() {
  var canvas = createCanvas(600, 500)
  canvas.parent("canvasContainer");
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background("#C5C6Ca");
  stroke(255)
  strokeWeight(1)
  a += 0.01
  translate(width / 2, height)
  branch(length, 1);
}

function branch(l, level) {
  var c = map(level, 1, 10, 0, 2.25)
  strokeWeight(10 - level)
  stroke(c * r, c * g, c * b, 175)
  line(0, 0, 0, -l)
  translate(0, -l)
  if (l > 5) {
    push()
    rotate(noise(a) - PI / 4);
    branch(l * .66, level + 1)
    pop();
    rotate(noise(-a));
    branch(l * .66, level + 1)
  }
}