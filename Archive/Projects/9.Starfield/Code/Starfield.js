var stars = [];
var count = 100;
function setup() {
  createCanvas(500,500);
  for(var i = 0; i < count; i++){
    stars[i] = new star();
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for(var i = 0; i < count; i++){
    stars[i].update();
    stars[i].draw();
  }
}
