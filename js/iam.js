if (debug) {
  console.log("iam.js");
}

function iam() {
  $("#iamRow").html("")
  let iam = `
  <div class="iamContainer">
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <p> Test1 </p>
      </div>
      <div class="col-md-4 col-sm-12">
        <p> Test2 </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <p> Test3 </p>
      </div>
      <div class="col-md-4 col-sm-12">
        <p> Test4 </p>
      </div>
    </div>
  </div>
  `
  $tempProjectCard = $(iam)
  $("#iamRow").append($tempProjectCard);
  hire(true);
}

jQuery(document).ready(function() {

});
