$( document ).ready(function() {

      for(var i = 0; i < tags.length; i++){
            /* Create the tag */
            $temp = $( "<p class='" + "tag-" + tags[i] + " tag-Filter' id=" + i + ">" + tags[i] + "</p>" )
            $( ".tag-Home-Filter").append($temp);
      }

      $(".tag-Filter").hover(function(){
          $(this).css("padding", "2px");
          $(this).css("border", "1px solid gray");
          }, function(){
          $(this).css("border-width", "0px");
          $(this).css("padding", "3px");
      });

      $( ".tag-Filter" ).click(function() {
        hide(tags[this.id]);
      });

      $(".tag-Sorting").hover(function(){
          $(this).css("background", "#FDFC95");
          }, function(){
          $(this).css("background", "#FCFA80");
      });

      $(".tag-JavaScript").hover(function(){
          $(this).css("background", "#C0FE9B");
          }, function(){
          $(this).css("background", "#AFFC80");
      });

      $(".tag-Visualization").hover(function(){
          $(this).css("background", "#8EBBFE");
          }, function(){
          $(this).css("background", "#80B3FC");
      });

      $(".tag-Math").hover(function(){
          $(this).css("background", "#F98AFF");
          }, function(){
          $(this).css("background", "#F881FF");
      });

      $(".tag-Cryptography").hover(function(){
          $(this).css("background", "#FDD698");
          }, function(){
          $(this).css("background", "#FFCF81");
      });

      $(".tag-Console").hover(function(){
          $(this).css("background", "#9FFFD7");
          }, function(){
          $(this).css("background", "#81FFCB");
      });

});

function hide(filter) {
  if(filter == "All"){
    for(var i = 0; i < programs.length; i++){
      programs[i].visible = true;
    }
  } else {
    for(var i = 0; i < programs.length; i++){
      var hide = true;
      programs[i].visible = hide;
      for(var j = 0; j < programs[i].tags.length; j++){
          if(programs[i].tags[j] == filter){
            hide = false;
        }
      }
      programs[i].visible = !hide;
    }
  }


  Draw();
}
