var grid;
var next;
var dA = 1.0;
var dB = 0.5;
var f  = 0.055;
var k  = 0.062;

function setup() {
  createCanvas(200,200);
  pixelDensity(1);
  grid = [];
  next = [];
  for(var i = 0; i < width; i++){
    grid[i] = [];
    next[i] = [];
    for(var j = 0; j < height; j++){
      grid[i][j] = new Cell();
      next[i][j] = new Cell();
    }
  }

  // var x = width  / 2;
  // var y = height / 2;
  // var d = 5;
  // for(var i = x-d; i < x+d; i++){
  //   for(var j = y-d; j < y+d; j++){
  //     grid[i][j].b = 1;
  //   }
  // }

  place(1,5,5,15)

  f  = random(0.03,0.055);
  k  = random(0.061,0.062);

}

function draw() {
  background(51);

  for(var i = 1; i < width-1; i++){
    for(var j = 1; j < height-1; j++){
      var a = grid[i][j].a;
      var b = grid[i][j].b;
      next[i][j].a = a + ((dA * LaplacianA(i,j)) - (a * b * b) + (f * (1 - a)))
      next[i][j].b = b + ((dB * LaplacianB(i,j)) + (a * b * b) - ((k + f) * b));
      next[i][j].a = constrain(next[i][j].a, 0, 1);
      next[i][j].b = constrain(next[i][j].b, 0, 1);
    }
  }

  loadPixels();
  for(var i = 0; i < width; i++){
    for(var j = 0; j < height; j++){
      var pix = (i + j * width) * 4
      var a = next[i][j].a;
      var b = next[i][j].b;
      var c = floor((a - b) * 255);
      c = constrain(c, 0, 255);
      pixels[pix + 0] = c;
      pixels[pix + 1] = c;
      pixels[pix + 2] = c;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  swap();
}

function place(minCount, maxCount, minD, maxD) {
  var count = floor(random(minCount, maxCount+1));
  if (count == 0) count = 1;
  for(var c = 0; c < count; c++){
    var d1 = floor(random(minD, maxD));
    var d2 = floor(random(minD, maxD));
    if (d1 == 0)     d1 = 5;
    if (d2 == 0)     d2 = 5;
    var x = floor(random(width ));
    var y = floor(random(height));
    x = constrain(x, 1 + d1, width - 1 - d1);
    y = constrain(y, 1 + d2, height - 1 - d2);
    for(var i = x-d1; i < x+d1; i++){
      for(var j = y-d2; j < y+d2; j++){
        grid[i][j].b = 1;
      }
    }
  }

}

// (i - 1, j - 1) (i    , j - 1) (i + 1, j - 1)
// (i - 1, j    ) (i    ,     j) (i + 1, j    )
// (i - 1, j + 1) (i    , j + 1) (i + 1, j + 1)

function LaplacianA(i,j) {
  var sum = 0;
    sum += grid[i  ][j  ].a * -1.0;
    sum += grid[i+1][j  ].a * 0.20;
    sum += grid[i-1][j  ].a * 0.20;
    sum += grid[i  ][j+1].a * 0.20;
    sum += grid[i  ][j-1].a * 0.20;
    sum += grid[i-1][j-1].a * 0.05;
    sum += grid[i+1][j-1].a * 0.05;
    sum += grid[i-1][j+1].a * 0.05;
    sum += grid[i+1][j+1].a * 0.05;
  return sum;
}

function LaplacianB(i,j) {
  var sum = 0;
    sum += grid[i  ][j  ].b * -1.0;
    sum += grid[i+1][j  ].b * 0.20;
    sum += grid[i-1][j  ].b * 0.20;
    sum += grid[i  ][j+1].b * 0.20;
    sum += grid[i  ][j-1].b * 0.20;
    sum += grid[i-1][j-1].b * 0.05;
    sum += grid[i+1][j-1].b * 0.05;
    sum += grid[i-1][j+1].b * 0.05;
    sum += grid[i+1][j+1].b * 0.05;
  return sum;
}

function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}
