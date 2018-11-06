let TOC_break = [];
let TOC_names = [];

function createTOC() {
  // BUILD: TOC Table //
  for (var i = 0; i < $("#mainContent").find("section").length; i++) {
    TOC_names.push('_' + $("#mainContent").find("section")[i].id.split("_")[1])
  }
  // BUILD: TOC Break Table //
  TOC_break = [];
  for (var i = 0; i < TOC_names.length; i++) {
    TOC_break.push(document.getElementById(TOC_names[i]).getBoundingClientRect().y);
  }
}

function updateTOC() {
  for (var i = 0; i < TOC_names.length; i++) {
    document.getElementById('TOC' + TOC_names[i]).style.display = "none";
  }
  for (var i = TOC_break.length - 1; i >= 0; i--) {
    if ((currScroll) >= startScroll + TOC_break[i] - 1) {
      document.getElementById('TOC' + TOC_names[i]).style.display = "inline";
      return;
    }
  }

  console.log(currScroll <= (startScroll + TOC_break[0] - 1));
  console.log(currScroll);
  console.log(TOC_break[0]);
  console.log((startScroll + TOC_break[0] - 1));
  if (currScroll <= (startScroll + TOC_break[0] - 1)) {
    document.getElementById('TOC' + TOC_names[0]).style.display = "inline";
  }
}