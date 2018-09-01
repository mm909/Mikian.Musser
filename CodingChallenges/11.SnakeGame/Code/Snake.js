function Snake() {
  this.scale = 25;
  this.cols = floor(width / this.scale);
  this.rows = floor(height / this.scale);
  this.pos = createVector(floor(random(this.cols)) * this.scale, floor(random(this.rows)) * this.scale);
  this.dir = createVector(1,0);

  this.change = function(i){
    if(i == 0) this.dir = createVector(0,-1);
    if(i == 1) this.dir = createVector(0,1);
    if(i == 2) this.dir = createVector(1,0);
    if(i == 3) this.dir = createVector(-1,0);
  }

  this.update = function() {

    this.pos.x += this.dir.x * this.scale;
    this.pos.y += this.dir.y * this.scale;

    if(this.pos.x >= width) this.pos.x = 0;
    if(this.pos.x < 0) this.pos.x = width;
    if(this.pos.y > height) this.pos.y = 0;
    if(this.pos.y < 0) this.pos.y = height;

  };

  this.draw = function() {
    rect(this.pos.x, this.pos.y, this.scale, this.scale);
  };
}
