
function Tree(x,y,a,l,c) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.l = l;
  this.c = c;
  this.rate = random(0.015,0.025)

  this.draw = function() {
    this.a += this.rate;
    var level = 1;
    this.branch(this.l,level);
  }

  this.branch = function(l,level){
    var s = map(level, 1, 11, 0, 1)
    strokeWeight(8-level)
    stroke(s * this.c.levels[0], s * this.c.levels[1], s * this.c.levels[2], 200)
    line(0, 0, 0, -l)


    translate(0,  -l)
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
