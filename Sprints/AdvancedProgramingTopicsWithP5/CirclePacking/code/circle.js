
// This is a circle object
// It takes an x and a y for its location
function Circle(x,y) {
  // this.pos is a vector with the obejct's pos(x,y)
  this.pos = createVector(x,y);

  // this.r is the circle's radius
  // this.growrate is how fast the cirlce grows
    // Amount each frame
  // this.growing is a bool var for it the circle should grow or not
  // this.buffer is how much black space should be allowed between circles
  this.r = 1;
  this.growRate = 1.5;
  this.growing = true;
  this.buffer = 5;

  // this.color is the color of the circle
  this.color = color(random(360),255,255)

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
    ellipse(this.pos.x, this.pos.y, this.r * 2,this.r * 2);
  }

  // This.grow will inc this.r by this.growRate if the circle is still growing
  this.grow = function() {
    if(!this.bounds()) {
      this.growing = false;
    }
    // If the circle is still growing and this.r < the MAXSIZE ->
    if(this.growing && this.r < MAXSIZE){
      // this.r = this.r + this.growRate
      this.r += this.growRate;
    }
  }

  // this function will return false if the circle is touching another circle or a wall
  this.bounds = function() {
    // Check to see if the circle is touching a wall
    var tempX = this.pos.x + this.r + this.buffer;
    var tempY = this.pos.y + this.r + this.buffer;
    if(tempX > width || tempY > height) return false;
    var tempX = this.pos.x - this.r - this.buffer;
    var tempY = this.pos.y - this.r - this.buffer;
    if(tempX < 0 || tempY < 0) return false;

    // Check to see if 'this' is touching any other circle
    for (var i = 0; i < circles.length; i++) {
      // Check circle at i
      // Get the distance between 'this' and circle c
      var c = circles[i];
      var d = dist(this.pos.x, this.pos.y, c.pos.x, c.pos.y)
      // IF D > 1 // NOTE: 'this' is in the circle array so it will
      // check itself so the distance from itself to itself will be 0
      // thus will stop growing
      if(d > 1){
        // if the distance is less than both radius + the buffer then return false
        if(d < this.r + c.r + this.buffer) {
          return false;
        }
      }
    }
    return true;
  }
}

function addCircle() {
  var x = random(width);
  var y = random(height);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x,y,c.pos.x,c.pos.y)
    if(d - c.buffer < c.r) {
      valid = false;
    }
  }

  if(valid){
    circles.push(new Circle(x,y))
  }

  return valid;
}
