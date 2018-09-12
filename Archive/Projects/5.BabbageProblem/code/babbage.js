// What is the smallest positive integer whose square ends in the digits 269,696?

var digets = 269696;
var j = 0;
var l = 0;
var babbage = [];
var lineCount = 23;

function setup() {
  createCanvas(windowWidth-15,500);
  for(var i = 0; i < lineCount; i++){
    babbage[i] = createElement('h2', j);
    babbage[i].position((windowWidth-200)/2, 20*i);
  }
  background(150);
}

function draw() {
  j+= 16;
    babbage[(l+lineCount-5)%lineCount].style("color","black");
    babbage[l].style("color","green");
    babbage[l].html(j + " * " + j + " = " + j*j);
    if((j * j) % 1000000 == 269696){
      console.log(j)
      for(var i = 0; i < lineCount; i++){
        if(i!=l)
        babbage[i].style("color","black");
      }
      noloop();
    }
  l++;
  if(l%lineCount == 0) l = 0;
}
