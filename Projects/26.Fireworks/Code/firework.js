function Firework(x, y, s, c) {
  this.pos = createVector(x, y)
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.g = createVector(0, 0.1);
  this.s = s;
  this.pCount = s * 10;
  this.c = c;
  this.particles = [];
  this.exploded = false;
  this.del = false;

  this.applyForce = function(f) {
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.add(this.g)
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.pos.x = constrain(this.pos.x, 0, width - this.s);
    this.pos.y = constrain(this.pos.y, 0, height - this.s);

    if (this.vel.y > 0) {
      this.explode();
    }
    if (this.exploded && this.particles.length == 0) {
      this.del = true;
    }
  }

  this.show = function() {
    colorMode(HSB);
    if (!this.exploded) {
      noStroke();
      fill(this.c, 255, 255);
      rect(this.pos.x, this.pos.y, this.s / 2, this.s * 1.5);
    }
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      this.particles[i].show();
      if (this.particles[i].del) {
        this.particles.splice(i, 1)
      }
    }
  }

  this.bounce = function() {
    var force = createVector(0, random(-9, -5))
    if (this.pos.y == height - this.s) {
      this.applyForce(force)
    }
  }

  this.explode = function() {
    if (!this.exploded) {
      for (var i = 0; i < this.pCount; i++) {
        var f = createVector(random(-2, 2), random(-2, 2));
        var particle = new Particle(this, this.pos.x, this.pos.y, this.s / 2.5, f, this.c);
        this.particles[i] = particle;
        this.particles[i].applyForce();
      }
    }
    this.exploded = true;
  }
}