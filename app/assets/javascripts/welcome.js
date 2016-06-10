// JS for hovering over the link
// $(document).ready(function() {
//
// });

$(document).on("page:change", function() {
  $(document).trigger("ready");

  console.log("The page has loaded");

  $(".link-set").on("mouseenter", function() {
    $(this).find("li").css("margin-left", "1em");
  });

  $(".link-set").on("mouseleave", function() {
    $(this).find("li").css("margin-left", "0em");
  });
});


// $(document).ready(ready);
// $(document).on('page:load', ready);
