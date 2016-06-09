// JS for hovering over the link
$(document).ready(function() {
  console.log("You are in the console right now!!");

  $('.nav-items').on('mouseenter', function() {
    $(this).find('li').css('font-size', '2em');
  });

  $('.nav-items').on('mouseleave', function() {
    $(this).find('li').css('font-size', '1.5em');
  });
});
