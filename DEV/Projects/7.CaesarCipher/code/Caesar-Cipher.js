function setup() {
 console.log("-- Caesar Cipher --")
 console.log("-------------------")
 console.log("   Functions - ")
 console.log("   c(\"SampleText\"): Alpha text to Caesar Cipher.")
 console.log("   a(\"SampleText\"): Caesar Cipher text to Alpha.")
 console.log("-------------------")
 console.log("   Examples - ")
 console.log("   Example Use: c(\"Caesar Cipher\")")
 console.log("   Example Use: a(\"Ecguct\"Ekrjgt\")")
 console.log("-------------------")
 console.log(" ")
}

function c(input){
  var ccString = "";
  for(var i = 0; i < input.length; i++){
    ccString += (cc(input[i]));
  }
  console.log("-------------------");
  console.log("Caesar Cipher : " + ccString);
  return "Success."
}

function a(input){
  var rccString = "";
  for(var i = 0; i < input.length; i++){
    rccString += (rcc(input[i]));
  }
  console.log("-------------------");
  console.log("Decoded Text : " + rccString);
  return "Success."
}

function cc(c) {
    return String.fromCharCode(c.charCodeAt(0) + 2);
}

function rcc(c) {
    return String.fromCharCode(c.charCodeAt(0) - 2);
}
