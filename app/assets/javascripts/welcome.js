// JS for hovering over the link
// $(document).ready(function() {
//
// });

$(document).on("page:change", function() {
  $(document).trigger("ready");

  console.log("The page has loaded");

  $(".link-set").on("mouseenter", function() {
    $(this).find(".links").css("padding-left", "1em");
  });

  $(".link-set").on("mouseleave", function() {
    $(this).find(".links").css("padding-left", "0em");
  });
});


// $(document).ready(ready);
// $(document).on('page:load', ready);
