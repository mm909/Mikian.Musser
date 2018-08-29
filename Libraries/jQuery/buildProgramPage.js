$( document ).ready(function() {


$id = $('.CCContainer').attr('id');

$temp = $( "<h1 class='programTitle'>" + programs[$id - 1].title + "</h1>" )
$(".programTitleC").append($temp);

$temp = $( "<div class='tagEle download'></div>" )
$(".exampleDesc").append($temp);

    $temp = $( "<a href=" + programs[$id-1].downloadLink + " class='" + "tag-download'>Download</a>" )
    $( ".download" ).append($temp);

    for(var j = 0; j < programs[$id-1].tags.length; j++){
      $temp = $( "<div class='tagEle' id='tag" + $id + j + "' ></div>" )
      $(".exampleDesc").append($temp);

          $temp = $( "<p class='" + "tag-" + programs[$id-1].tags[j] + "'>" + programs[$id-1].tags[j] + "</p>" )
          $( "#tag" + $id + j  ).append($temp);
    }


    $temp = $( "<p class='programDescription'>" + programs[$id-1].description + "<a target='_blank' href=" + programs[$id-1].rosettaLink + ">" + programs[$id-1].algLink + "</a></p>" )
    $(".exampleDesc").append($temp);

    $temp = $( "<p class='programDescription'>Created with <a target='_blank' href='https://p5js.org/'>P5.js</a></p>" )
    $(".exampleDesc").append($temp);

});
