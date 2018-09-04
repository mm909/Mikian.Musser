var a = Math.PI / 4;
var length = 100;
var trees = [];
var count = 3;

function setup() {
  createCanvas(500,500)
  for(var i = 0; i < count; i++){
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var alpha = 255;
    var c = color(r,g,b,alpha)
    trees[i] = new Tree(0,0,a+random(PI/4),length,c);
  }
}

function draw() {
  background("#C5C6Ca");
  stroke(255)
  strokeWeight(1)
  for(var i = 0; i < trees.length; i++){
    push();
    translate(width/(trees.length+2) + (width/trees.length)*i,height)
    trees[i].draw();
    pop();
  }

}
