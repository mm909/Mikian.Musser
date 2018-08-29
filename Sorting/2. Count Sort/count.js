var i = 0;
var z = 0;
var count;
var dataMin = 0;
var dataMax = 150;
var dataCount = 200;

function setup() {
  var canvas = createCanvas(windowWidth-9,500)
  canvas.parent("canvasContainer");

  data = new dataVisualization();
  data.setHeight(500);
  data.setWidth(windowWidth-10);
  data.setBackgroundColor(150);
  data.setDataCount(dataCount);
  data.setDataMin(dataMin);
  data.setDataMax(dataMax);
  data.calcDataWidth();
  data.getNewData();

/* -- First half of count sort -- */

  count = new Array(dataMax - dataMin + 1);
  for(var i = 0; i < count.length; i++){
    count[i] = 0;
  }

  for(var i = 0; i < data.data.length; i++){
    var number = data.data[i];
    count[number - dataMin] = count[number - dataMin] + 1;
  }

}

function draw(){
  data.draw(z);
  while(count[i-dataMin] > 0){
    data.data[z] = i;
    z++;
    count[i-dataMin] = count[i-dataMin] - 1;
  }
  i++;
  console.log(z)
  if(z == data.data.length){
    data.draw(-1)
  }
}

/* -- Count sort function below  -- */

/*
function countingSort(array, min, max):
    count: array of (max - min + 1) elements
    initialize count with 0

    for each number in array do
        count[number - min] := count[number - min] + 1
    done

    z := 0
    for i from min to max do
        while ( count[i - min] > 0 ) do
            array[z] := i
            z := z+1
            count[i - min] := count[i - min] - 1
        done
    done
*/

function countSort(array, min, max){
  console.log("-- Sorting -- ")

  var count = new Array(max - min + 1);
  for(var i = 0; i < count.length; i++){
    count[i] = 0;
  }

  for(var i = 0; i < array.length; i++){
    var number = array[i];
    count[number - min] = count[number - min] + 1;
  }

  var z = 0;
  for(var i = min; i <= max; i++){
    while(count[i-min] > 0){
      data.draw();
      array[z] = i;
      z++;
      count[i-min] = count[i-min] - 1;
    }
  }

  console.log("-- Fnished -- ")

}
