// JS for hovering over the link
// $(document).ready(function() {
//
// });

$(document).on("page:change", function() {
  $(document).trigger("ready");

  console.log("The page has loaded");

  $(".link-set").on("mouseenter", function() {
    $(".links").each(function() {
      $(this).css("padding-left", "1em");
    });
  });

  $(".link-set").on("mouseleave", function() {
    $(".links").each(function() {
      $(this).css("padding-left", "0em");
    });
  });


  // $(".links").each(function() {
  //   $(this).on("mouseenter", function() {
  //     $(this).css("padding-left", "1em");
  //   });
  //
  //   $(this).on("mouseleave", function() {
  //     $(this).css("padding-left", "0em");
  //   });ra
  // })
});


// $(document).ready(ready);
// $(document).on('page:load', ready);
