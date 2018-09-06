var population;
var lifespan = 200;
var count = 0;
var maxSpeed = 0.18

var target;
var targetSize = 5;
var threshold = 15;

var sucessFactor = 3;
var deadFactor = 0;
var mutationRate = 2;

var dead;
var reached;
var gen;

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent("canvasContainer")
  var x = getOffset( document.getElementById('defaultCanvas0') ).left;
  var y = getOffset( document.getElementById('defaultCanvas0') ).top;
  population = new Population();
  var c = color(0,255,0);
  target = new Target(50,50,targetSize,c,threshold);
  gen = createP();
  gen.position(x + 10,y + height-20);
  dead = createP();
  dead.position(x + 10,y + height);
  reached = createP();
  reached.position(x + 10,y + height+20);
}

function draw() {
  background(151,125)
  population.run();
  target.show();
  gen.html("Generation: " + population.gen)
  dead.html("Dead: " + population.deadCount)
  reached.html("On Target: " + population.reachedCount)
  count++;
  if(count >= lifespan){
    population.evaluate();
    if(!population.allDead){
      population.selection();
    } else {
      population.allDead = false;
      population = new Population();
    }
    count = 0;
  }
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
