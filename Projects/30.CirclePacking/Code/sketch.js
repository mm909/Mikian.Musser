var circles = [];
var MAXSIZE = 15;
var validArray = [];
var M;
var CIRCLESEACHFRAME = 10;
var MAX = 500;
var ATTEMPTS = CIRCLESEACHFRAME * 10;
var finished = false;
var firstTime = true;
var swapChance = 100;

function preload(){
  M = loadImage("https://image.ibb.co/mYwzje/m.jpg");
}

function setup() {
  createCanvas(500,500);
  M.loadPixels();
  for (var i = 0; i < M.pixels.length; i+=4) {
    var sum = 0;
    sum += M.pixels[i+0];
    sum += M.pixels[i+1];
    sum += M.pixels[i+2];
    sum /= 3;
    if(sum < 150){
      var temp = floor((i/4));
      var tempX = temp % M.width;
      var tempY = floor(temp / M.height);
      var p = createVector(tempX, tempY);
      validArray.push(p);
    }
  }
}

function draw() {
  background(0,0,0)
  var count = 0;
  var a = 0;
  if(circles.length < MAX && !finished){
    while (count <  CIRCLESEACHFRAME){
      a++;
      if(addCircle()) {count++}
      if(a > ATTEMPTS){finished = true; break; }
    }
  } else {
    if(firstTime){
      for (var i = 0; i < circles.length; i++) {
        circles[i].applyForce(p5.Vector.random2D().setMag(10));
      }
    } else {
      if(random(100) < swapChance){swapC()}
    }
    firstTime = false;
  }
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].grow();
    circles[i].show();
  }
}

function addCircle() {
  var s = floor(random(validArray.length))
  var x = validArray[s].x;
  var y = validArray[s].y;
  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x,y,c.target.x,c.target.y)
    if(d - c.buffer < c.r) { valid = false; }
  }
  if(valid){circles.push(new Circle(x,y))}
  return valid;
}

function swapC() {
  var tempA = circles[floor(random(circles.length))];
  var tempB = circles[floor(random(circles.length))];
  if(abs(tempA.r - tempB.r) <= 0){
    var tempC = tempA.target;
    tempA.target = tempB.target;
    tempB.target = tempC;
  }
}
