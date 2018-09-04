function Branch(parent, pos, dir) {
  this.length = 10;
  this.parent = parent;
  this.pos = pos;
  this.dir = dir;

  this.show = function() {
    if(this.parent != null){
      line(this.pos.x,this.pos.y,this.parent.pos.x,this.parent.pos.y)
    } else {
      translate(width/2,height);
      strokeWeight(2);
      stroke(0)
      line(this.pos.x,this.pos.y,0,-this.length)
    }
  }
}
