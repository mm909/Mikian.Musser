if (debug) {
  console.log("CirclePackingM-v2/circle.js");
}
// This is a circle object
// It takes an x and a y for its location
function Circle(x, y) {
  // this.pos is a vector with the obejct's pos(x,y)
  this.pos = createVector(random(width), random(height));
  // this.pos = createVector(x,y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.target = createVector(x, y)
  this.offsetForWebsiteX = 30;
  this.offsetForWebsiteY = 30;

  // this.r is the circle's radius
  // this.growrate is how fast the cirlce grows
  // Amount each frame
  // this.growing is a bool var for it the circle should grow or not
  // this.buffer is how much black space should be allowed between circles
  this.r = 1;
  this.growRate = 1.5;
  this.growing = true;
  this.buffer = 5;

  // how the cirlces move.
  // MaxSpeed is how long a vector can possibly be (Top left to bottom right)
  // How much do we slow down
  // this.maxSpeed = sqrt(width * width + width * width);
  this.maxSpeed = 10;
  this.maxForce = 1;
  this.fleeRange = 125;
  this.fleeSpeed = 7;

  // var middle = createVector(width/2,height/2);
  // var d = dist(middle.x, middle.y, this.target.x, this.target.y)
  // var c = map(d,0,width/2,0,255)

  // this.color is the color of the circle
  // this.color = color(random(360),255,255)
  // this.color = color(c,255,255)

  // Apply a force to acc (Takes a vector)
  this.applyForce = function(f) {
    this.acc.add(f)
  }

  // This function will update the color of the circle
  this.updateColor = function() {
    var center = createVector(250, 250);
    // var d = dist(center.x, center.y, this.pos.x, this.pos.y);
    var d = roughDistance(center.x, center.y, this.pos.x, this.pos.y);
    var c = map(d, 0, windowWidth, 0, 300);
    this.color = color(c, 255, 255);
  }

  // updates color, vel, pos, acc, and calls the arrive function.
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    if (hireMe) {
      for (var i = 0; i < circles.length; i++) {
        circles[i].target = createVector(random(width), random(height))
      }
      hireMe = false;
    } else {
      this.arrive(this.target);
      var d = roughDistance(this.pos.x, this.pos.y, mouseX, mouseY)
      var mouseV = createVector(mouseX, mouseY);
      if (d < this.fleeRange) {
        this.applyForce(this.run(mouseV));
      }
    }
  }

  this.run = function(target) {
    var fleeingTarget = createVector(target.x, target.y);
    var fleeDir = p5.Vector.sub(this.pos, fleeingTarget)
    fleeDir.setMag(this.fleeSpeed)
    return p5.Vector.sub(fleeDir, this.vel);
  }

  // This arive is a function that moves a agent (circle)
  // towards a target based on how far away from target it is
  // Think of this as stoping at a stop sign
  // We want to go max speed until we are close to the sign
  // As we get closer we want to slow down
  // Once we arive we want to stop
  this.arrive = function(target) {
    // Get the direction
    var desired = p5.Vector.sub(target, this.pos)
    // See how long this vector is
    var d = desired.mag();
    // Get the max speed
    var speed = this.maxSpeed;
    // This is the "Slow down as we get close" part of the alg
    if (d < 10 * this.maxSpeed) {
      speed = map(d, 0, 10 * this.maxSpeed, 0, this.maxSpeed)
    }
    // Resize the vector
    desired.setMag(speed)
    // "steer"
    var steer = p5.Vector.sub(desired, this.vel)
    // Apply the force
    steer.limit(this.maxForce)
    this.applyForce(steer)
  }

  // This.show draws the circle to the screen
  this.show = function() {
    // Color mode Hue, sat, brightness
    // No stroke around the circle
    // Fill the circle with it's color
    // Draw the ellipse
    // NOTE: this.r is the radius so we must mult it by 2 for the with and height
    colorMode(HSB);
    noStroke();
    fill(this.color);
    ellipse(this.pos.x + this.offsetForWebsiteX, this.pos.y + this.offsetForWebsiteY, this.r * 2, this.r * 2);
  }

  // This.grow will inc this.r by this.growRate if the circle is still growing
  this.grow = function() {
    if (!this.bounds()) {
      this.growing = false;
    }
    // If the circle is still growing and this.r < the MAXSIZE ->
    if (this.growing && this.r < MAXSIZE) {
      // this.r = this.r + this.growRate
      this.r += this.growRate;
    }
  }

  // this function will return false if the circle is touching another circle or a wall
  this.bounds = function() {
    // Check to see if the circle is touching a wall
    var tempX = this.target.x + this.r + this.buffer;
    var tempY = this.target.y + this.r + this.buffer;
    if (tempX > width || tempY > height) return false;
    var tempX = this.target.x - this.r - this.buffer;
    var tempY = this.target.y - this.r - this.buffer;
    if (tempX < 0 || tempY < 0) return false;

    // Check to see if 'this' is touching any other circle
    for (var i = 0; i < circles.length; i++) {
      // Check circle at i
      // Get the distance between 'this' and circle c
      var c = circles[i];
      var d = roughDistance(this.target.x, this.target.y, c.target.x, c.target.y)
      // IF D > 1 // NOTE: 'this' is in the circle array so it will
      // check itself so the distance from itself to itself will be 0
      // thus will stop growing
      if (d > 1) {
        // if the distance is less than both radius + the buffer then return false
        if (d < this.r + c.r + this.buffer) {
          return false;
        }
      }
    }
    return true;
  }
}

function addCircle() {
  // Get a random index and it's x and y
  var s = floor(random(validArray.length))
  var x = validArray[s].x;
  var y = validArray[s].y;
  // Assume valid spot
  var valid = true;
  // Check if there is a circle in that spot
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = roughDistance(x, y, c.target.x, c.target.y)
    // Stop after one conflict
    if (d - c.buffer < c.r) {
      valid = false;
      break;
    }
  }
  let temp = new Circle(x, y)
  temp.updateColor();
  // If valid push a new circle to the array
  if (valid) {
    circles.push(temp)
  }
  return valid;
}

function swapC() {
  // Pick two cirlcles
  var tempA = circles[floor(random(circles.length))];
  var tempB = circles[floor(random(circles.length))];
  // If they are the same size +- some difference
  // Swap target locations
  if (abs(tempA.r - tempB.r) <= 2) {
    var tempC = tempA.target;
    tempA.target = tempB.target;
    tempB.target = tempC;
  }
}