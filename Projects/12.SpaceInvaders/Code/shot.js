function Shot(x,y) {

    this.x = x;
    this.y = y;
    this.r = 10;
    this.size = this.r*2;
    this.speed = 5;
    this.delete = false;

    this.show = function() {
      fill(50,0,200,150)
      rectMode(CENTER)
      ellipse(this.x,this.y, this.size, this.size);
    }

    this.move = function(dir) {
      this.y -= this.speed;
    }

    this.hits = function(invader) {
      d = dist(this.x,this.y,invader.x,invader.y);
      if(d < (this.r + invader.r)){
        return true;
      } else {
        return false;
      }
    }

    this.remove = function() {
      this.delete = true;
    }

}
