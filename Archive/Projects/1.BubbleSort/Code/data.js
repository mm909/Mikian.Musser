function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

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
