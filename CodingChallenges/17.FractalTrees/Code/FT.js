var a = Math.PI / 4;
var slider;
var length = 325
var c = 0;
var mainStep = 0;
var step = 1;

var r;
var g;
var b;

function setup() {
  createCanvas(1300,1000)
  // slider = createSlider(0,TWO_PI, PI/4, 0.01)
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(100);
  stroke(255)
  strokeWeight(1)
  // a = slider.value();
  a+=0.01
  translate(width/2,height)
  branch(length,1);
}

function branch(l,level){
  var c = map(level, 1, 11, 0, 1)
  strokeWeight(11-level)
  stroke(c * r, c * g, c * b)
  line(0, 0, 0, -l)
  translate(0,  -l)
  if(l>10){
    push()
    rotate(a);
    branch( l * .66,level+1)
    pop();
    rotate(-a);
    branch( l * .66,level+1)
  }
}
