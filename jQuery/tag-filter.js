$( document ).ready(function() {

  $temp = $( "<div class='tag-Home-Filter' id='tag-Home-Filter'></div>" )
  $( ".tag-Home-Filter" ).append($temp);

      for(var i = 0; i < tags.length; i++){
            /* Create the tag */
            $temp = $( "<p class='" + "tag-" + tags[i] + " tag-Filter'>" + tags[i] + "</p>" )
            $( "#tag-Home-Filter").append($temp);
      }

});
