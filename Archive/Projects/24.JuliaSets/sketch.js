var juliaSets = [
  {
    a: -0.4,
    b: 0.6
  },
  {
    a: 0.285,
    b: 0
  },
  {
    a: 0.285,
    b: 0.01
  },
  {
    a: 0.45,
    b: 0.1428
  },
  {
    a: 0.1428,
    b: -0.3842
  },
  {
    a: -0.835,
    b: 0.2321
  },
  {
    a: -0.7269,
    b: 0.1889
  },
  {
    a: -0.8,
    b: -0.8
  },
]

function setup() {
  var canvas = createCanvas(360,360);
  canvas.parent("canvasContainer")
  pixelDensity(1);
}

function julia(xa,yb){
  loadPixels();
  var maxI = 100;
  var maxX = 2;
  var minX = -2;
  var maxY = 2;
  var minY = -2;
  for(var x = 0; x < width; x++){
    for(var y = 0; y < height; y++){
      var a = map(x,0,width,minX,maxX);
      var b = map(y,0,height,minY,maxY);
      var n = 0;
      var oa = a;
      var ob = b;
      // Add each real and each i sepretaly
      while(n < maxI) {
        // z = z0^2 + c
        // z^2 = TempR + tempI + c
        // c = a + b;
        var tempR = a * a - b * b;
        var tempI = 2 * a * b;
        a = tempR + xa;
        b = tempI + yb;
        // Add them together at the end "Ignoring i's"
        if(abs(a + b) > 2) {
          break;
        }
        n++;
      }

      var bright = 250
      bright = map(n,0,maxI,0,255);
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}

var j = 0;
function draw() {
  if(j >= juliaSets.length) j = 0;
  julia(juliaSets[j].a,juliaSets[j].b)
  j++;
  frameRate(1);
}
