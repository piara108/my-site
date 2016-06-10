// JS for hovering over the link
// $(document).ready(function() {
//
// });

$(document).on("page:change", function() {
  $(document).trigger("ready");

  console.log("The page has loaded");

  $("li").on("mouseenter", function() {
    $(this).css("padding-left", "1em");
  });

  $("li").on("mouseleave", function() {
    $(this).css("padding-left", "0em");
  });
});


// $(document).ready(ready);
// $(document).on('page:load', ready);
