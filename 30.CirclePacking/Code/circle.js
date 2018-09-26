function Circle(x,y) {
  this.pos = createVector(random(width),random(height))
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.target = createVector(x,y)

  this.r = 1;
  this.growRate = 1;
  this.growing = true;
  this.buffer = 3;

  this.maxSpeed = 5;
  this.maxForce = 0.3;
  this.fleeSpeed = 7;
  this.fleeRange = 75;

  this.c = color(random(360),255,255)
  // this.c = color(random(255),random(255),random(255),255)

  this.show = function() {
    colorMode(HSB)
    fill(this.c)
    ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2)
  }

  this.grow = function() {
    if(this.growing && this.r < MAXSIZE){this.r += this.growRate;}
  }

  this.applyForce = function(f) {
    this.acc.add(f)
  }

  this.update = function() {
    if(!this.bounds()) { this.growing = false; }
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0);
    var arrive = this.arrive(this.target);
    this.applyForce(arrive)
    var d = dist(this.pos.x,this.pos.y,mouseX,mouseY)
    var mouseV = createVector(mouseX,mouseY);
    if(d < this.fleeRange) {this.applyForce(this.run(mouseV));}
  }

  this.run = function(target){
    var fleeingTarget = createVector(target.x, target.y);
    var fleeDir = p5.Vector.sub(this.pos,fleeingTarget)
    fleeDir.setMag(this.fleeSpeed)
    return p5.Vector.sub(fleeDir,this.vel);
  }

  this.arrive = function(target) {
    var desired = p5.Vector.sub(target,this.pos)
    var d = desired.mag();
    var speed = this.maxSpeed;
    if(d < 10*this.maxSpeed){
      speed = map(d,0,10*this.maxSpeed,0,this.maxSpeed)
    }
    desired.setMag(speed)
    var steer = p5.Vector.sub(desired,this.vel)
    steer.limit(this.maxForce)
    return steer;
  }

  this.seek = function(target) {
    var desired = p5.Vector.sub(target,this.pos)
    desired.setMag(this.maxSpeed)
    var steer = p5.Vector.sub(desired,this.vel)
    steer.limit(this.maxForce)
    return steer;
  }

  this.bounds = function() {
    var tempX = this.target.x + this.r + this.buffer;
    var tempY = this.target.y + this.r + this.buffer;
    if(tempX > width || tempY > height) return false;
    var tempX = this.target.x - this.r - this.buffer;
    var tempY = this.target.y - this.r - this.buffer;
    if(tempX < 0 || tempY < 0) return false;

    for (var i = 0; i < circles.length; i++) {
      var c = circles[i];
      var d = dist(this.target.x, this.target.y, c.target.x, c.target.y)
      if(d > 1){
        if(d < this.r + c.r + this.buffer) { return false}
      }
    }
    return true;
  }
}
