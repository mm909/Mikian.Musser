function Leaf(x,y,s) {
  this.pos = createVector(x,y)
  this.s = s;
  this.remove = false;

  this.show = function() {
    fill(255,100,100)
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.s,this.s)
  }
}
