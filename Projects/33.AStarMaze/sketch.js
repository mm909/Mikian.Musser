var cellWidth = 25;
var maze;
var aStar;
var drawingMaze = true;
var resetButton;
var resetingMaze = false;

function setup() {
  var canvas = createCanvas(500, 500)
  canvas.parent("canvasContainer");
  // resetButton = createButton("Reset");
  // resetButton.mousePressed(resetMaze)
  // resetButton.parent("ButtonCotainer");
  resetMaze();
}

function resetMaze() {
  strokeWeight(1)
  maze = new Maze(cellWidth);
  drawingMaze = true;
  resetingMaze = true;
  aStar = new AStar(maze);
  resetingMaze = false;
}

function draw() {
  background(151)
  if(drawingMaze){
    drawingMaze = maze.update();
    if(!drawingMaze){
      aStar = new AStar(maze);
    } else {
    }
  } else {
    maze.update()
    aStar.update();
  }
}
