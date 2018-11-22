// Mikian Musser
// https://www.youtube.com/watch?v=QHEQuoIKgNE
// https://p5js.org/reference/
console.log("/CirclePackingM-v2/sketch.js");

// MAXSIZE => The max radius of a circle
// CIRCLESEACHFRAME => The numbers of circles that are spawned each frame
// ATTEMPTS => The nuber of tries to spawn a circle each frame.
// MAX => Max number of circles possible
var MAXSIZE = 50;
var CIRCLESEACHFRAME = 10;
var ATTEMPTS = CIRCLESEACHFRAME * 10;
var MAX = 1000;

// M => Holds the picture of an M
// validArray => Hold valid spots to place a clircle based on M picture
// circle => Array to hold the cirlces
// Finished => Var to tell if we have finished packing the space yet
var M;
var validArray = [];
var circles = [];
var finished = false;

// firstTime => If its the first time to a cool animation
// swapChance => How likely are cirlce to swap with eachother
var firstTime = true;
var swapChance = 100;

// Load the image of an M into the program
function preload(){
    M = loadImage("https://image.ibb.co/mYwzje/m.jpg");
}

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("canvasContainer")
  buildValidArray();
  colorMode(RGB)

  background(239,239,239)
  colorMode(HSB);

}

function draw() {
  // Draw the background
    colorMode(RGB)

    background(239,239,239,80)
    colorMode(HSB);

  addCircles();
  // swapC();
  // For each circle update, grow, and show.
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].grow();
    circles[i].show();
  }
}

function addCircles() {
  // circlesThisFrame keeps track of how many circles have sucessfully been spwaned this frame.
  // attemptsToAddCircle keepts track of how many attempts to add a circle have been made.
  var circlesThisFrame = 0;
  var attemptsToAddCircle = 0;
  // If the number of cirlcs is less than the max and we are not finished then ->
  if (circles.length < MAX && !finished) {
    // While the # of circles this frame < CIRCLESEACHFRAME
    while (circlesThisFrame < CIRCLESEACHFRAME) {
      // inc attempts
      attemptsToAddCircle++;
      // If we sucessfully add a circle then inc circlesThisFrame
      if (addCircle()) {
        circlesThisFrame++;
      }
      // If we try too many times (attemptsToAddCircle > ATTEMPTS)
      // Then we are done trying to pack circles
      if (attemptsToAddCircle > ATTEMPTS) {
        finished = true;
        // Break from while loop
        break;
      }
    }
  }
}

function  buildValidArray(){
  // Load pixels and itterate through them
  M.loadPixels();
  for (var i = 0; i < M.pixels.length; i+=4) {
    var sum = 0;
    sum += M.pixels[i+0];
    sum += M.pixels[i+1];
    sum += M.pixels[i+2];
    sum /= 3;
    // ^ Get the pixel's brightness
    // If over a threashold => Add it to the array
    if(sum < 150){
      var temp = floor((i/4));
      var tempX = temp % M.width;
      var tempY = floor(temp / M.height);
      var p = createVector(tempX, tempY);
      validArray.push(p);
    }
  }
}
