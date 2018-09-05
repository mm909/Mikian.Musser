var tree;

function setup() {
  frameRate(30);
  var canvas = createCanvas(500,500);
  canvas.parent("canvasContainer")
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
