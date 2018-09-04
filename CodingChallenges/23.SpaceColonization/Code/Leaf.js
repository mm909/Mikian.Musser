
function Leaf(x,y) {
  this.pos = createVector(x,y)
  this.size = 7;
  this.show = function() {
    fill(0,255,0)
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.size,this.size)
  }
}
