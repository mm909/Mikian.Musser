function Partical(x,y,r_,g_,b_) {
  this.pos = createVector(x,y)
  this.vel = createVector(0,0)
  this.acc = createVector(0,0)
  this.s = 10;
  this.life = 200;
  this.r = r_;
  this.g = g_;
  this.b = b_;
  this.maxForce = 0.05
  this.maxSpeed = 5;

  this.move = function(){
    var force = createVector(random(-this.maxSpeed*2,this.maxSpeed*2),random(-this.maxSpeed*2,this.maxSpeed*2))
    force.setMag(this.maxForce)
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
    fill(this.r,this.g,this.b,this.life)
    ellipse(this.pos.x, this.pos.y,this.s)
  }

  this.seek = function(target) {
    var desired = p5.Vector.sub(target,this.pos)
    desired.setMag(this.maxSpeed)
    var steer = p5.Vector.sub(desired,this.vel)
    steer.limit(this.maxForce)
    return steer;
  }

}
