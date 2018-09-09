function Partical(x,y) {
  this.pos = createVector(x,y)
  this.vel = createVector(0,0)
  this.acc = createVector(0,0)
  this.s = 10;
  this.life = 200;
  this.r = random(150,255);

  this.move = function(){
    var force = createVector(random(-5,5),random(-2,0))
    force.setMag(0.2)
    this.applyForce(force)
  }

  this.applyForce = function(f){
    this.acc.add(f)
  }

  this.update = function (){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life -= 3;
  }

  this.show = function() {
    noStroke();
    fill(this.r,0,0,this.life)
    ellipse(this.pos.x, this.pos.y,this.s)
  }
}
