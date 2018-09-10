$( document ).ready(function() {

$id = $('.PEP-ContentContainer').attr('id');

$temp = $( "<title>" + programs[$id].title + "</title>" )
$("Body").append($temp);

$temp = $( "<h1 class='programTitle'>" + programs[$id].title + "</h1>" )
$(".PEP-Title").append($temp);

  if(programs[$id].console){
    $temp = $( "<div class='PEP-Instructions-Outter'></div>" )
    $(".PEP-Instructions-Container").append($temp);

        $temp = $( "<h3>This program runs in the console!</h3>" )
        $(".PEP-Instructions-Outter").append($temp);

        $temp = $( "<div class='PEP-Instructions-Inner1'></div>" )
        $(".PEP-Instructions-Outter").append($temp);

            $temp = $( "<p>Press <b>F12</b> to open up the console.</p>" )
            $(".PEP-Instructions-Inner1").append($temp);

            $temp = $( "<div class='PEP-Instructions-Inner2'></div>" )
            $(".PEP-Instructions-Inner1").append($temp);

                  $temp = $( "<p>Then follow the Instructions in the <b>Console.</b> :)</p>" )
                  $(".PEP-Instructions-Inner2").append($temp)
  }

$temp = $( "<div class='tag-PEP tag-PEP-Download'></div>" )
$(".PEP-Description-Box").append($temp);

    $temp = $( "<a href=" + programs[$id].downloadLink + " class='" + "tag-Download'>Download</a>" )
    $( ".tag-PEP-Download" ).append($temp);

for(var j = 0; j < programs[$id].tags.length; j++){
$temp = $( "<div class='tag-PEP' id='tag" + $id + j + "' ></div>" )
$(".PEP-Description-Box").append($temp);

    $temp = $( "<p class='" + "tag-" + programs[$id].tags[j] + "'>" + programs[$id].tags[j] + "</p>" )
    $( "#tag" + $id + j  ).append($temp);
}

$temp = $( "<p class='PEP-Desc'>" + programs[$id].description + "<a target='_blank' href=" + programs[$id].rosettaLink + ">" + programs[$id].algLink + "</a></p>" )
$(".PEP-Description-Box").append($temp);

if(programs[$id].p5){
  $temp = $( "<p class='PEP-Desc'>Created with <a target='_blank' href='https://p5js.org/'>P5.js</a></p>" )
  $(".PEP-Description-Box").append($temp);
}


});
