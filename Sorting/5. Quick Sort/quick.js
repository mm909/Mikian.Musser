var dataMin = -10;
var dataMax = 100;
var dataCount = 100;
var height = 250;
var width = 500;

var lo = 0;
var hi = 0;

var testCount = 0;

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
  //data.draw();
  hi = data.data.length - 1;
  quickSort(data.data,0,hi);
  data.draw();
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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
