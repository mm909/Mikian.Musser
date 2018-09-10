//            (i - 1,j)
// (i, j - 1) (i    ,j) (i, j + 1)
//            (i + 1,j)
// Top,  Right, Bottom, Left
// [Row][Col]

function Cell(i,j,w) {
  this.i = i;
  this.j = j;
  this.w = w;
  this.x = j * w;
  this.y = i * w;

  this.g = 0;
  this.h = 0;
  this.f = 0;
  this.prev = null;

  this.neighbors = [];

  this.visited = false;
  this.stack   = false;
  this.walls   = [true, true,  true,   true];

  this.showCurrent = function(){
    fill(255,255,0,255);
    noStroke();
    rect(this.j * this.w, this.i * this.w, this.w, this.w);
  }

  this.showAStar = function(){
    fill(255)
    rect(this.x, this.y, this.w, this.w);
  }

  this.show = function() {
    // Pick line color
    if(maze.finished){
      stroke(0,0,0);
    } else {
      stroke(255);
    }
    fill(0);

    // Draw lines if stil exists
    if(this.walls[0])
    line(this.x         , this.y         , this.x + this.w, this.y         );
    if(this.walls[1])
    line(this.x + this.w, this.y         , this.x + this.w, this.y + this.w);
    if(this.walls[2])
    line(this.x + this.w, this.y + this.w, this.x         , this.y + this.w);
    if(this.walls[3])
    line(this.x         , this.y + this.w, this.x         , this.y         );

    // Color the cell a color if in stack vs visited
    if(this.stack) {
      fill(255,0,255,150);
      noStroke();
      rect(this.j * this.w, this.i * this.w, this.w, this.w);
    } else if(this.visited) {
      fill(0,255,255,150);
      noStroke();
      rect(this.j * this.w, this.i * this.w, this.w, this.w);
    }
  }

  this.checkNeighbors = function() {
      // Create array of neighbors
      var neighbors = [];
      var top    = maze.grid[this.convert(i - 1, j     )];
      var right  = maze.grid[this.convert(i    , j + 1 )];
      var bottom = maze.grid[this.convert(i + 1, j     )];
      var left   = maze.grid[this.convert(i    , j - 1 )];

      // Add each neighbor to array if real and not visited
      if(top && !top.visited){
        neighbors.push(top);
      }
      if(right && !right.visited){
        neighbors.push(right);
      }
      if(bottom && !bottom.visited){
        neighbors.push(bottom);
      }
      if(left && !left.visited){
        neighbors.push(left);
      }

      // Pick a random neighbor to return
      if(neighbors.length > 0) {
        var r = floor(random(neighbors.length));
        return neighbors[r];
      } else {
        return undefined;
      }
  }

  this.removeWalls = function(n) {
    if(this.i - n.i == 1){
      this.walls[0] = false;
      n.walls[2]    = false;
    }
    if(this.j - n.j == -1){
      this.walls[1] = false;
      n.walls[3]    = false;
    }
    if(this.i - n.i == -1){
      this.walls[2] = false;
      n.walls[0]    = false;
    }
    if(this.j - n.j == 1){
      this.walls[3] = false;
      n.walls[1]    = false;
    }
  }

  this.convert = function(i, j) {
    if( i < 0 || j < 0 || i > maze.rows - 1 || j > maze.cols - 1){
      return -1;
    } else {
      return i * maze.cols + j;
    }
  }
}
