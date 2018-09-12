function Population() {
  this.popSize = 100;
  this.rockets = [];
  this.matingPool = [];

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
    var maxFit = 0;
    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].calcFitness();
      if(this.rockets[i].fitness > maxFit){
        maxFit = this.rockets[i].fitness;
      }
    }

    if(maxFit == 0){
      for (var i = 0; i < this.popSize; i++) {
        this.rockets[i] = new Rocket();
      }
      return;
    }

    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].fitness /= maxFit;
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
  }
}
