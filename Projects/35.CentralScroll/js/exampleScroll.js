let exampleCurrScroll = 0;
let exampleMaxScroll = 0;

function examplePageScroll() {
  let exampletempScroll = 0;
  let exampletempDelay = 0;
  exampleMaxScroll = document.getElementById("exampleCodeScroll").scrollHeight - document.getElementById("exampleCodeScroll").clientHeight;
  exampleCurrScroll = document.getElementById("exampleCodeScroll").scrollTop;
  if (exampletextSpeed == "Very Fast") {
    exampletempScroll = 2;
    exampletempDelay = 5;
  } else if (exampletextSpeed == "Fast") {
    exampletempScroll = 1;
    exampletempDelay = 0;
  } else if (exampletextSpeed == "Medium") {
    exampletempScroll = 1;
    exampletempDelay = 10;
  } else if (exampletextSpeed == "Slow") {
    exampletempScroll = 1;
    exampletempDelay = 25;
  } else if (exampletextSpeed == "Very Slow") {
    exampletempScroll = 1;
    exampletempDelay = 50;
  }
  if (exampleCurrScroll > exampleMaxScroll - 10) {
    document.getElementById("exampleCodeScroll").scrollTop = 0;
  }
  document.getElementById("exampleCodeScroll").scrollTop += 1;
  scrolldelay = setTimeout(examplePageScroll, exampletempDelay);
}

// EOF