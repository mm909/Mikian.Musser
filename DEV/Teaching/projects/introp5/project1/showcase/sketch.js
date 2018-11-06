// Mikian Musser
// https://p5js.org/reference/


var s = function(sketch) {

  var x = 0;
  var y = 0;
  var r = 100;
  var g = 255;
  var b = 100;


  sketch.setup = function() {
    var h = $('#showcaseContainer').height();
    var w = $('#showcaseContainer').width();
    var sketchCanvas = sketch.createCanvas(w, h);
    sketchCanvas.parent("showcaseContainer");
  };

  sketch.draw = function() {
    sketch.background(151);
    x = sketch.mouseX;
    y = sketch.mouseY;
    sketch.fill(r, g, b)
    // noFill();
    sketch.noStroke();
    // stroke(255);
    // strokeWeight(5);
    x = sketch.constrain(x, 0, sketch.width);
    y = sketch.constrain(y, 0, sketch.height);
    sketch.ellipse(x, y, 20, 20)
  };
};

var myp5 = new p5(s);