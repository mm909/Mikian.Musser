$( document ).ready(function() {

  for (var i = 0; i < tags.length; i++) {
    // <div class="HOME-tag">
    //   <h1>Featured</h1>
    // </div>
    $temp = $( "<div class='HOME-tag' id='c-" + tags[i] + "'></div>" )
    $("Body").append($temp);

    $temp = $( "<h1>" + tags[i] + "</h1>" )
    $("#c-" + tags[i]).append($temp);

    // <div class="gallery js-flickity" id="testA" data-flickity='{"contain": true, "wrapAround": true,"adaptiveHeight": false}'>
    $temp = $( "<div class='gallery js-flickity' id='c-" + tags[i] + "-flickity'>")
    $("Body").append($temp);

    for(j = 0; j <programs.length; j++){
      var include = false;
      for (var k = 0; k < programs[j].keyWords.length; k++) {
        if(programs[j].keyWords[k].includes(tags[i].toLowerCase())){
          include = true;
          break;
        }
      }

      if(include){
        // console.log("placing " + programs[j].title + " in " + tags[i]);
        // <div class="gallery-cell" id="00">
        //   <div class="button_cont gobtn" align="center"><a class="example_a" href="#" target="_blank" rel="nofollow noopener">Open Project</a></div>
        //   <img class="" src="30.CirclePacking/image.png" alt="">
        // </div>
        $temp = $( "<div class='gallery-cell' id='cell" + i + j + "'>")
        $("#c-" + tags[i] + "-flickity").append($temp);
        $temp = $("<div class='galleryTitleText'><h1 style='color:" + programs[j].titleText + "'>" + programs[j].title + "</h1></div>")
        $("#cell" + i + j).append($temp);
        $temp = $( "<div class='button_cont gobtn' align='center'><a class='example_a' href='" + programs[j].filepath + "' rel='nofollow noopener'>Open Project</a></div>")
        $("#cell" + i + j).append($temp);
        $temp = $( "<img class='' src='" + programs[j].imgpath + "' alt=''>")
        $("#cell" + i + j).append($temp);
      }
    }

    $("#c-" + tags[i] + "-flickity").flickity({
      // options
      contain: true,
      adaptiveHeight: false,
      cellAlign: 'left'
    });
  }
});
