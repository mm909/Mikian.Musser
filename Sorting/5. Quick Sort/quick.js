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
  data.draw();
  quickSort(data.data, 0, data.data.length-1)
  console.log(data.data)

}

function draw(){

}

function quickSort(a,lo,hi){
  if(lo < hi){
    var p = partition(a,lo,hi);
    quickSort(a, lo, p - 1);
    quickSort(a, p + 1, hi);
  }
}

function partition(a,lo,hi){
  var pivot = a[hi];
  i = lo;
  for(j = lo; j <= hi - 1; j++){
    if(a[j] < pivot){
      swap(a,i,j);
      i++;
    }
  }
  swap(a,i,hi);
  return i;
}
