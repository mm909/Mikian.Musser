var maze;
var aStar;
var drawingMaze = true;
var resetButton;
var resetingMaze = false;

function setup() {
  createCanvas(500,500)
  resetButton = createButton("Reset");
  resetButton.mousePressed(resetMaze)
  resetMaze();
}

function resetMaze() {
  strokeWeight(1)
  maze = new Maze();
  drawingMaze = true;
  resetingMaze = true;
  maze = new Maze();
  aStar = new AStar(maze);
  resetingMaze = false;
}

function draw() {
  background(151)
  if(drawingMaze){
    drawingMaze = maze.update();
    if(!drawingMaze){
      for (var i = 0; i < maze.grid.length; i++) {
        maze.grid[i].neighbors = [];
      }
      aStar = new AStar(maze.grid);
    } else {
    }
  } else {
    maze.update()
    aStar.update();
  }
}
