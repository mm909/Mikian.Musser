var dataMin = -10;
var dataMax = 100;
var dataCount = 20;



function setup() {
  createCanvas(501,250);

  data = new dataVisualization();
  data.setHeight(250);
  data.setWidth(500);
  data.setBackgroundColor(150);
  data.setDataCount(dataCount);
  data.setDataMin(dataMin);
  data.setDataMax(dataMax);
  data.calcDataWidth();
  data.getNewData();
  insertionSort(data.data);
  data.draw();

}

function draw(){


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
