// F(n) = g(n) + h(n)
// 0: normal
// 1: OS
// 2: CS
// 3: Start
// 4: End
var cols = 5;
var rows = 5;
var grid = [];
var w, h;

var closedSet = [];
var openSet = [];
var Start;
var End;

function setup() {
  createCanvas(500, 500);
  console.log("A*");
  w = width / cols;
  h = height / rows;
  for (var i = 0; i < rows; i++) {
    grid[i] = new Array(cols)
    for (var j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j);
      grid[i][j].g = Infinity;
      grid[i][j].f = Infinity;
    }
  }
  Start = grid[0][0];
  End = grid[rows - 1][cols - 1];
  Start.g = 0;
  Start.f = 0;
  Start.h = EH(Start, End)
  Start.c = 1;
  openSet.push(Start);
}

function draw() {
  background(151)

  // current := the node in openSet having the lowest fScore[] value
  var current grid[0][0];
  var record = Infinity;
  for (var i = 0; i < openSet.length; i++) {
    if (current.f > openSet[i].f) {
      current = openSet[i]
    }
  }

  if (current == End) {
    // End
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j].show();
    }
  }
}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.g = 0;
  this.h = 0;
  this.f = 0;
  this.c = 0;
  this.cameFrom = [];
  this.show = function() {
    if (this.c == 0) {
      fill(255)
    } else if (this.c == 1) {
      fill(100, 255, 100)
    }
    rect(this.i * w, this.j * h, w - 1, h - 1);
  }
}

function EH(start, goal) {
  return dist(start.i, start.j, goal.i, goal.j)
}