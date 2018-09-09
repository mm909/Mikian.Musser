var particals = [];

function setup() {
  createCanvas(500,500)
}

function draw() {
  if(random(1) < 0.75){
    var p = new Partical(width/2,height - 50)
    particals.push(p)
  }

  background(151)
  for (var i = particals.length-1; i >= 0; i--) {
    particals[i].move();
    particals[i].update()
    particals[i].show();
    if(particals[i].life < 10)
    particals.splice(i,1)
  }

}
