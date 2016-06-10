// JS for hovering over the link
$(document).ready(function() {
  console.log("You are in the console right now!!");

  // $('.nav-items').mouseenter(function() {
  //   $(this).find('li').css('font-size', '3em');
  // });
  //
  // $('.nav-items').mouseleave(function() {
  //   $(this).find('li').css('font-size', '1.5em');
  // });

  $('.links').on('mouseenter', function() {
    $(this).find('li').css('padding-left', '0em');
    $(this).find('li').css('font-size', '2em');
  });

  $('.links').on('mouseleave', function() {
    $(this).find('li').css('padding-left', '0.35em');
    $(this).find('li').css('font-size', '1.5em');
  });
});
