var a = Math.PI / 4;
var length = 325;
var tree;
var tree2;

function setup() {
  createCanvas(1300,1000)

  var r = random(255);
  var g = random(255);
  var b = random(255);
  var alpha = 255;
  var c = color(r,g,b,alpha)
  tree = new Tree(0,0,a,length,c);
  var r = random(255);
  var g = random(255);
  var b = random(255);

  var c = color(r,g,b,alpha)
  tree2 = new Tree(0,0,a+PI,length,c);

}

function draw() {
  background(100);
  stroke(255)
  strokeWeight(1)
  translate(width/2,height-length/2)
  push();
  tree.draw();
  pop();
  push();
  tree2.draw();
  pop();

}
