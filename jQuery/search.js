function filterProjects() {
  input = document.getElementById("searchBox");
  filterValue = input.value.toLowerCase();
  // console.log(filterValue);
  for (var i = 0; i < programs.length; i++) {
    var hide = true;
    for (var j = 0; j < programs[i].keyWords.length; j++) {
      if (programs[i].keyWords[j].includes(filterValue)) {
        hide = false;
      }
    }
    if (hide) {
      // console.log("Hiding" + programs[i]);
      $("#cell" + i).css("display", "none")
    } else {
      $("#cell" + i).css("display", "inline-block")
    }
  }
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}

$(document).ready(function() {
  let list = getUrlVars();
  console.log(list);
  if (list.search.length > 0) {

    document.getElementById("searchBox").value = list.search;
  }
  filterProjects();
});