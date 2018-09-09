function Maze(cellWidth) {

  // Object Vars
  this.grid = [];
  this.stack = [];
  this.w = cellWidth;
  this.rows = height / this.w;
  this.cols = width  / this.w;
  this.finished = false;
  this.current = null;

  // Create Cell Array
  // NOTE: This is a 1D Array
  for(var i = 0; i < this.rows; i++){
    for(var j = 0; j < this.cols; j++){
      cell = new Cell(i,j,this.w);
      this.grid.push(cell);
    }
  }

  // Create Starting Point
  this.current = this.grid[floor(random(this.grid.length))];
  this.stack.push(this.current);
  this.current.visited = true;
  this.current.stack = true;

  // Run this each frame
  this.update = function(){
    // Show Cells
    for(var i = 0; i < this.grid.length; i++){
      this.grid[i].show();
    }
    // If not finished
    if(!this.finished){
      // Show the current cell as a different color
      this.current.showCurrent();
      // If there are neighbors of current left
      var next = this.current.checkNeighbors();
      if(next) {
        // Look at neighbor -> Mark as visited and add to the stack.
        next.visited = true;
        this.stack.push(next);
        next.stack = true;
        // Remove the wall between current and the neighbor we moved to
        this.current.removeWalls(next);
        // Offically move to the next Cell
        this.current = next;
      } else if (this.stack.length > 0) {
        // If no neighbors, pop off the stack and go backwards
        this.current = this.stack.pop();
        this.current.stack = false;
      } else {
        // At the end of everything -> Remove all colors -> Alg is done
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
}
