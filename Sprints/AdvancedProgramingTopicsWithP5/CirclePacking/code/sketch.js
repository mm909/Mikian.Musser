// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=QHEQuoIKgNE
// https://p5js.org/reference/

var MAXSIZE = 15;
var CIRCLESEACHFRAME = 10;
var ATTEMPTS = CIRCLESEACHFRAME * 10;
var MAX = 500;

var circles = [];
var finished = false;
var firstTime = true;
var swapChance = 100;

function setup(){
  createCanvas(500,500);
}

function draw(){
  background(0,0,0)
  var circlesThisFrame = 0;
  var attemptsToAddCircle = 0;
  if(circles.length < MAX && !finished){
    while (circlesThisFrame < CIRCLESEACHFRAME){
      attemptsToAddCircle++;
      if(addCircle()) {
        circlesThisFrame++;
      }
      if(attemptsToAddCircle > ATTEMPTS){
        finished = true;
        break;
      }
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
  var x = random(width);
  var y = random(height);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x,y,c.target.x,c.target.y)
    if(d - c.buffer < c.r) {
      valid = false;
    }
  }

  if(valid){
    circles.push(new Circle(x,y))
  }

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
