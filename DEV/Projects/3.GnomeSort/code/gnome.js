var dataMin = 0;
var dataMax = 1000;
var dataCount = 150;

var i = 1;
var j = 2;


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
    if(data.data[i-1] <= data.data[i]){
      i = j;
      j++;
    } else {
      swap(data.data, i-1, i);
      i--;
      if(i == 0){
        i = j;
        j++;
      }
    }
    data.draw(i);
  } else {
    data.draw(-1)
  }

}

/* -- Gnome sort function below  -- */

/*
function gnomeSort(a[0..size-1])
    i := 1
    j := 2
    while i < size do
        if a[i-1] <= a[i] then
            // for descending sort, use >= for comparison
            i := j
            j := j + 1
        else
            swap a[i-1] and a[i]
            i := i - 1
            if i = 0 then
                i := j
                j := j + 1
            endif
        endif
    done
*/

function gnomeSort(array){
  console.log("-- Sorting -- ")

  var i = 1;
  var j = 2;

  while(i < array.length){
    if(array[i-1] <= array[i]){
      i = j;
      j++;
    } else {
      swap(array, i-1, i);
      i--;
      if(i == 0){
        i = j;
        j++;
      }
    }
  }

  console.log("-- Fnished -- ")
}
