var s;
function setup() {
  frameRate(15);
  createCanvas(501,501);
  s = new Snake();

}

function draw() {
  background(51);
  s.draw();
  s.update();
}

function keyPressed() {
  if(keyCode === 87) s.change(0);
  if(keyCode === 83) s.change(1);
  if(keyCode === 68) s.change(2);
  if(keyCode === 65) s.change(3);
}
