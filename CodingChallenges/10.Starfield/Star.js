function star() {
    this.x = floor(random(-(width/2),width/2))
    this.y = floor(random(-(height),height/2))
    this.z = random(width/2);
    this.px = this.z;

    this.maxSize = 2;
    this.speed = 4;

    this.update = function() {
      this.z = this.z - this.speed;
      if(this.z < 1){
        this.z = width / 2;
        this.x = floor(random(-width/2,width/2))
        this.y = floor(random(-height/2,height/2))
        this.pz = this.z;
      }
    };

    this.draw = function() {
      stroke(255)

      this.sx = map(this.x / this.z, 0, 1, 0, width/2);
      this.sy = map(this.y / this.z, 0, 1, 0, height/2);
      this.size = map(this.z, 0, width/2, this.maxSize, 0)
      ellipse(this.sx, this.sy, this.size, this.size);

      this.px = map(this.x / this.pz, 0, 1, 0, width/2);
      this.py = map(this.y / this.pz, 0, 1, 0, height/2);
      this.pz = this.z
      line(this.sx, this.sy, this.px, this.py);

    };
}
