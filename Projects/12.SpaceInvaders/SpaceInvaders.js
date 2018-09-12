var stars = [];
var count = 50;

var ship;
var invader = [];
var invaderCount = 5;
var shots = [];

function setup() {
  var canvas = createCanvas(600,500);
  canvas.parent("canvasContainer");
  for(var i = 0; i < count; i++){
    stars[i] = new star();
  }
  ship = new Ship();
  for(var i = 0; i < invaderCount; i++){
    invader[i] = new Invader(i*100 - width/2 + 50, -height/2 + 50);
  }
  for(var i = 0; i < shots.length; i++) {
    shots[i] = new Shot(0,0);
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for(var i = 0; i < count; i++){
    stars[i].update();
    stars[i].draw();
  }
  move();

  for(var i = shots.length-1; i >=0; i--) {
    shots[i].show();
    shots[i].move();
    for(var j = invaderCount-1; j >=0; j--){
      if(!invader[j].hide){
        if(shots[i].hits(invader[j])) {
          console.log("Hit");
          shots[i].remove();
          invader[j].hide = true;
        }
      }

    }
  }

  var edge = false;
  for(var j = 0; j < invaderCount; j++){
    invader[j].move();
    invader[j].show();

    if(invader[j].x + invader[j].r > width/2 || invader[j].x - invader[j].r < -width/2) {
      edge = true;
    }
  }

  if(edge){
    for(var i = 0; i < invaderCount; i++){
      invader[i].shift();
    }
  }

  ship.show();

  for(var i = shots.length-1; i >= 0; i--) {
    if(shots[i].delete){
      shots.splice(i,1);
    }
  }

  var hitcount = 0;
  for(var i = 0; i < invader.length; i++){
    if(invader[i].hide) hitcount++;
  }

  if(hitcount == invaderCount) {
    for(var i = 0; i < invader.length; i++){
      invader[i].hide = false;
    }
    for(var i = shots.length-1; i >= 0; i--) {
        shots.splice(i,1);
    }
  }


}

function move() {
  if(keyIsDown(65)) {
    ship.move(-1);
  }
  if(keyIsDown(68)) {
    ship.move(1);
  }
}

function keyPressed() {
  if(key === ' ') {
    var shot = new Shot(ship.x,ship.y-ship.size);
    shots.push(shot)
  }
}
