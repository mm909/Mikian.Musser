if (debug) {
  console.log("search.js");
}

function search() {
  input = document.getElementById("searchBox");
  filterValue = input.value.toLowerCase();
  for (var i = 0; i < projects.length; i++) {
    var hide = true;
    let key = projects[i].text.toLowerCase()
    if (key.includes(filterValue)) {
      hide = false;
    }
    key = projects[i].title.toLowerCase()
    if (key.includes(filterValue)) {
      hide = false;
    }
    for (var j = 0; j < projects[i].keyWords.length; j++) {
      key = projects[i].keyWords[j].toLowerCase();
      if (key.includes(filterValue)) {
        hide = false;
      }
    }
    if (hide) {
      $("#cardWrapper" + i).css("display", "none")
    } else {
      $("#cardWrapper" + i).css("display", "")
    }
  }
}

// function getUrlVars() {
//   var vars = {};
//   var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
//     vars[key] = value;
//   });
//   return vars;
// }
//
// $(document).ready(function() {
//   let list = getUrlVars();
//   console.log(list);
//   if (list.search.length > 0) {
//
//     document.getElementById("searchBox").value = list.search;
//   }
//   filterProjects();
// });