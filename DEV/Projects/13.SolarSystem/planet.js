function Planet(r, d, o) {
  this.radius = r;
  this.angle = random(TWO_PI);
  this.distance = d;
  this.moons = [];
  this.orbitSpeed = o;

  this.distanceMax = 200;
  this.distanceMin = 100;
  this.orbitSpeedBounds = 0.02;
  this.levelSizeDec = 1.5;
  this.levelDistanceDec = 1.5;

  this.color = color(255,255,0,150)

  this.show = function() {
    push();
    rotate(this.angle)
    translate(this.distance,0);
    noStroke();
    fill(this.color)
    ellipse(0,0,this.radius*2,this.radius*2);
    for(var i = 0; i < this.moons.length; i++){
      this.moons[i].show();
    }
    pop();
  }

  this.orbit = function() {
    this.angle += this.orbitSpeed
    for(var i = 0; i < this.moons.length; i++){
      this.moons[i].orbit();
    }
  }

  this.spawnMoons = function(total,level){
    for(var i = 0; i < total; i++) {
      var r = this.radius;
      var d = random(this.distanceMin,this.distanceMax);
      var o = random(-this.orbitSpeedBounds,this.orbitSpeedBounds)
      if(level > 1){
        d = d / ((level)*this.levelDistanceDec)
        r = r / ((level)*this.levelSizeDec)
      } else {
        r = r / 2;
      }
      this.moons[i] = new Planet(r,d,o);
      if(level < 2){
        var count = random(0,total);
        this.moons[i].spawnMoons(count,level+1);
      }
    }
  }

}
