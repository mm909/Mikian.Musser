// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. this is a partical object
  // > it takes in a parent firework
  // > posistion
  // > size
  // > color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. bool del
// 9. life
// 10. lifeSpan

// Functions
// 11. Apply force
// 12. Update
// 13. show

function Particle(pos_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(pos_.x,pos_.y); // 2
  this.size = size_; // 3
  this.color = color_; // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0); // 5
  this.acc = createVector(0, 0); // 6
  this.g = createVector(0, 0.01); // 7

  // 8. del is a bool to see if the partical can be deleted from the array.
  this.del = false; // 8

  // 9. this.life is how many frames this partical has been alive
  // 10. this.lifeSpan is how many frames this partical is allowed to live
  this.life = 0; // 9
  this.lifeSpan = 40; // 10

  // 11. Apply force
    // Apply force takes in a vector and adds it to the acceleration
    // a. Add the force to acc vector
  this.applyForce = function(f) { // 11
    this.acc.add(f);  // a
  }

  // 12. Update
    // a > Add acc to vel
    // b > Add g to vel
    // c > Add pos to vel
    // d > 0 out acc
    // e > inc the life count
    // f > if this.life > this.lifeSpan then
      // g > set del for true
  this.update = function() { // 12
    this.vel.add(this.acc); // a
    this.vel.add(this.g); // b
    this.pos.add(this.vel); // c
    this.acc.mult(0); // d
    this.life++; // e
    if (this.life > this.lifeSpan) { // f
      this.del = true; // g
    }
  }

  // 13. Show
    // > this function will draw the partical
    // a > set the color mode to HSB (Hue, saturation, brightness)
    // b > get the alpha value using the map function (Make it look like they are fading)
    // c > fill with color and alpha
    // d > draw the partical
  this.show = function() { // 13
    colorMode(HSB) // a
    var alpha = map(this.life, 0, this.lifeSpan, 255, 50) // b
    fill(this.color, alpha, alpha) // c
    ellipse(this.pos.x, this.pos.y, this.size, this.size) // d
  }
}
