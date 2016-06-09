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

  $('.list-items').on('mouseenter', function() {
    $(this).find('li').css('font-size', '2em');
  });

  $('.list-items').on('mouseleave', function() {
    $(this).find('li').css('font-size', '1.5em');
  });
});
