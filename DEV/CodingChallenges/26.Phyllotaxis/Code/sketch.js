// PI = N * 137.5
//  R = C * Sqrt(n)

var c  = 3;
var n  = 0;
var pi = 0;
var r  = 0;
var a  = 137.5
var s = 5;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(150);
  colorMode(HSB)
}

function draw() {
  noStroke();
  pi = n * a;
  r  = c * sqrt(n);
  var x = r * cos(pi) + width/2;
  var y = r * sin(pi) + height/2;
  fill((r*c)%255,255,255)
  ellipse(x,y,s,s)
  n += 1;
}
