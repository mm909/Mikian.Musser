function drop() {
  this.x = random(width);
  this.y = random(height);
  this.length = random(5,10);
  this.weight = random(1,2.5);
  this.color = color(138, 43, 226);
  this.speed = random(5,14);

  this.draw = function() {
    stroke(this.color)
    strokeWeight(this.weight);
    line(this.x, this.y, this.x, this.y + this.length);
  }

  this.fall = function() {
    this.y = this.y + this.speed;
  }

  this.checkBounds = function() {
    if(this.y > height) this.y = -this.length;
  }
}

var count = 300;
var rain = [];

function setup() {
  createCanvas(500,500);
  for(var i = 0; i < count; i++){
    rain[i] = new drop;
  }
}

function draw() {
  background(230,230,250);
  for(var i = 0; i < count; i++){
    rain[i].draw();
    rain[i].fall();
    rain[i].checkBounds();
  }
}
