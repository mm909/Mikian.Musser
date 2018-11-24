if (debug) {
  console.log("iam.js");
}

function iam() {
  $("#iamRow").html("")
  let iam = `
  <div id='iamrow1' class='col-sm'>
    <p> Test </p>
  </div>
  <div id='iamrow2' class='col-sm'>
    <p> Test </p>
  </div>
  <div id='iamrow3' class='col-sm'>
    <p> Test </p>
  </div>
  <div id='iamrow4' class='col-sm'>
    <p> Test </p>
  </div>
  `
  $tempProjectCard = $(iam)
  $("#iamRow").append($tempProjectCard);
  hire(true);
}

jQuery(document).ready(function() {

});