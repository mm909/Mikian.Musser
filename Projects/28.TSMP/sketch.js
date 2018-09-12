var cities = [];
var cityCount = 6;

var perm = 0;
var count = 0;
var progressBar;

var p = [];
var sp = [];
var record = Infinity;

var oTime;
var nTime;

function setup() {
  var canvas = createCanvas(500,500);
  canvas.parent("canvasContainer")
  perm = fact(cityCount);
  for (var i = 0; i < cityCount; i++) {
    cities[i] = createVector(random(width),random(height/2));
    p[i] = sp[i] = i;
  }
  oTime = millis();
}

function draw() {
  background(151)
  nTime = millis();

  push()
  beginShape();
  noFill();
  strokeWeight(3)
  stroke(100,100,255);
  translate(0,width/2)
  for (var i = 0; i < sp.length; i++) {
    vertex(cities[sp[i]].x,cities[sp[i]].y)
  }
  endShape();
  pop();

  beginShape();
  stroke(255);
  noFill();
  strokeWeight(1);
  for (var i = 0; i < p.length; i++) {
    vertex(cities[p[i]].x,cities[p[i]].y)
  }
  endShape();

  fill(100,255,100);
  noStroke();
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x,cities[i].y,20,20);
    push();
    translate(0,width/2)
    ellipse(cities[i].x,cities[i].y,20,20);
    pop();
  }

  var d = calcDist(p);
  if(record > d) {
    record = d;
    for (var i = 0; i < sp.length; i++) {
      sp[i] = p[i];
    }
  }

  // p = shuffleA(p);
  Lexi(p);

  fill(0, 0, 0);
  text("Time: " + floor((nTime - oTime)/1000),10,height-55);
  text(nf(progress()*100,0,2) + "% completed.",10,height-40);
  text("Current Length: " + nf(d,0,2),10,height-25);
  text("Record Length: " + nf(record,0,2),10,height-10);

  count++;
  var prog = progress();
  if(prog > 1) {prog = 1; noLoop()}
}

function Lexi(a) {

	let i = number = a.length - 1;
	while (i > 0 && a[i - 1] >= a[i])
		i--;
	if (i <= 0)
		return a;

	let j = number = a.length - 1;
	while (a[j] <= a[i - 1])
		j--;
	let temp = E = a[i - 1];
	a[i - 1] = a[j];
	a[j] = temp;

	j = a.length - 1;
	while (i < j) {
		let temp = a[i];
		a[i] = a[j];
		a[j] = temp;
		i++;
		j--;
	}

	return a;
}

function shuffleA(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function calcDist(p) {
  var sum = 0;
  for (var i = 0; i < p.length-1; i++) {
    var a = cities[p[i]];
    var b = cities[p[i+1]];
    var d = dist(a.x,a.y,b.x,b.y);
    sum+=d
  }
  return sum;
}

function progress() {
  return count / perm;
}

function swap(a,i,j){
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function fact(x) {
  if(x <= 1) return 1;
  return x * fact(x-1);
}
