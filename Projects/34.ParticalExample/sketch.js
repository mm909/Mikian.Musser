var system = [];
var systemCount = 25;
var systemRate = 0.001;

function setup() {
  var canvas = createCanvas(500, 500)
  canvas.parent("canvasContainer");
  for (var i = 0; i < systemCount; i++) {
    system[i] = new System();
  }
}

function draw() {
  background(151)
  for (var i = 0; i < system.length; i++) {
    system[i].show();
    system[i].update();
  }

  for (var i = system.length-1; i >= 0 ; i--) {
    if(random(1) < systemRate){
      system[i] = new System();
    }
  }
}
