function Ship() {
  this.size = 20;
  this.x = 0;
  this.y = (height/2) - (this.size + 1);
  this.speed = 5;


  this.show = function() {
    fill(255)
    rectMode(CENTER)
    rect(this.x, this.y, this.size, this.size*2);
  }

  this.move = function(dir) {
    this.x += dir * this.speed;
  }

}
