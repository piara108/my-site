// JS for hovering over the link
// $(document).ready(function() {
//
// });

$(document).on("page:load", function() {
  $(document).trigger("ready");

  console.log("The page has loaded");

  $(".links").on("mouseenter", function() {
    $(this).find("li").css("padding-left", "2em");
  });

  $(".links").on("mouseleave", function() {
    $(this).find("li").css("padding-left", "-0.2em");
  });
});



// var ready;
// ready = function() {
//   console.log("You are in the console right now!!");
//
//   $(".links").on("mouseenter", function() {
//     $(this).find("li").css("margin-left", "2em");
//   });
//
//   $(".links").on("mouseleave", function() {
//     $(this).find("li").css("margin-left", "-0.2em");
//   });
// };
//
// $(document).ready(ready);
// $(document).on('page:load', ready);
//
// $(".nav-items").mouseenter(function() {
//   $(this).find("li").css("margin-left", "2em");
// });
//
// $(".nav-items").mouseleave(function() {
//   $(this).find("li").css("margin-left", "-0.05em");
// });
