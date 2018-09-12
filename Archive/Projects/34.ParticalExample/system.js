function System(){
  this.x = random(width)
  this.y = random(height)
  this.particals = [];
  this.r = 0;
  this.g = 0;
  this.b = 0;
  // this.target = createVector(random(width),random(height))
  this.target = createVector(0,0)
  // this.target = createVector(width/2,height/2)
  this.rate = 0.75;

  var rC = floor(random(3))
  if(rC == 0) this.r = random(100,255);
  if(rC == 1) this.g = random(100,255);
  if(rC == 2) this.b = random(100,255);

  this.update = function(){
    if(random(1) < this.rate){
      var  p = new Partical(this.x, this.y, this.r, this.g, this.b)
      this.particals.push(p);
    }
    for (var i = 0; i < this.particals.length; i++) {
      this.particals[i].move();
      this.particals[i].update();
      var f = this.particals[i].seek(createVector(random(width),random(height)));
      this.particals[i].applyForce(f);
    }
    for (var i = this.particals.length-1; i >= 0; i--) {
      if(this.particals[i].life < 10){
        this.particals.splice(i,1)
      }
    }
  }

  this.show = function(){
    for (var i = 0; i < this.particals.length; i++) {
      this.particals[i].show();
    }
  }
}
