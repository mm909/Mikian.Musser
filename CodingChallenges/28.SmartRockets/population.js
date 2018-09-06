function Population() {
  this.popSize = 100;
  this.rockets = [];
  this.matingPool = [];
  this.allDead = false;
  this.deadCount = 0;
  this.reachedCount = 0;
  this.gen = 0;

  for (var i = 0; i < this.popSize; i++) {
    this.rockets[i] = new Rocket();
  }

  this.run = function() {
    for (var i = 0; i < this.popSize; i++) {
        this.rockets[i].update();
        this.rockets[i].show();
    }
  }

  this.evaluate = function() {
    this.deadCount = 0;
    this.reachedCount = 0;

    var maxFit = 0;
    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].calcFitness();
      if(this.rockets[i].fitness > maxFit){
        maxFit = this.rockets[i].fitness;
      }
    }

    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].fitness /= maxFit;
    }

    if(maxFit == 0){
      console.log("All dead")
      this.allDead = true;
    }

    this.matingPool = [];
    for (var i = 0; i < this.popSize; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingPool.push(this.rockets[i])
      }
    }
  }

  this.selection = function() {
    var newRockets = [];
    for(var i = 0; i < this.rockets.length; i++){
      var parentA = random(this.matingPool).DNA
      var parentB = random(this.matingPool).DNA
      var child = parentA.crossover(parentB);
      newRockets[i] = new Rocket(child)
    }
    this.rockets = newRockets;
    background(151)
    this.gen++;
  }
}
