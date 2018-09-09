var sentence = "";
var angle = 0;
var count = 0;
var c = 0;

// -- -- //
// Example L-System
// -- -- //
// var name = "Example";
// var variables = ["F"];
// var constants = ["+", "-", "[", "]"];
// var axiom = "F";
// var startingLength = 25;
// var length = 25;
// var lengthBias = 0.75
// var startingAngle = 25;
// var maxCount = 5;
// var transparent = true;
// var rules = [
//   {
//     a: "F",
//     b: "FF+[+F-F-F]-[-F+F+F]"
//   }
// ]
// -- -- //

// -- -- //
// Fractal Plant
// variables : X F
// constants : + − [ ]
// start : X
// rules : (X → F+[[X]-X]-F[-FX]+X), (F → FF)
// angle : 25°
// -- -- //
// var name = "FractalPlant";
// var variables = ["X", "F"];
// var constants = ["+", "-", "[", "]"];
// var axiom = "X";
// var startingLength = 25;
// var length = 25;
// var lengthBias = 0.74
// var startingAngle = 25;
// var maxCount = 6;
// var transparent = false;
// var rules = [
//   {
//     a: "X",
//     b: "F+[[X]-X]-F[-FX]+X"
//   },
//   {
//     a: "F",
//     b: "FF"
//   }
// ]
// -- -- //

// variables : 0, 1
// constants: [, ]
// axiom : 0
// rules : (1 → 11), (0 → 1[0]0)
// angle : 45
// -- -- //
var name = "BT";
var variables = ["0", "1"];
var constants = ["[", "]"];
var axiom = "0";
var startingLength = 30;
var length = 30;
var lengthBias = 0.74
var startingAngle = 45;
var maxCount = 8;
var transparent = false;
var rules = [
  {
    a: "1",
    b: "11"
  },
  {
    a: "0",
    b: "1[0]0"
  }
]
// -- -- //

function setup() {
  createCanvas(500,500)
  frameRate(2);
  sentence = axiom;
  angle = radians(startingAngle);
  if(transparent){
    c = color(random(0,175),random(0,175),random(0,175),150);
  } else {
    c = color(random(0,175),random(0,175),random(0,175));
  }
  turtle();
}

function draw() {
  if(count < maxCount){
    count++;
    gen();
    turtle();
  } else {
    noLoop();
    setTimeout(reset, 3000)
  }
}

function reset() {
  count = 0;
  sentence = axiom
  length = startingLength * lengthBias;
  if(transparent){
    c = color(random(0,175),random(0,175),random(0,175),150);
  } else {
    c = color(random(0,175),random(0,175),random(0,175));
  }
  loop();
}

function turtle() {
  length *= lengthBias;
  resetMatrix();
  background("#C5C6Ca");
  translate(width/2,height);
  stroke(c)
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if(current == "0"){
      ellipse(0,0,5,5);
    }
    if (current == "F" || current == "1") {
      line(0, 0, 0, -length);
      translate(0, -length);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle)
    } else if (current == "[") {
      push();
      if(name == "BT"){ rotate(angle) }
    } else if (current == "]") {
      pop();
      if(name == "BT"){ rotate(-angle) }
    }
  }
}

function gen() {
  var tempSentence = "";
  for(var i = 0; i < sentence.length; i++){
    var found = false;
    for(var j = 0; j < rules.length; j++){
      var char = sentence.charAt(i);
      if(char == rules[j].a){
        found = true;
        tempSentence += rules[j].b;
        break;
      }
    }
    if(!found){
      tempSentence += char;
    }
  }
  console.log(sentence)
  sentence = tempSentence;
}

function mouseClicked() {
  if(count < maxCount){
    count++;
    gen();
    turtle();
  }
}
