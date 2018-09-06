var fireworks = [];
var count = 20;
var force;
var ss = 5;

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < count; i++) {
    var c = random(255);
    var s = random(ss - 2, ss + 2);
    fireworks[i] = new Firework(random(width), height - s, s, c);
    force = createVector(0, random(-9, -5));
    fireworks[i].applyForce(force);
  }
}

function draw() {
  colorMode(RGB)
  background(0);
  for (var i = 0; i < fireworks.length; i++) {
    fireworks[i].show();
    fireworks[i].update();
  }
  for (var i = 0; i < fireworks.length; i++) {
    if (fireworks[i].del) {
      fireworks.splice(i, 1)
    }
  }
  if (fireworks.length < count) {
    var c = random(255);
    var s = random(ss - 2, ss + 2);
    var fw = new Firework(random(width), height - s, s, c);
    force = createVector(0, random(-9, -5));
    fw.applyForce(force);
    fireworks.push(fw)
  }
}