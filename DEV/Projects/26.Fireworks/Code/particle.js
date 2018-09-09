function Particle(f, x, y, s, force, c) {
  this.firework = f;
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.g = createVector(0, 0.01);
  this.s = s;
  this.force = force;
  this.del = false;
  this.life = 0;
  this.lifeSpan = 35;
  this.c = c;

  this.applyForce = function() {
    this.acc.add(this.force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.add(this.g)
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life++;
    if (this.life > this.lifeSpan) {
      this.del = true;
    }
  }

  this.show = function() {
    colorMode(HSB)
    var a = map(this.life, 0, this.lifeSpan, 255, 0)
    fill(this.c, a, a)
    ellipse(this.pos.x, this.pos.y, this.s, this.s)
  }

}