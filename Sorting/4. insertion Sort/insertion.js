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
}

function draw(){


}

/* -- Insertion sort function below  -- */



function gnomeSort(array){
  console.log("-- Sorting -- ")


  console.log("-- Fnished -- ")
}
