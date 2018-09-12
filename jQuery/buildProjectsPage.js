$( document ).ready(function() {

  i = 0;
  if(programs[i].visible){
    $temp = $( "<div class='PROJECTS-Cell' id='cell" + i + "'>")
    $(".PROJECTS-Container").append($temp);
    $temp = $("<div class='galleryTitleText'><h1 style='color:" + programs[i].titleText + "'>" + programs[i].title + "</h1></div>")
    $("#cell" + i).append($temp);
    $temp = $( "<div class='button_cont gobtn' align='center'><a class='example_a' href='../" + programs[i].filepath + "' rel='nofollow noopener'>Open Project</a></div>")
    $("#cell" + i).append($temp);
    $temp = $( "<img class='' src='../" + programs[i].imgpath + "' alt=''>")
    $("#cell" + i).append($temp);
  }

  for (var i = programs.length-1; i > 0; i--) {
    if(programs[i].visible){
      $temp = $( "<div class='PROJECTS-Cell' id='cell" + i + "'>")
      $(".PROJECTS-Container").append($temp);
      $temp = $("<div class='galleryTitleText'><h1 style='color:" + programs[i].titleText + "'>" + programs[i].title + "</h1></div>")
      $("#cell" + i).append($temp);
      $temp = $( "<div class='button_cont gobtn' align='center'><a class='example_a' href='../" + programs[i].filepath + "' rel='nofollow noopener'>Open Project</a></div>")
      $("#cell" + i).append($temp);
      $temp = $( "<img class='' src='../" + programs[i].imgpath + "' alt=''>")
      $("#cell" + i).append($temp);
    }
  }
});
