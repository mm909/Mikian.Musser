var i = [];
var bias = 375;
var length = 0;
var binary = [];

function setup() {
  createCanvas(windowWidth-15,500);
  length = floor(windowWidth / bias) * 16;
  for(var j = 0; j < length; j++){
    i[j] = floor(random(0,500));
    binary[j] = createElement('h1', j + " = " + tentobinary(i[j]));
    binary[j].position(10 + floor(j / 16) * 375 ,(j%16)*31-15);
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
