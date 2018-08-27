function setup() {
  createCanvas(501,250);

  data = new dataVisualization();
  data.setHeight(250);
  data.setWidth(500);
  data.setBackgroundColor(150);
  data.setDataCount(10);
  data.setDataMin(0);
  data.setDataMax(10);
  data.calcDataWidth();
  data.getNewData();
  countSort(data.data,0,10);

}

function draw(){
  data.draw();
}

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
      array[z] = i;
      z++;
      count[i-min] = count[i-min] - 1;
    }
  }
  console.log("-- Fnished -- ")

}
