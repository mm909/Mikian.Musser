var dataMin = -10;
var dataMax = 100;
var dataCount = 50;

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
  gnomeSort(data.data)
  data.draw();
}

function draw(){

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
