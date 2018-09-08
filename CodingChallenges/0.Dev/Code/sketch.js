var maze;
var aStar;
var drawingMaze = true;

function setup() {
  createCanvas(500,500)
  maze = new Maze();
}

function draw() {
  background(151)
  if(drawingMaze){
    drawingMaze = maze.update();
    if(!drawingMaze){
      aStar = new AStar(maze);
    }
  } else {
    maze.update()
    aStar.update();
  }
}
