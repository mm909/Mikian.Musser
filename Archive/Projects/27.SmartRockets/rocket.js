function Rocket(dna) {
  this.size = 10;
  this.pos = createVector(width - 50,height - 50);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.g   = createVector(0,0.01);
  this.reached = false;
  this.reachedScore = 0;
  this.dead = false;
  this.fitness = 1;

  if(dna){
    this.DNA = dna
  } else {
    this.DNA = new DNA();
  }

  this.updateDeadCount = function() {
    if(!this.dead){population.deadCount++}
  }

  this.updateReachedCount = function() {
    if(!this.reached){population.reachedCount++}
  }

  this.crashed = function(){
    if(this.pos.x < 0 || this.pos.x > width) return true;
    if(this.pos.y < 0 || this.pos.y > height) return true;
  }

  this.calcFitness = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y)
    this.fitness = map(d,0,width,width,0);
    if(this.reached) {
      var speedBonus = (1 - this.reachedScore / lifespan) * sucessFactor;
      this.fitness += speedBonus
      this.fitness = width * sucessFactor;
    }
    if(this.dead){this.fitness *= deadFactor}
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y)
    if(this.crashed()){
      this.updateDeadCount();
      this.dead = true;
    }
    if(d < threshold) {
      this.updateReachedCount();
      this.reached = true;
      this.reachedScore = count;
    }
    if(!this.reached && !this.dead){
      this.applyForce(this.DNA.genes[count])
      this.vel.add(this.g)
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  }

  this.show = function () {
    push();
    rectMode(CENTER);
    noStroke();
    translate(this.pos.x,this.pos.y);
    rotate(this.vel.heading());
    if(this.reached){
      fill(0,255,0,150)
    } else if(this.dead) {
      fill(255,0,0,200)
    } else {
      var tempR = map(count,0,lifespan,-100,255);
      var tempG = map(count,0,lifespan,255,0);
      var r = tempR;
      var g = tempG;
      fill(r,g,0,150)
    }
    rect(0,0,this.size,this.size/2);
    pop();
  }
}
