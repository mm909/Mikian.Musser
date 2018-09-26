// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=KkyIDI6rQJI
// https://p5js.org/reference/

// Purple Rain topics
// > Arrays
// > OOP
// > Random
// > Update/Show functions
// > P5.js basics

// Purple rain:
// Background: (230, 230, 250)
// Rain:       (138, 43,  226)

// 1. Create an array to hold our drops.
// 2. How many drops of rain?
var rain = []; // 1
var count = 300; // 2

// 1. Setup runs before the draw loop starts.
// 2. Make a canvas to draw on.
// 3. Add 'count' drops to our rain array
// 4. Create a new drop and add it to the rain array
function setup() { // 1
  createCanvas(500, 500); // 2
  for (var i = 0; i < count; i++) { // 3
    rain[i] = new drop(); // 4
  }
}

// 1. Draw runs aprox 30 times a second
//    Draw is like a while(true) loop
// 2. Draw the background - 'Clean the slate'
// 3. For each drop do the following
// 4. Update the drop's location (make the drop fall down)
// 5. Check to see if the drop is off the screen
// 6. Draw the drop
function draw() { // 1
  background(230, 230, 250); // 2
  for (var i = 0; i < rain.length; i++) { // 3
    rain[i].fall(); // 4
    rain[i].checkBounds(); // 5
    rain[i].show(); // 6
  }
}