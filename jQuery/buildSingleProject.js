$(document).ready(function() {
  $id = $("head").attr('id');

  $(".PROJECT-Title-TitleText").text(programs[$id].title);
  $(".PROJECT-Text-Description-Text").append(programs[$id].SpotlightText);

});