var leafs = [];
var leafCount = 300;
var root;
var branches = [];
var minDistance = 10;
var maxDistance = 20;

function trunk(){
    
}

function setup() {
  createCanvas(500,500)
  for(var i = 0; i < leafCount; i++){
    leafs[i] = new Leaf(random(width), random(height/1.5))
  }
  var pos = createVector(0,0);
  var parent = null;
  var dir = createVector(0,-1);
  root = new Branch(parent,pos,dir)
  branches.push(root);
}

function draw() {
  background(151)
  for(var i = 0; i < leafCount; i++){
    leafs[i].show();
  }
  for(var i = 0; i < branches.length; i++){
    branches[i].show();
  }
}
