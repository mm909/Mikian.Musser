// Each rocket belongs to the population
var population;

// Lifespan is how many frames each rocket will live
// Count is how many frames have passed
var lifespan = 200;
var count = 0;

// How fast can this rocket go?
// NOTE: Change this value and watch how the rockets react!
var maxSpeed = 0.18;

// The target is where the rockets are trying to reach.
// Target size is how big the 'green' part of the target is.
// threshold is how much error we will allow the rockets.(The black circle around the target)
var target;
var targetSize = 5;
var threshold = 20;

// sucessFactor is how
var sucessFactor = 3;
var deadFactor = 0;
var mutationRate = 2;

var dead;
var reached;
var gen;

function setup() {
  var canvas = createCanvas(600,500);
  population = new Population();
  var c = color(0,255,0);
  target = new Target(50,50,targetSize,c,threshold);
  gen = createP();
  dead = createP();
  reached = createP();
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
