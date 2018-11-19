$(document).ready(function() {
  $("#exampleCodeScroll").html(escape(defaultCodeHTML));
  prettyPrint();
  examplePageScroll();
});
//
var exampletextType = "JS";
var exampletextSpeed = "Medium"
//
// function exampleGoText() {
//   setTextSpeed(textSpeed)
//   if ($("#codeInput").val() == "") {
//     if (textType == "JS") {
//       $("#codeInput").val(defaultCodeJS);
//     } else if (textType == "HTML") {
//       $("#codeInput").val(defaultCodeHTML);
//     } else if (textType == "CSS") {
//       $("#codeInput").val(defaultCodeCSS);
//     }
//   }
//   $("#codeScroll").html(escape($("#codeInput").val()));
//   $(".wrapper").css("display", "block");
//   $(".startScreen").css("display", "none");
//   setPrettyPrintClass();
//   prettyPrint();
// }
//
// function examplePopluateText() {
//   $("#codeScroll").html($("#codeInput").val());
// }
//
// function exampleSetPrettyPrintClass() {
//   let temp = textType.toLowerCase();
//   $("#codeScroll").removeClass("lang-" + 'js')
//   $("#codeScroll").removeClass("lang-" + 'html')
//   $("#codeScroll").removeClass("lang-" + 'css')
//   $("#codeScroll").addClass("lang-" + temp)
// }