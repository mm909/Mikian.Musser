$(document).ready(function() {
  $(".gallery-cell").hover(function() {
    // console.log($(this).attr("id"));
    $i = $(this).attr("id")
    $("#" + $i).find(".gobtn").css("visibility", "visible")
    // $("#" + $i).find(".galleryTitleText").css("visibility","visible")
  }, function() {
    $("#" + $i).find(".gobtn").css("visibility", "hidden")
    // $("#" + $i).find(".galleryTitleText").css("visibility","hidden")
  });
  $(".PROJECTS-Cell").hover(function() {
    // console.log($(this).attr("id"));
    $i = $(this).attr("id")
    $("#" + $i).find(".gobtn").css("visibility", "visible")
    // $("#" + $i).find(".galleryTitleText").css("visibility","visible")
  }, function() {
    $("#" + $i).find(".gobtn").css("visibility", "hidden")
    // $("#" + $i).find(".galleryTitleText").css("visibility","hidden")
  });
});