function Tree() {

  // -- Environment vars -- //
  this.bounds = [width,height/1.5]
  this.startingPos = [width/2,height]
  this.leafCount = 50;
  this.maxDistance = 50;
  this.minDistance = 5;
  this.maxBranches = 5000;
  this.leafSize = 5;
  this.branchLength = 5;
  this.c = color(0,25,25);

  // -- Tree Arrays -- //
  this.leaves = [];
  this.branches = [];

  // -- Create the leaves -- //
  for(var i = 0; i < this.leafCount; i++){
    this.leaves[i] = new Leaf(random(this.bounds[0]),random(this.bounds[1]),this.leafSize);
  }

  // -- Create the Root  -- //
  var par = null;
  var pos = createVector(this.startingPos[0],this.startingPos[1]);
  var dir = createVector(0,-1)
  var root = new Branch(par, pos, dir,this.branchLength,this.c)
  this.branches.push(root)

  // -- Build the trunk -- //
  // -- Add branches until there is a leaf within the minimum distance -- //
  // -- Found will be false when a leaf is within minimum distance     -- //
  // -- Current is the last added branch to the array, starts at root  -- //
  var found = false;
  var current = root;
  // -- Until we find a leaf in bounds                                 -- //
  while(!found) {
    // -- Go through all of the leaves                                 -- //
    for(var i = 0; i < this.leaves.length; i++){
        var leaf = this.leaves[i];
        // -- Get the distance between leaf[i] and the current branch  -- //
        var d = p5.Vector.dist(leaf.pos,current.pos)
        // -- If that distance is within that required distance        -- //
        // -- then set found to true and move on                       -- //
        if(d < this.maxDistance){
          found = true;
        }
        // -- Else: check the next leaf                                -- //
      }
      // -- If we have gone through all of the leaves and none are     -- //
      // -- within the maximum distance then add a branch "up" and go  -- //
      // -- through the leaves again                                   -- //
      if(!found){
        var nextBranch = current.next();
        this.branches.push(nextBranch)
        current = nextBranch;
      }
  }
  // -- Finished building the trunk -- //

  this.grow = function() {
    if(this.branches.length < this.maxBranches){
      // -- Go through every leaf, -- //
      // -- If the leaf is within minimum distance of a branch then mark for deletion     -- //
      // -- If the leaf is between min and max distances then look for the closest branch -- //
      // -- for each leaf find its closest branch -- //
      // -- then PULL (SUB) the branch towards the leaf -- //
      for(var i = 0; i < this.leaves.length; i++){
        var leaf = this.leaves[i];
        var record = max(width,height);
        var closest = null;
        for(var j = 0; j < this.branches.length; j++){
          var branch = this.branches[j];
          var d = p5.Vector.dist(leaf.pos,branch.pos)
          if(d < this.minDistance) {
            leaf.remove = true;
            closest = null;
            break;
          } else if(d < record){
            record = d;
            closest = branch;
          }
        }
        if(closest != null){
          // -- "PULL" the branch closer to the leaf -- //
          var newDir = p5.Vector.sub(leaf.pos,closest.pos)
          // -- Make it a "unit vector" - (0,1) -- //
          newDir.normalize();
          closest.dir.add(newDir)
          closest.count++;
        }
      }

      // -- Remove leaves that were marked for deletion -- //
      for(var j = this.leaves.length - 1; j >= 0; j--){
        if(this.leaves[j].remove) this.leaves.splice(j,1);
      }

      // -- Average all of forces applied to the branch -- //
      // -- Then make a new branch with the pev as a parent-- //
      // -- Reset the branch dir -- //
      for(var i = this.branches.length-1; i >=0 ; i--){
        var b = this.branches[i]
        if(b.count > 0){
          b.dir.div(b.count+1)
          this.branches.push(b.next())
          b.reset();
        }
      }
    }
  }

  this.addLeaf = function() {
    var leaf = new Leaf(mouseX,mouseY,this.leafSize);
    this.leaves.push(leaf);
  }

  this.show = function(){
    for(var i = 0; i < this.leaves.length; i++){
      this.leaves[i].show();
    }
    for(var i = 0; i < this.branches.length; i++){
      this.branches[i].show();
    }
  }
}
