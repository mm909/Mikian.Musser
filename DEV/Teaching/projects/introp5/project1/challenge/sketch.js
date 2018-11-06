// Mikian Musser
// https://p5js.org/reference/

var s = function(sketch) {
  var x = 0;
  var y = 0;
  var r = 100;
  var g = 255;
  var b = 100;
  sketch.setup = function() {
    var h = $('#challengeContainer').height();
    var w = $('#challengeContainer').width();
    var sketchCanvas = sketch.createCanvas(w, h);
    sketchCanvas.parent("challengeContainer");
  };

  sketch.draw = function() {
    sketch.background(151);
    x = sketch.mouseX;
    y = sketch.mouseY;
    r = sketch.mouseX;
    g = sketch.mouseY;
    b = sketch.mouseX;
    sketch.noStroke();
    x = sketch.constrain(x, 0, sketch.width);
    y = sketch.constrain(y, 0, sketch.height);
    r = sketch.map(r, 0, sketch.width, 0, 255)
    g = sketch.map(g, 0, sketch.height, 0, 255)
    b = sketch.map(b, 0, sketch.width, 0, 255)
    sketch.fill(r, g, b)
    sketch.rect(x, y, 20, 20)
  };
};

var myp5 = new p5(s);