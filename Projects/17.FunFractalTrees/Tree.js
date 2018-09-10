
function Tree(x,y,a,l,c) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.l = l;
  this.c = c;
  this.dir = 1;

  this.draw = function() {
    this.a += 0.020;
    var level = 1;
    this.branch(this.l,level);
  }

  this.branch = function(l,level){
    var s = map(level, 1, 11, 0, 3)
    strokeWeight(11-level)
    stroke(s * this.c.levels[0], s * this.c.levels[1], s * this.c.levels[2], 175)
    if(level > 1){
     line(0, 0, 0, -l)
    }

    this.x+=0.01 * this.dir
    if(this.x > width/16){
      this.dir*=-1;
    }
    if(this.x < -width/16){
      this.dir*=-1;
    }

    translate(this.x,  -l)
    if(l>10){
      push()
      rotate(this.a);
      this.branch( l * .66,level+1)
      pop();
      rotate(-this.a);
      this.branch( l * .66,level+1)
    }
  }

}
