jQuery('#cartButton').click(function() {

  $('html, body').animate({
    scrollTop: 0
  }, 100);

  $('#cart-menu').addClass('show_cart');

});
