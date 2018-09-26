var cellWidth = 25;
var maze;
var drawingMaze = true;

function setup() {
  createCanvas(500, 500)
  maze = new Maze(cellWidth);
}

function draw() {
  background(151)
  if (drawingMaze) {
    drawingMaze = maze.update();
    if (!drawingMaze) {
      aStar = new AStar(maze);
    } else {}
  } else {
    maze.update()
    aStar.update();
  }
}