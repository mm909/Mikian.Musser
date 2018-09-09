var i = 0;
var j = 0;
var sorting = true;
var swapped = false;

function setup() {
  var canvas = createCanvas(501,500)
  canvas.parent("canvasContainer");

  data = new dataVisualization();
  data.setHeight(500);
  data.setWidth(500);
  data.setBackgroundColor(150);
  data.setDataCount(50);
  data.setDataMin(-100);
  data.setDataMax(100);
  data.calcDataWidth();
  data.getNewData();
  data.draw();
}

function draw(){
  if(sorting)
    bubbleSort(data.data);
  else
    data.draw(-1);
}


function bubbleSort(array) {
    data.draw(i);

    if(array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swapped = true;
    }

    if(i < array.length - j){
      i++;
    } else {

      if(swapped == false) {
        sorting = false;
      } else {
      swapped = false;
      }

      i = 0;
      j++;
    }
}
