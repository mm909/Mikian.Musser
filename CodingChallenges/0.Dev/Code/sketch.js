// F(n) = g(n) + h(n)
// 0: normal
// 1: OS
// 2: CS
// 3: Path
// 4: End
// 5: Start
var cols = 25;
var rows = 25;
var grid = [];
var w, h;
var path = [];

var closedSet = [];
var openSet = [];
var Start;
var End;

var wallChance = 0.25;

function setup() {
  createCanvas(500, 500);
  console.log("A*");
  w = width / cols;
  h = height / rows;

  for (var i = 0; i < rows; i++) {
    grid[i] = new Array(cols)
    for (var j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }

  Start = grid[0][0];
  Start.wall = false;
  End = grid[rows - 1][cols - 1];
  End.wall = false;
  openSet.push(Start);
}

function draw() {
  background(151)

  if(openSet.length>0){
    var li = 0;
    for (var i = 0; i < openSet.length; i++) {
      if(openSet[i].f < openSet[li].f) {li = i}
    }
    var current = openSet[li]

    path = [];
    var temp = current;
    path.push(temp)
    while(temp.prev){
      temp.c = 3;
      path.push(temp.prev)
      temp = temp.prev;
    }

    if(current === End){
      console.log("done");
      noLoop();
    }

    removeFromArray(openSet,current)
    closedSet.push(current);
    current.c = 2;

    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if(!closedSet.includes(neighbor) && !neighbor.wall){
        var tempG = current.g + 1;
        if(openSet.includes(neighbor)){
          if(tempG < neighbor.g){
            neighbor.g = tempG;
          }
        } else {
          neighbor.g = tempG;
          openSet.push(neighbor)
          neighbor.c = 1;
        }
        neighbor.h = TaxiH(neighbor,End)
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.prev = current;
      }
    }

  } else {
    // no sol
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      fill(255)
      noStroke();
      grid[i][j].show();
    }
  }

  for (var i = 0; i < openSet.length; i++) {
    fill(100,255,100)
    noStroke();
    var c = openSet[i];
    rect(c.i * w, c.j * h, w - 1, h - 1);
  }

  for (var i = 0; i < closedSet.length; i++) {
    fill(255,100,100)
    noStroke();
    var c = closedSet[i];
    rect(c.i * w, c.j * h, w - 1, h - 1);
  }

  for (var i = 0; i < path.length; i++) {
    fill(100,100,255)
    noStroke();
    var c = path[i];
    rect(c.i * w, c.j * h, w - 1, h - 1);
  }

  fill(255,255,0)
  noStroke();
  rect(Start.i * w, Start.j * h, w - 1, h - 1);
  fill(255,0,255)
  noStroke();
  rect(End.i * w, End.j * h, w - 1, h - 1);

}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.g = 0;
  this.h = 0;
  this.f = 0;
  this.c = 0;
  this.prev = null;
  this.neighbors = [];
  this.wall = false;

  if(random(1) < wallChance){
    this.wall = true;
  }

  this.show = function() {
    noStroke();
    if(this.wall){
      fill(0)
    }
    rect(this.i * w, this.j * h, w, h);
  }

  this.addNeighbors = function(grid){
    var i = this.i;
    var j = this.j;
      if(i<rows-1)
      this.neighbors.push(grid[i+1][j])
      if(i>0)
      this.neighbors.push(grid[i-1][j])
      if(j<cols-1)
      this.neighbors.push(grid[i][j+1])
      if(j>0)
      this.neighbors.push(grid[i][j-1])
      if(i > 0 && j > 0)
      this.neighbors.push(grid[i-1][j-1])
      if(i > 0 && j < cols - 1)
      this.neighbors.push(grid[i-1][j+1])
      if(i < rows-1  && j > 0)
      this.neighbors.push(grid[i+1][j-1])
      if(i < rows-1 && j < cols - 1)
      this.neighbors.push(grid[i+1][j+1])

      // if(i > 0 && j > 0){
      //   if( i < 0 && i < rows - 1 && j > 0 && j < cols - 1){
      //     if(!grid[i+1][j].wall && !grid[i][j-1].wall){
      //       this.neighbors.push(grid[i-1][j-1]) // TOP LEFT
      //     }
      //   } else {
      //     this.neighbors.push(grid[i-1][j-1])
      //   }
      // }
      //
      // if(i > 0 && j < cols - 1){
      //   if( i < 0 && i < rows - 1 && j > 0 && j < cols - 1){
      //     if(!grid[i+1][j].wall && !grid[i][j+1].wall){
      //       this.neighbors.push(grid[i-1][j+1]) // TOP RIGHT
      //     }
      //   } else {
      //     this.neighbors.push(grid[i-1][j+1])
      //   }
      // }
      //
      // if(i < rows-1  && j > 0){
      //   if( i < 0 && i < rows - 1 && j > 0 && j < cols - 1){
      //     if(!grid[i-1][j].wall && !grid[i][j-1].wall){
      //       this.neighbors.push(grid[i+1][j-1]) // BOTTOM LEFT
      //     }
      //   } else {
      //     this.neighbors.push(grid[i+1][j-1]) // BOTTOM LEFT
      //   }
      // }
      //
      // if(i < rows-1  && j > 0){
      //   if( i < 0 && i < rows - 1 && j > 0 && j < cols - 1){
      //     if(!grid[i-1][j].wall && !grid[i][j+1].wall){
      //       this.neighbors.push(grid[i+1][j+1]) // BOTTOM RIGHT
      //     }
      //   } else {
      //     this.neighbors.push(grid[i+1][j+1]) // BOTTOM RIGHT
      //   }
      // }

  }
}

function EH(start, goal) {
  return dist(start.i, start.j, goal.i, goal.j)
}

function TaxiH(start, goal) {
  return abs(start.i - goal.i) + abs(start.j - goal.j)
}

function removeFromArray(a,ele){
  for (var i = a.length-1; i >= 0; i--) {
    if(a[i] == ele){
      a.splice(i,1)
    }
  }
}
