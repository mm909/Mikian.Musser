// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI
// https://p5js.org/reference/

// Purple Rain topics
// > Map function
// > Floor function
// > Applying force function
// > Acc, vel, pos vectors
// > Color Modes
// > Vectors
// > OOP
// > Arrays
// > Push and splice
// > Random
// > Update/Show functions
// > P5.js basics

// 1. Array to hold our fireworks
// 2. How many fireworks on the screen
// 3. On average, how big should this firework be?
var fireworks = []; // 1
var count = 50; // 2
var baseSize = 6; // 3

// 1. Setup runs before the draw loop starts
// 2. Make a canvas to draw on.
// 3. Create 'count' number of fireworks
// 4. Get a random color.
// 5. Get a random size based on the 'baseSize'
// 6. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 7. create a vector pointing up
//    the vector is at a random length (speed)
// 8. for each firework, apply that 'random' force
// 9. draw the starting background
function setup() { // 1
  createCanvas(500, 500); // 2

  for (var i = 0; i < count; i++) { // 3
    var color = random(255); // 4
    var newSize = random(baseSize - 2, baseSize + 2); // 5
    fireworks[i] = new Firework(random(width), height - newSize, newSize, color); // 6
    var force = createVector(0, random(-9, -5)); // 7
    fireworks[i].applyForce(force); // 8
  }

  background(25); // 9
}

// 1. Draw loop runs once each frame (30 times a second)
// 2. colorMode is set to take in RGB values (this is the normal setting)
// 3. Draw a black backgroun with alot of alpha. (this makes the trails)
//    Try using other alpha values and see what happens
//    Alpha - 255 = opaque, 0 = transparent
// 4. For each firework, do the follwing -
// a. Update the firework
// b. Show the firework
// 5. For each firework, do the following
// a. Check to see if the firework can be deleted
// b. if so, splice it from the array
// 6. if the number of fireworks is less than the 'count'
//    aka. some have been deleted -> Then we should make some new ones
// 7. Get a random color.
// 8. Get a random size based on the 'baseSize'
// 9. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 10. create a vector pointing up
//    the vector is at a random length (speed)
// 11. for each firework, apply that 'random' force
// 12. push that new firework to the array

function draw() { // 1
  colorMode(RGB) // 2
  background(0, 25); // 3

  for (var i = 0; i < fireworks.length; i++) { // 4
    fireworks[i].update(); // a
    fireworks[i].show(); // b
  }

  for (var i = 0; i < fireworks.length; i++) { // 5
    if (fireworks[i].del) { // a
      fireworks.splice(i, 1) // b
    }
  }

  if (fireworks.length < count) { // 6
    var color = random(255); // 7
    var newSize = random(baseSize - 2, baseSize + 2); // 8
    var fw = new Firework(random(width), height - newSize, newSize, color); // 9
    var force = createVector(0, random(-9, -5)); // 10
    fw.applyForce(force); // 11
    fireworks.push(fw) // 12
  }
}