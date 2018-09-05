
function Tree(x,y,a,l,c) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.l = l;
  this.c = c;
  this.rate = random(0.015,0.025)
  this.offset = floor(random(4))
  this.cripple = random(1);

  this.draw = function() {
    this.a += this.rate;
    var level = 1;
    this.branch(this.l,level);
  }

  this.branch = function(l,level){
    var s = map(level, 1, 11, 0, 3)
    strokeWeight(8-level)
    stroke(s * this.c.levels[0], s * this.c.levels[1], s * this.c.levels[2], 200)
    line(0, 0, 0, -l)


    translate(0,  -l)
    if(l>10){
      push()
      rotate(this.a);
      if(this.cripple > 0.20 && this.cripple < 0.8){
        this.branch( l * (.66 - this.cripple) ,level+1)
      } else {
        this.branch( l * .66,level+1)
      }
      pop();
      if(this.offset > 2){
        rotate(-this.a + PI / this.offset);
      } else {
        rotate(-this.a);

      }
      this.branch( l * .66,level+1)
    }
  }

}
