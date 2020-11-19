$(document).ready(function () {
  //add click event to element
  $('.open-nav').click(function () {

    //hide menu and show icon
    $(this).hide();
    $('.close-nav').show();

    $('.header__nav-links').animate({
      'left': '0'
    }).css('visibility', 'visible');

  });

  //add click event to element
  $('.close-nav').click(function () {

    $(this).hide();
    $('.open-nav').show();

    $('.header__nav-links').animate({
      'left': '-250px'
    });

  });

  //close toggle when a link is clicked
  $('.header__nav-links').on('click', 'a , li', function () {

    $('.open-nav').show();
    $('.close-nav').hide();

    $('.header__nav-links').animate({
      'left': '-250px'
    });
  });
});