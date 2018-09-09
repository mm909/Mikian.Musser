var stars = [];
var count = 100;
var sun;
function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i = 0; i < count; i++){
    stars[i] = new star();
  }
  sun = new Planet(50,0,0);
  sun.spawnMoons(5,1);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for(var i = 0; i < count; i++){
    stars[i].update();
    stars[i].draw();
  }
  sun.show();
  sun.orbit();
}
