var box;
var lineLenght = 20;

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
  var string = box.value();
  var lines = [];
  var line = [];
  for(var i = 0; i < string.length; i++){
    line[i%20] = string[i];
    if(i%20 == 19){
      lines[floor(i/lineLenght)] = line;
    }
  }
  for(var j = 0; j < 2; j++){
    console.log(lines[j]);
  }
  /*
  lines[floor(i/lineLenght)] = "TET";
  text(string[i], windowWidth/2 + 10 + (i%20) * 20, 40 + floor(i/lineLenght)*40);
*/

}
