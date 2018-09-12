function Target(x,y,s,c,t) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.c = c;
  this.t = t;

  this.show = function(){
    fill(c);
    ellipse(x,y,s,s);
    noFill()
    ellipse(x,y,t,t);
  }

}
