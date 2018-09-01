$( document ).ready(function() {
  for(var i = 0; i < tags.length; i++){
        /* Create the tag */
        $temp = $( "<p class=' tag-Unselectable " + "tag-" + tags[i] + " tag-Filter' id=" + i + ">" + tags[i] + "</p>" )
        $( ".tag-Home-Filter").append($temp);
        console.log(tags[i])
  }

  $( ".tag-All" ).click(function() {
    hide(tags[0]);
  });

  $(".tag-All").hover(function(){
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $(".tag-Sorting").hover(function(){
    $(this).css("background", "#FDFC95");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#FCFA80");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Sorting" ).click(function() {
    hide(tags[1]);
  });

  $(".tag-JavaScript").hover(function(){
      $(this).css("background", "#C0FE9B");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#AFFC80");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-JavaScript" ).click(function() {
    hide(tags[2]);
  });

  $(".tag-Visualization").hover(function(){
      $(this).css("background", "#8EBBFE");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#80B3FC");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Visualization" ).click(function() {
    hide(tags[3]);
  });

  $(".tag-Math").hover(function(){
      $(this).css("background", "#F98AFF");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#F881FF");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Math" ).click(function() {
    hide(tags[4]);
  });

  $(".tag-Cryptography").hover(function(){
      $(this).css("background", "#FDD698");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#FFCF81");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Cryptography" ).click(function() {
    hide(tags[5]);
  });

  $(".tag-Console").hover(function(){
      $(this).css("background", "#9FFFD7");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#81FFCB");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Console" ).click(function() {
    hide(tags[6]);
  });

  $(".tag-Challenge").hover(function(){
      $(this).css("background", "#FD9696");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#FF8181");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Challenge" ).click(function() {
    hide(tags[7]);
  });

  $(".tag-Game").hover(function(){
      $(this).css("background", "#A894FE");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#9981FF");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Game" ).click(function() {
    hide(tags[8]);
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
  drawTags();
}

function drawTags(){

  $(".tag-Sorting-Pill").hover(function(){
    $(this).css("background", "#FDFC95");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#FCFA80");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Sorting-Pill" ).click(function() {
    hide(tags[1]);
  });

  $(".tag-JavaScript-Pill").hover(function(){
      $(this).css("background", "#C0FE9B");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#AFFC80");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-JavaScript-Pill" ).click(function() {
    hide(tags[2]);
  });

  $(".tag-Visualization-Pill").hover(function(){
      $(this).css("background", "#8EBBFE");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#80B3FC");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Visualization-Pill" ).click(function() {
    hide(tags[3]);
  });

  $(".tag-Math-Pill").hover(function(){
      $(this).css("background", "#F98AFF");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#F881FF");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Math-Pill" ).click(function() {
    hide(tags[4]);
  });

  $(".tag-Cryptography-Pill").hover(function(){
      $(this).css("background", "#FDD698");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#FFCF81");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Cryptography-Pill" ).click(function() {
    hide(tags[5]);
  });

  $(".tag-Console-Pill").hover(function(){
      $(this).css("background", "#9FFFD7");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#81FFCB");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Console-Pill" ).click(function() {
    hide(tags[6]);
  });

  $(".tag-Challenge-Pill").hover(function(){
      $(this).css("background", "#FD9696");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#FF8181");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Challenge-Pill" ).click(function() {
    hide(tags[7]);
  });

  $(".tag-Game-Pill").hover(function(){
      $(this).css("background", "#A894FE");
      $(this).css("padding", "2px");
      $(this).css("border", "1px solid gray");
      }, function(){
      $(this).css("background", "#9981FF");
      $(this).css("border-width", "0px");
      $(this).css("padding", "3px");
  });

  $( ".tag-Game-Pill" ).click(function() {
    hide(tags[8]);
  });

}
