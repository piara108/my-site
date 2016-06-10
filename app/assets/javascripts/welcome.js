// JS for hovering over the link
$(document).ready(function() {
  console.log("You are in the console right now!!");

  $(".links").on("mouseenter", function() {
    $(this).css("margin-left", "2em");
  });

  $(".links").on("mouseleave", function() {
    $(this).css("margin-left", "-0.05em");
  });
});

// $(".nav-items").mouseenter(function() {
//   $(this).find("li").css("margin-left", "2em");
// });
//
// $(".nav-items").mouseleave(function() {
//   $(this).find("li").css("margin-left", "-0.05em");
// });
