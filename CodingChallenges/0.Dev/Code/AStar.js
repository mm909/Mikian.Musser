function AStar(Grid) {
  console.log("A*")
  this.cols = Grid.cols;
  this.rows = Grid.rows;
  this.oGrid = Grid;
  this.maze = [];
  this.w = width / this.cols;
  this.h = height / this.rows;
  this.path = [];

  this.closedSet = [];
  this.openSet = [];
  this.Start;
  this.End;

  this.Hide = false;

  this.addNeighbors = function(cell) {
    var i = cell.i; // Rows
    var j = cell.j; // cols
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

  for (var i = 0; i < this.rows; i++) {
    this.maze[i] = new Array(this.cols)
    for (var j = 0; j < this.cols; j++) {
      this.maze[i][j] = Grid.grid[i*this.rows + j]
    }
  }

  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.addNeighbors(this.maze[i][j]);
    }
  }

  this.Start = this.maze[0][0];
  this.End = this.maze[this.rows - 1][this.cols - 1];
  this.openSet.push(this.Start);


  this.update = function() {
    if(this.openSet.length>0){

        var li = 0;
        for (var i = 0; i < this.openSet.length; i++) {
          if(this.openSet[i].f < this.openSet[li].f) {li = i}
        }
        var current = this.openSet[li]

        this.path = [];
        var temp = current;
        this.path.push(temp)
        while(temp.prev){
          this.path.push(temp.prev)
          temp = temp.prev;
        }

        if(current === this.End){
          console.log("done");
          // noLoop();
          this.Hide = true;
        }

        removeFromArray(this.openSet,current)
        this.closedSet.push(current);
        current.c = 2;

        var neighbors = current.neighbors;
        for (var i = 0; i < neighbors.length; i++) {
          var neighbor = neighbors[i];
          if(!this.closedSet.includes(neighbor)){
            var tempG = current.g + 1;
            var newPath = false;
            if(this.openSet.includes(neighbor)){
              if(tempG < neighbor.g){
                neighbor.g = tempG;
                newPath = true;
              }
            } else {
              neighbor.g = tempG;
              newPath = true;
              this.openSet.push(neighbor)
            }
            if(newPath){
              // neighbor.h = TaxiH(neighbor,End)
              neighbor.h = EH(neighbor,this.End)
              neighbor.f = neighbor.g + neighbor.h;
              neighbor.prev = current;
            }
          }
        }
      }
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
      // noLoop();
      this.openSet = [];
    }

    fill(255,255,0,150)
    noStroke();
    rect(this.Start.x, this.Start.y , this.Start.w, this.Start.w);
    fill(255,0,255,150)
    noStroke();
    rect(this.End.x, this.End.y, this.End.w, this.End.w);

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
