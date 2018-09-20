// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. This is a firework object
  // It takes in -
  // x
  // y
  // size
  // color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. pcount
// 9. array partical
// 10. bool exploded
// 11. bool del

// Functions
// 12. Apply force
// 13. Update
// 14. explode
// 15. show

function Firework(x_, y_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(x_, y_)  // 2
  this.size = size_;  // 3
  this.color = color_;  // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0);  // 5
  this.acc = createVector(0, 0);  // 6
  this.g = createVector(0, 0.1);  // 7

  // 8. pCount is the number of particles the fire makes when it explodes
  // 9. particles is the array for storing all of the particles made when it explodes
  this.pCount = floor(size_ * 5);  // 8
  this.particles = [];  // 9

  // 10. exploded is a bool to check is the firework has been exploded yet. Starts as false
  // 11. del is a bool to see if the firework can be deleted from the array.
  this.exploded = false;  // 10
  this.del = false;  // 11

// 12. Apply force
  // Apply force takes in a vector and adds it to the acceleration
  // a. Add the force to acc vector
  this.applyForce = function(f) { // 12
    this.acc.add(f); // 12.a
  }

// 13. Update
  // a > Add acc to vel
  // b > Add g to vel
  // c > Add pos to vel
  // d > 0 out acc
  // e > If the vel is negitive (Firework is falling)
    // f > then explode the firework
  // g > If the firework has exploded and there are no particles in the air
    // h > Mark the firework for deletion
  this.update = function() { // 13
    this.vel.add(this.acc); // 13.a
    this.vel.add(this.g)    // 13.b
    this.pos.add(this.vel); // 13.c
    this.acc.mult(0);       // 13.d

    if (this.vel.y > 0) {   // 13.e
      this.explode();       // 13.f
    }

    if (this.exploded && this.particles.length == 0) { // 13.g
      this.del = true;  // 13.h
    }
  }

// 14. explode
  // a > if this firework has not exploded yet (We dont want to do this more than once)
    // b > do the following pCount times
    // c > Create a force that will send the partical flying out
    // d > create a particle
      // > this.pos so that the particles can start where the firework ended.
      // > this.size/2 is the new size of the partical
      // > the new random force we made
      // > this.color so that we know what color to draw the particals
    // e > apply that random for the particle
    // f > add that partical to the array list
  // g > set exploded to true (so that we dont do all of that again)
  this.explode = function() { // 14
    if (!this.exploded) { // a
      for (var i = 0; i < this.pCount; i++) { // b
        var force = createVector(random(-2, 2), random(-2, 2)); // c
        var particle = new Particle(this.pos, this.size / 2, this.color); // d
        particle.applyForce(force); // e
        this.particles[i] = particle; // f
      }
    }
    this.exploded = true; // g
  }

// 15. show
  // > this function will draw the firework and it's particles
  // a > set the color mode to HSB (Hue, saturation, brightness)
    // > this makes our colors really saturated and bright
  // b > check to see if the firework has been exploded
    // > if the fire work has exploded then dont show it
  // c > noStroke removes black lines around our firework
  // d > fill our circle with the color
  // e > draw the firework at x,y,size,size
  // f > For every partical (Loop through this array backwards)
    // > Update the partical's location
    // > show the partical
    // > if the partical is marked for deletion
      // > Delete that partical
  this.show = function() { // 15
    colorMode(HSB); // a

    if (!this.exploded) { // b
      noStroke(); // c
      fill(this.color, 255, 255); // d
      ellipse(this.pos.x, this.pos.y, this.size, this.size); // e
    }

    for (var i = this.particles.length - 1; i >= 0; i--) { // f
      this.particles[i].update();
      this.particles[i].show();
      if (this.particles[i].del) {
        this.particles.splice(i, 1)
      }
    }
  }
}
