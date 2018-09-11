$( document ).ready(function() {

  // <div class="HOME-tag">
  //   <h1>Featured</h1>
  // </div>

  $temp = $( "<div class='HOME-tag' id='tempID1'></div>" )
  $("Body").append($temp);
    $temp = $( "<h1>All Projects<h1>" )
    $("#tempID1").append($temp);

  // <div class="gallery js-flickity" id="testA" data-flickity='{"contain": true, "wrapAround": true,"adaptiveHeight": false}'>
  $temp = $( "<div class='gallery js-flickity' id='testD'>")
  $("Body").append($temp);

  for(i = 0; i <programs.length; i++){
    // <div class="gallery-cell" id="00">
    //   <div class="button_cont gobtn" align="center"><a class="example_a" href="#" target="_blank" rel="nofollow noopener">Open Project</a></div>
    //   <img class="" src="30.CirclePacking/image.png" alt="">
    // </div>
    $temp = $( "<div class='gallery-cell' id='3" + i + "'>")
    $("#testD").append($temp);
      $temp = $( "<div class='button_cont gobtn' align='center'><a class='example_a' href='" + programs[i].filepath + "' target='_blank' rel='nofollow noopener'>Open Project</a></div>")
      $("#3" + i).append($temp);
      $temp = $( "<img class='' src='" + programs[i].imgpath + "' alt=''>")
      $("#3" + i).append($temp);
  }

  $('#testD').flickity({
    // options
    contain: true,
    wrapAround: true,
    adaptiveHeight: false,
  });



});
