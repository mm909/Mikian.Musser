function Maze() {
  this.w = 20;
  this.grid = [];
  this.current;
  this.stack = [];
  this.finished = false;
  this.rows = height / this.w;
  this.cols = width  / this.w;

  for(var i = 0; i < this.rows; i++){
    for(var j = 0; j < this.cols; j++){
      // [rows][cols]
      cell = new Cell(i,j,this.w);
      this.grid.push(cell);
    }
  }

  this.current = this.grid[floor(random(this.grid.length))];
  this.current.visited = true;
  this.stack.push(this.current);
  this.current.stack = true;

  this.update = function(){
    for(var i = 0; i < this.grid.length; i++){
      this.grid[i].show();
    }
    if(!this.finished){
      this.current.showCurrent();
      var next = this.current.checkNeighbors();
      if(next) {
        next.visited = true;
        this.stack.push(next);
        next.stack = true;
        this.removeWalls(this.current, next);
        this.current = next;
      } else if (this.stack.length > 0) {
        this.current = this.stack.pop();
        this.current.stack = false;
      } else {
        for(var i = 0; i < this.grid.length; i++){
          this.grid[i].visited = false;
          this.grid[i].stack   = false;
        }
        this.finished = true;
      }
      return true;
    } else {
      return false;
    }
  }

  this.removeWalls = function(c,n){
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

}
