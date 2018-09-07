var mm;
var mmS;
var step = 300;
var images;

function preload(){
  images = [
   {
     a:loadImage("https://image.ibb.co/fyHKje/image.jpg"),
     b:loadImage("https://image.ibb.co/fyHKje/image.jpg")
   },
   {
     a:loadImage("https://image.ibb.co/bPSc4e/image2.jpg"),
     b:loadImage("https://image.ibb.co/bPSc4e/image2.jpg")
   },
   {
     a:loadImage("https://image.ibb.co/h3sAPe/image3.png"),
     b:loadImage("https://image.ibb.co/h3sAPe/image3.png")
   },
   {
     a:loadImage("https://image.ibb.co/i6KAqK/image6.jpg"),
     b:loadImage("https://image.ibb.co/i6KAqK/image6.jpg")
   }
 ]
  var n = floor(random(images.length))
  // mm = loadImage("https://image.ibb.co/fyHKje/image.jpg")
  // mmS = loadImage("https://image.ibb.co/fyHKje/image.jpg")
  // mm = loadImage("https://image.ibb.co/bPSc4e/image2.jpg")
  // mmS = loadImage("https://image.ibb.co/bPSc4e/image2.jpg")
  // mm = loadImage("https://image.ibb.co/h3sAPe/image3.png")
  // mmS = loadImage("https://image.ibb.co/h3sAPe/image3.png")
  // mm = loadImage("https://image.ibb.co/hiRyAK/image4.jpg")
  // mmS = loadImage("https://image.ibb.co/hiRyAK/image4.jpg")
  // mm = loadImage("https://image.ibb.co/bsutAK/image5.jpg")
  // mmS = loadImage("https://image.ibb.co/bsutAK/image5.jpg")
  // mm = loadImage("https://image.ibb.co/i6KAqK/image6.jpg")
  // mmS = loadImage("https://image.ibb.co/i6KAqK/image6.jpg")
  mm = images[n].a
  mmS = images[n].b
}

function setup() {
  var canvas = createCanvas(450,225);
  canvas.parent("canvasContainer")
}

function draw() {
  background(151)
  mmS.loadPixels();
  sortBrightnessSTEP();
  mmS.updatePixels();
  image(mm,0,0)
  image(mmS,225,0)
}

var cI = 0;
function sortBrightnessSTEP() {

    for(var i = 0; i < step; i+=4){
      var brightest = 0;
      var b = -1;
      for (var j = cI + i; j < mmS.pixels.length; j += 4) {
        var sum = 0;
        sum += mmS.pixels[j+0]
        sum += mmS.pixels[j+1]
        sum += mmS.pixels[j+2]
        sum /= 3;
        if(sum >= brightest) { b = j; brightest = sum; }
      }
        var temp1 = mmS.pixels[cI+0]
        var temp2 = mmS.pixels[cI+1]
        var temp3 = mmS.pixels[cI+2]
        var temp4 = mmS.pixels[cI+3]
        mmS.pixels[cI+0] = mmS.pixels[b+0]
        mmS.pixels[cI+1] = mmS.pixels[b+1]
        mmS.pixels[cI+2] = mmS.pixels[b+2]
        mmS.pixels[cI+3] = mmS.pixels[b+3]
        mmS.pixels[b+0] = temp1
        mmS.pixels[b+1] = temp2
        mmS.pixels[b+2] = temp3
        mmS.pixels[b+3] = temp4
        cI += 4
    }
}

function sortBrightness() {
  mmS.loadPixels();
  for(var i = 0; i < mmS.pixels.length; i = i+4){
    var brightest = 0;
    var b = -1;
    for (var j = i; j < mmS.pixels.length; j = j+ 4) {
      var sum = 0;
      sum += mmS.pixels[j+0]
      sum += mmS.pixels[j+1]
      sum += mmS.pixels[j+2]
      sum /= 3;
      if(sum > brightest) { b = j; brightest = sum; }
    }
      var temp1 = mmS.pixels[i+0]
      var temp2 = mmS.pixels[i+1]
      var temp3 = mmS.pixels[i+2]
      var temp4 = mmS.pixels[i+3]
      mmS.pixels[i+0] = mmS.pixels[b+0]
      mmS.pixels[i+1] = mmS.pixels[b+1]
      mmS.pixels[i+2] = mmS.pixels[b+2]
      mmS.pixels[i+3] = mmS.pixels[b+3]
      mmS.pixels[b+0] = temp1
      mmS.pixels[b+1] = temp2
      mmS.pixels[b+2] = temp3
      mmS.pixels[b+3] = temp4
  }
  mmS.updatePixels();
}
