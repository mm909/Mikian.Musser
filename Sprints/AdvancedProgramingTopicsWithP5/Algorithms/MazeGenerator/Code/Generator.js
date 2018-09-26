var cellWidth = 25;
var maze;

function setup() {
  createCanvas(500, 500)
  maze = new Maze(cellWidth);
}

function draw() {
  background(151)
  maze.update()
}