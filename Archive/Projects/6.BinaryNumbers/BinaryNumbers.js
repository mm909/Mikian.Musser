var i = [];
var bias = 250;
var h = 24;
var length = 0;
var binary = [];

function setup() {
  var canvas = createCanvas(windowWidth-9,500)
  canvas.parent("canvasContainer");
  length = floor(windowWidth / bias) * h;
  for(var j = 0; j < length; j++){
    i[j] = floor(random(0,5000));
    binary[j] = createElement('h5', j + " = " + tentobinary(i[j]));
    binary[j].position(10 + floor(j / h) * bias ,(j%h)*20+115);
  }
}

function draw() {
  frameRate(15 + i[0]/35);
  background(150);
  for(var j = 0; j < length; j++){
    binary[j].html(i[j] + " = " + tentobinary(i[j]));
    i[j]++;
  }
}

function tentobinary(i) {
  var string = "";
  while(true){
    if(i>0){
      var a = (i%2);
      string = string + a;
      i = floor(i/2);
    } else {
      var answer = "";
      for(var i = 0; i < 16-string.length; i++){
        answer += "0";
      }
      for(var i = 0; i < string.length; i++){
        answer += string[string.length-1-i];
      }
      return answer;
    }
  }
}
