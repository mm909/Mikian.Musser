var w = 20;
var rows;
var cols;
var grid = [];
var current;
var stack = [];
var finished = false;

function setup() {
  var canvas = createCanvas(501, 501);
  canvas.parent("canvasContainer");
  rows = floor(height / w);
  cols = floor(width  / w);
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      // [rows][cols]
      cell = new Cell(i,j,w);
      grid.push(cell);
    }
  }
  current = grid[floor(random(grid.length))];
  current.visited = true;
  stack.push(current);
  current.stack = true;
}

function draw() {
  background(51);
  for(var i = 0; i < grid.length; i++){
    grid[i].show();
  }
  if(!finished){
    current.showCurrent();
    var next = current.checkNeighbors();
    if(next) {
      next.visited = true;
      stack.push(next);
      next.stack = true;
      removeWalls(current, next);
      current = next;
    } else if (stack.length > 0) {
      current = stack.pop();
      current.stack = false;
    } else {
      for(var i = 0; i < grid.length; i++){
        grid[i].visited = false;
        grid[i].stack   = false;
      }
      finished = true;
    }
  }


}

function removeWalls(c,n){
  if(c.j - n.j == -1){
    // Right
    c.walls[1] = false;
    n.walls[3] = false;
  }
  if(c.j - n.j == 1){
    // Left
    c.walls[3] = false;
    n.walls[1] = false;
  }
  if(c.i - n.i == -1){
    // Bottom
    c.walls[2] = false;
    n.walls[0] = false;
  }
  if(c.i - n.i == 1){
    // Top
    c.walls[0] = false;
    n.walls[2] = false;
  }
}

function convert(i, j) {
  if( i < 0 || j < 0 || i > rows - 1 || j > cols - 1){
    return -1;
  } else {
    return i * cols + j;
  }
}
