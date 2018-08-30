$( document ).ready(function() {


$id = $('.PEP-ContentContainer').attr('id');

$temp = $( "<h1 class='programTitle'>" + programs[$id - 1].title + "</h1>" )
$(".PEP-Title").append($temp);

$temp = $( "<div class='tag-PEP tag-PEP-Download'></div>" )
$(".PEP-Description-Box").append($temp);

    $temp = $( "<a href=" + programs[$id-1].downloadLink + " class='" + "tag-Download'>Download</a>" )
    $( ".tag-PEP-Download" ).append($temp);

for(var j = 0; j < programs[$id-1].tags.length; j++){
$temp = $( "<div class='tag-PEP' id='tag" + $id + j + "' ></div>" )
$(".PEP-Description-Box").append($temp);

    $temp = $( "<p class='" + "tag-" + programs[$id-1].tags[j] + "'>" + programs[$id-1].tags[j] + "</p>" )
    $( "#tag" + $id + j  ).append($temp);
}


$temp = $( "<p class='PEP-Desc'>" + programs[$id-1].description + "<a target='_blank' href=" + programs[$id-1].rosettaLink + ">" + programs[$id-1].algLink + "</a></p>" )
$(".PEP-Description-Box").append($temp);

$temp = $( "<p class='PEP-Desc'>Created with <a target='_blank' href='https://p5js.org/'>P5.js</a></p>" )
$(".PEP-Description-Box").append($temp);

});
