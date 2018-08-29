$( document ).ready(function() {

var id=1;

$temp = $( "<h1 class='programTitle'>" + programs[id - 1].title + "</h1>" )
$(".programTitleC").append($temp);

$temp = $( "<div class='tagEle download'></div>" )
$(".exampleDesc").append($temp);

    /* Create the tag */
    $temp = $( "<a href=" + programs[id-1].downloadLink + " class='" + "tag-download'>Download</a>" )
    $( ".download" ).append($temp);

    for(var j = 0; j < programs[id].tags.length; j++){
      /* Create the tag */
      $temp = $( "<div class='tagEle' id='tag" + i + j + "' ></div>" )
      $(".exampleDesc").append($temp);

          /* Create the tag */
          $temp = $( "<p class='" + "tag-" + programs[id].tags[j] + "'>" + programs[i].tags[j] + "</p>" )
          $( "#tag" + i + j  ).append($temp);
    }

    $temp = $( "<p class='programDescription'>" + programs[id-1].description + "<a target='_blank' href=" + programs[id].rosettaLink + ">" + programs[id-1].algLink + "</a></p>" )
    $(".exampleDesc").append($temp);

    $temp = $( "<p class='programDescription'>Created with <a target='_blank' href='https://p5js.org/'>P5.js</a></p>" )
    $(".exampleDesc").append($temp);

});
