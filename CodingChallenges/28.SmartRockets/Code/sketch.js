var population;
var lifespan = 200;
var count = 0;

var target;
var targetSize = 5;
var threshold = 20;

var sucessFactor = 4;
var deadFactor = 0;
var mutationRate = 3;

function setup() {
  createCanvas(500, 500);
  population = new Population();
  var c = color(0,255,0);
  target = new Target(width/2,50,targetSize,c,threshold);
}

function draw() {
  background(151)
  population.run();
  target.show();
  count++;
  if(count >= lifespan){
    population.evaluate();
    population.selection();
    count = 0;
  }
}
