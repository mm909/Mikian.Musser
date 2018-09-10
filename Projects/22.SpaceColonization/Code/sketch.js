var tree;

function setup() {
  frameRate(30);
  createCanvas(500,500)
  tree = new Tree();
}

function draw() {
  background(51)
  tree.show();
  tree.grow();
  if(mouseIsPressed){
    tree.addLeaf();
  }
}
