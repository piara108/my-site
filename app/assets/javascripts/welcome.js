// JS for hovering over the link
$(document).ready(function() {
  console.log("You are in the console right now!!");

  $('.whole-page').on('mouseenter', function() {
    $(this).find("li").css("font-size", "4em");
  });
});
