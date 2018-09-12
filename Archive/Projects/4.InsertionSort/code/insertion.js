var dataMin = -10;
var dataMax = 100;
var dataCount = 150;

var i = 1;
var j = 0;

function setup() {
  var canvas = createCanvas(windowWidth-9,500)
  data = new dataVisualization();
  data.setHeight(500);
  data.setWidth(windowWidth-10);
  data.setBackgroundColor(150);
  data.setDataCount(dataCount);
  data.setDataMin(dataMin);
  data.setDataMax(dataMax);
  data.calcDataWidth();
  data.getNewData();
  data.draw();
}

function draw(){
  if(i < data.data.length){
    var value = data.data[i];
    j = i - 1;
    while(j >= 0 && data.data[j] > value){
      data.draw(j);
      data.data[j+1] = data.data[j];
      j--;
    }
    data.data[j+1] = value;
    i++;
  } else {
    data.draw(-1);
  }
}

/* -- Insertion sort function below  -- */

/*

function insertionSort(array A)
    for i from 1 to length[A]-1 do
        value := A[i]
        j := i-1
        while j >= 0 and A[j] > value do
            A[j+1] := A[j]
            j := j-1
        done
        A[j+1] = value
    done

*/

function insertionSort(array){
  console.log("-- Sorting -- ")

  var j = 0;
  for(var i = 1; i < array.length; i++){
    var value = array[i];
    j = i - 1;
    while(j >= 0 && array[j] > value){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = value;
  }

  console.log("-- Fnished -- ")
}
