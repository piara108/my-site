// JS for hovering over the link
// $(document).ready(function() {
//
// });


var ready;
// $(document).on("page:change", function() {
  // $(document).trigger("ready");
ready = function() {

  console.log("The page has loaded");

  $(".links").hover(function() {
    $(this).css("padding-left", "1em");
  });
};


$(document).ready(ready);
$(document).on('page:load', ready);
