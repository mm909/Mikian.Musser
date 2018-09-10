function setup() {
 console.log("-- Rot-13 Cipher --")
 console.log("-------------------")
 console.log("   Functions - ")
 console.log("   r(\"SampleText\"): Alpha text to Rot-13 Cipher.")
 console.log("   a(\"SampleText\"): Rot-13 Cipher text to Alpha.")
 console.log("-------------------")
 console.log("   Examples - ")
 console.log("   Example Use: r(\"Rot-13 Cipher\")")
 console.log("   Example Use: a(_bgTXZaPvcure)")
 console.log("-------------------")
 console.log(" ")
}

function r(input){
  var ccString = "";
  for(var i = 0; i < input.length; i++){
    ccString += (cc(input[i]));
  }
  console.log("-------------------");
  console.log("Rot-13 Cipher : " + ccString);
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

// a == 97
// z == 122

function cc(c) {
  return String.fromCharCode((((c.charCodeAt(0) - 97) + 13)%26)+97);
}

function rcc(c) {
  return String.fromCharCode((((c.charCodeAt(0) - 97) - 13)%26)+97);
}
