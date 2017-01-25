$(document).ready(function() {
  $('body').addClass('js');
  var $main = $('#main'),
    $menulink = $('.menu-link');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $main.toggleClass('active');
  return false;
});});
