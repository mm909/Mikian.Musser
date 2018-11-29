if(debug){
  console.log("CirclePackingM-v2/r.js");
}

function r(_x,_y) {
  this.x = _x;
  this.y = _y;
  this.r = 10;
  this.c = color(255,240,240,150);

  this.show = function() {
    fill(this.c)
    ellipse(this.x, this.y, this.r);
  }
}
