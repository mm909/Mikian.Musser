// [Row][Col]

function Cell(i,j,w) {
  this.i = i;
  this.j = j;
  this.w = w;
  this.x = j * w;
  this.y = i * w;

  this.visited = false;
  this.stack   = false;

  //            Top,  Right, Bottom, Left
  this.walls = [true, true,  true,   true];

  //            (i - 1,j)
  // (i, j - 1) (i    ,j) (i, j + 1)
  //            (i + 1,j)

  this.checkNeighbors = function() {
      var neighbors = [];
      var top    = grid[convert(i - 1, j     )];
      var right  = grid[convert(i    , j + 1 )];
      var bottom = grid[convert(i + 1, j     )];
      var left   = grid[convert(i    , j - 1 )];

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

      if(neighbors.length > 0) {
        var r = floor(random(neighbors.length));
        return neighbors[r];
      } else {
        return undefined;
      }
  }

  this.showCurrent = function(){
    fill(255,255,0,255);
    noStroke();
    rect(this.j * this.w, this.i * this.w, this.w, this.w);
  }


  this.show = function() {
    if(finished){
      stroke(0,255,0);
    } else {
      stroke(255);
    }
    fill(0);

    // Top,  Right, Bottom, Left
    if(this.walls[0])
    line(this.x         , this.y         , this.x + this.w, this.y         );
    if(this.walls[1])
    line(this.x + this.w, this.y         , this.x + this.w, this.y + this.w);
    if(this.walls[2])
    line(this.x + this.w, this.y + this.w, this.x         , this.y + this.w);
    if(this.walls[3])
    line(this.x         , this.y + this.w, this.x         , this.y         );

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
}
