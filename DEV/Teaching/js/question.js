jQuery(document).ready(function() {
  $(".question").hover(function() {
    $i = $(this).attr("id")
    $("#q" + $i).find(".answer").css("display", "inline");
  }, function() {
    $("#q" + $i).find(".answer").css("display", "none")
  });
});