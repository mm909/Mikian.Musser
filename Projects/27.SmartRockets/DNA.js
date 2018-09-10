function DNA(g) {
  this.genes = [];

  if(g){
    this.genes = g;
  } else {
    for (var i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(maxSpeed);
    }
  }

  this.crossover = function(p) {
    var newGenes = [];
    var mid = floor(random(this.genes.length))
    for (var i = 0; i < this.genes.length; i++) {
      if(i > mid) {
        newGenes[i] = this.genes[i];
      } else {
        newGenes[i] = p.genes[i];
      }
    }
    this.mutation(newGenes);
    return new DNA(newGenes);
  }

  this.mutation = function(d) {
    for (var i = 0; i < d.length; i++) {
      if(random(100) < mutationRate){
        d[i] = p5.Vector.random2D();
        d[i].setMag(maxSpeed);
      }
    }
  }
}
