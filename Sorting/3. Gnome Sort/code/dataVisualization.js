class dataVisualization {

  constructor(array){
    this.height    = 0;
    this.width     = 0;
    this.dataCount = 0;
    this.dataMin   = 0;
    this.dataMax   = 0;
    this.data      = [];
    this.dataWidth = 0;
    this.backgroundColor = 0;

    if(array){
      this.dataCount = array.length;
      for(var i = 0; i < this.dataCount; i++){
        this.data[i] = array[i];
        //console.log(this.data[i]);
      }
    }
  }

  draw(curr){
    background(this.backgroundColor);
    for(var i = 0; i < this.dataCount; i++){
      var dataHeight = floor(map(this.data[i], this.dataMin, this.dataMax, 0, this.height - 1));
      var x = i * this.dataWidth;
      var y = this.height - dataHeight - 1;
      if(i == curr || curr == -1){
        fill(0,255,0);
      } else {
        fill(255);
      }
      rect(x,y,this.dataWidth, dataHeight)
    }
  }

  getNewData(){
    console.log("-- Generating new data -- ");
    console.log("dataCount          : " + this.dataCount);
    console.log("dataMin            : " + this.dataMin);
    console.log("dataMin            : " + this.dataMax);
    console.log("height             : " + this.height);
    console.log("width              : " + this.width);
    console.log("dataWidth          : " + this.dataWidth);
    console.log("backgroundColor    : " + this.backgroundColor);

    for(var i = 0; i < this.dataCount; i++){
      this.data[i] = floor(random(this.dataMin, this.dataMax + 1));
      //console.log(this.data[i]);
    }
    console.log(this.data)
  }

  setHeight(temp){
    this.height = temp;
  }
  setWidth(temp){
    this.width = temp;
  }
  setDataCount(temp){
    this.dataCount = temp;
  }
  setDataMin(temp){
    this.dataMin = temp;
  }
  setDataMax(temp){
    this.dataMax = temp;
  }
  setDataWidth(temp){
    this.dataWidth = temp;
  }
  setData(index, temp){
    this.data[index] = temp;
  }
  setBackgroundColor(temp){
    this.backgroundColor = temp;
  }
  calcDataWidth(){
    this.dataWidth = this.width / this.dataCount;
  }

}
