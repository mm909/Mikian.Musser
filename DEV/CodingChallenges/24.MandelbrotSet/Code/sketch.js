function setup() {
  createCanvas(500,500);
  pixelDensity(1);

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
        a = tempR + oa;
        b = tempI + ob;
        // Add them together at the end "Ignoring i's"
        if(abs(a + b) > 2) {
          break;
        }
        n++;
      }

      var bright = 250
      bright = map(n,0,maxI,0,255);
      // if(n == maxI) bright = 0;

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;

    }
  }
  updatePixels();
}
