var textType = "JS";
var textSpeed = "Medium"

$(document).ready(function() {
  popluateText();
});

function setTextSpeed(s) {
  textSpeed = s;
  $("#speedButton").html(textSpeed);
}

function setTextType(t) {
  textType = t;
  $("#langButton").html(textType)
  setPrettyPrintClass();
}

function goText() {
  setTextSpeed(textSpeed)
  if ($("#codeInput").val() == "") {
    if (textType == "JS") {
      $("#codeInput").val(defaultCodeJS);
    } else if (textType == "HTML") {
      $("#codeInput").val(defaultCodeHTML);
    } else if (textType == "CSS") {
      $("#codeInput").val(defaultCodeCSS);
    }
  }
  $("#codeScroll").html(escape($("#codeInput").val()));
  $(".wrapper").css("display", "block");
  $(".startScreen").css("display", "none");
  setPrettyPrintClass();
  prettyPrint();
}

function popluateText() {
  $("#codeScroll").html($("#codeInput").val());
}

function clearText() {
  $("#codeInput").val("")
}

function resetText() {
  $("#codeInput").val(defaultCodeJS);
}

function setPrettyPrintClass() {
  let temp = textType.toLowerCase();
  $("#codeScroll").removeClass("lang-" + 'js')
  $("#codeScroll").removeClass("lang-" + 'html')
  $("#codeScroll").removeClass("lang-" + 'css')
  $("#codeScroll").addClass("lang-" + temp)
}

function escape(str) {
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  return str;
}