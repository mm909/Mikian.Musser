var box;

function setup() {
  createCanvas(windowWidth-15,501);
  background(150);
  textSize(40);
  textAlign(LEFT);
  fill(255)
  rect(0,0,(windowWidth-15)/2,500);
  fill(0);
  rect((windowWidth-15)/2,0,(windowWidth-15)/2,500);

  box = createElement("textarea");
  box.position(8,8);
  box.style("width",windowWidth/2 + "px")
  box.style("height","495px")
}

function draw() {
  background(160);
  console.log(box.value())
  text("123456789123456789123456789", windowWidth/2 +10, 40);


}
