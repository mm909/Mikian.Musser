function Branch(par, pos, dir, len, c) {
  this.par = par;
  this.pos = pos;
  this.dir = dir;
  this.len = len;
  this.c = c

  this.oDir = this.dir.copy();
  this.count = 0;

  this.reset = function() {
    this.count = 0;
    this.dir = this.oDir.copy();
  }

  this.next = function(){
    // Dir is a vector from 0,1
    var nextDir = p5.Vector.mult(this.dir, this.len)
    var newPos = p5.Vector.add(this.pos, nextDir)
    var tempC = this.c;
    tempC.levels[1] += 0.3
    var tempBranch = new Branch(this, newPos, this.dir.copy(),this.len,tempC)
    return tempBranch;
  }

  this.show = function() {
    strokeWeight(2);
    stroke(this.c)
    if(this.par != null){
      line(this.par.pos.x,this.par.pos.y, this.pos.x,this.pos.y)
    }
  }
}
