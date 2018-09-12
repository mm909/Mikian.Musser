function AStar(Grid) {
  console.log("A*")

  this.cols = Grid.cols;
  this.rows = Grid.rows;
  this.oGrid = Grid;
  this.maze = [];
  this.w = floor(width / this.cols);
  this.h = floor(height / this.rows);
  this.path = [];

  this.closedSet = [];
  this.openSet = [];
  this.Start;
  this.End;

  this.Hide = false;

  this.addNeighbors = function(cell) {
    var i = cell.i; // Rows
    var j = cell.j; // cols
    cell.neighbors = [];
    // Add to neighbor array if wall is not there
    if(i>0 && !this.maze[i][j].walls[0]){
      cell.neighbors.push(this.maze[i-1][j])
    }
    if(j<this.cols-1 && !this.maze[i][j].walls[1]){
      cell.neighbors.push(this.maze[i][j+1])
    }
    if(i<this.rows-1 && !this.maze[i][j].walls[2]){
      cell.neighbors.push(this.maze[i+1][j])
    }
    if(j>0 && !this.maze[i][j].walls[3]) {
      cell.neighbors.push(this.maze[i][j-1])
    }
  }

  // Convert 1D Array to 2D array
  for (var i = 0; i < this.rows; i++) {
    this.maze[i] = new Array(this.cols)
    for (var j = 0; j < this.cols; j++) {
      this.maze[i][j] = Grid.grid[i * this.rows + j]
    }
  }

  // Create neighbor array
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.addNeighbors(this.maze[i][j]);
    }
  }

  // Create Starting/Ending point and start alg
  this.Start = this.maze[0][0];
  this.End = this.maze[this.rows - 1][this.cols - 1];
  this.openSet.push(this.Start);

  // Runs each frame
  this.update = function() {
    if(this.openSet.length>0){
      // Find the shortest F -> Total distance travled + estimated distance left
      var li = 0;
      for (var i = 0; i < this.openSet.length; i++) {
        if(this.openSet[i].f < this.openSet[li].f) {li = i}
      }
      // Make that one the current
      var current = this.openSet[li]

      // Draw the current path by tracing backwards
      this.path = [];
      var temp = current;
      this.path.push(temp)
      while(temp.prev){
        this.path.push(temp.prev)
        temp = temp.prev;
      }

      // If current is == End then finish
      if(current === this.End){
        console.log("done");
        this.Hide = true;
      }

      // Remove the current from the openSet and add it to the closed set
      removeFromArray(this.openSet,current)
      this.closedSet.push(current);

      // Get list of neighbors
      var neighbors = current.neighbors;
      // For each neighbors -> Do stuff
      for (var i = 0; i < neighbors.length; i++) {
        // Get the first neighbors of current
        var neighbor = neighbors[i];
        // If the neighbors is not in the closed set (has not alread be visited)
        if(!this.closedSet.includes(neighbor)){
          // G = total distance travled -> Add one because we have moved 1 from current
          var tempG = current.g + 1;
          // Assume that this path is longer than the old path
          var newPath = false;
          // if neighbor is in the openset check to see if this G is less than its current G
          if(this.openSet.includes(neighbor)){
            // If this G is better then update the G
            if(tempG < neighbor.g){
              neighbor.g = tempG;
              newPath = true;
            }
          } else {
            // This neighbor is not in the openset so set G and push to the open set
            neighbor.g = tempG;
            newPath = true;
            this.openSet.push(neighbor)
          }
          // If the newG < oldG then calc H and update F else ignore
          if(newPath){
            // Choose a heuristic
            // neighbor.h = TaxiH(neighbor,End)
            neighbor.h = EH(neighbor,this.End)
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.prev = current;
          }
        }
      }
    }
    // Draw squares in openSet and closedSet
    if(!this.Hide){
      for (var i = 0; i < this.openSet.length; i++) {
        fill(100,255,100,100)
        noStroke();
        var c = this.openSet[i];
        rect(c.x, c.y, c.w, c.w);
      }
      for (var i = 0; i < this.closedSet.length; i++) {
        fill(255,100,100,100)
        noStroke();
        var c = this.closedSet[i];
        rect(c.x, c.y, c.w, c.w);
      }
    } else {
      noLoop();
    }

    // Starting and ending points
    fill(255,255,0,150)
    noStroke();
    rect(this.Start.x, this.Start.y , this.Start.w, this.Start.w);
    fill(255,0,255,150)
    noStroke();
    rect(this.End.x, this.End.y, this.End.w, this.End.w);

    // Line to connect the path
    beginShape();
    for (var i = 0; i < this.path.length; i++) {
      var c = this.path[i];
      fill(100,100,255,100)
      strokeWeight(5)
      vertex(c.x + c.w/2, c.y + c.w/2)
    }
    noFill();
    stroke(255)
    endShape();
  }
}

 // Heuristic functions -> EH and TaxiH
function EH(start, goal) {
  return dist(start.i, start.j, goal.i, goal.j)
}

function TaxiH(start, goal) {
  return abs(goal.i - start.i) + abs(goal.j - start.j)
}

function removeFromArray(a,ele){
  for (var i = a.length-1; i >= 0; i--) {
    if(a[i] == ele){
      a.splice(i,1)
    }
  }
}
