function Invader(x,y) {
  this.x = x;
  this.y = y;
  this.xdir = 1;
  this.ydir = 0;
  this.hide = false;

  this.r = 25;
  this.size = this.r*2;
  this.speed = 5;

  this.shift = function() {
    this.xdir *= -1;
    if(this.ydir == 0){
      this.y += this.r;
      this.ydir = 1;
    } else {
      this.y -= this.r;
      this.ydir = 0;
    }

  }

  this.remove = function() {
    this.delete = true;
  }

  this.show = function() {
    if(!this.hide) {
      fill(255,0,200,150)
      rectMode(CENTER)

      ellipse(this.x,this.y, this.size, this.size);
    }

  }

  this.move = function(dir) {
    this.x = this.x + this.xdir;
  }

}
