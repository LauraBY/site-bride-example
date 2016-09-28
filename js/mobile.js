$(function() {
  $('.iconMenu').click(function() {
    if($('.itemsMenu').is(':visible')) {
      $('.itemsMenu').removeClass('showitems');
    }
    else {
      $('.itemsMenu').addClass('showitems');
    }
 });
});
