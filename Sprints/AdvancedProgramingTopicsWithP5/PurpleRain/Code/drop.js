// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=KkyIDI6rQJI

  // 1. This is the drop object.
  // Drop Vars
    // 2. x
    // 3. y
    // 4. length (Of the line)
      //  Random value between 5 and 10
    // 5. width (Of the line)
      //  Random value between 1 and 2.5
    // 6. color (as a p5.js color object)
      //  r = 138, g = 43, b = 226
    // 7. speed
      //  Random value between 5 to 14
  // Functions
    // 8. fall
      // a. Update the rain location by the speed of the drop
    // 9. checkBounds
      // a. if the rain's y value is off the screen (this.y > height)
      // b. Reset the dtop to the top of the screen. (Just off the screen)
    // 10. show
      // a. set the color of the drop
      // b. set the width
      // c. draw the drop as a line
function drop() {                   // 1
  // Vars
  this.x = random(width);           // 2
  this.y = random(height);          // 3
  this.length = random(5, 10);      // 4
  this.weight = random(1, 2.5);     // 5
  this.color = color(138, 43, 226); // 6
  this.speed = random(5, 14);       // 7

  // Functions
  this.fall = function() {          // 8
    this.y = this.y + this.speed;   // a
  }

  this.checkBounds = function() {   // 9
    if(this.y > height){            // a
      this.y = -this.length;        // b
    }
  }

  this.show = function() {          // 10
    stroke(this.color)              // a
    strokeWeight(this.weight);      // b
    line(this.x, this.y, this.x, this.y + this.length);  // c
  }
}
