$( document ).ready(function() {
  Draw();
});

function Draw(){
  $( ".Home-ProjectPill-Container" ).empty();

  index = [];
  for(var i = 0; i < programs.length; i++){
      index[i] = i;
  }

  var i = 0;
  for(var k = 0; k < programs.length; k++){

    i = index[Math.floor(Math.random()*index.length)];
    index.splice(index.indexOf(i), 1);
    if(programs[i].visible){
      $temp = $( "<div class='Home-ProjectPill' id='Home-ProjectPill" + i + "' ></div>" )
      $( ".Home-ProjectPill-Container" ).append($temp);
      //--

          $temp =
          $( "<img class='Home-ProjectPill-Image' id='Home-ProjectPill-Image" +
          i
          + "' src=" + programs[i].imgpath + "></img>" )
          $( "#Home-ProjectPill" + i).append($temp);

          $temp = $( "<div class='Home-ProjectPill-Description' id='Home-ProjectPill-Description" + i + "' ></div>" )
          $( "#Home-ProjectPill" + i ).append($temp);
          //--

              $temp = $( "<div class='Home-ProjectPill-Title' id='title-container" + i + "' ></div>" )
              $( "#Home-ProjectPill-Description" + i ).append($temp);
              //--

                  $temp = $( "<a href=" + programs[i].filepath + " id='Home-ProjectPill-Title" + i + "' >" + programs[i].title + "</a>" )
                  $( "#title-container" + i ).append($temp);

                  $temp = $( "<div class='tag-Home' id='tag-Home" + i + "' ></div>" )
                  $( "#title-container" + i  ).append($temp);
                  //--

                      for(var j = 0; j < programs[i].tags.length; j++){
                        $temp = $( "<div class='tag-ProjectPill' id='tag-ProjectPill" + i + j + "' ></div>" )
                        $( "#tag-Home" + i  ).append($temp);

                            $temp = $( "<p class=' tag-" + programs[i].tags[j] + "-Pill tag-" + programs[i].tags[j] + "'>" + programs[i].tags[j] + "</p>" )
                            $( "#tag-ProjectPill" + i + j  ).append($temp);
                      }

              $temp = $( "<div class='Home-ProjectPill-shortDescription' id='Home-ProjectPill-shortDescription" + i + "' ></div>" )
              $( "#Home-ProjectPill-Description" + i  ).append($temp);

              $temp = $( "<p>" + programs[i].shortDescription + "</p>" )
              $( "#Home-ProjectPill-shortDescription" + i  ).append($temp);
    }
  }
}
