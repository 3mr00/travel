$(document).ready(function(){
  $('.box').fadeOut();
  $('.find-js').fadeOut();
  $('.label-js').fadeOut();
  $('.input-js').fadeOut();
  $('.button-js').fadeOut();
  $('.form3').fadeOut();

  var waypoints = $('.find').waypoint(function(direction) {
    $('.find-js').fadeIn().addClass('animated flipInX')
  }, {
  offset: '50%'
})

var waypoint = $('#features').waypoint(function(direction){
  $('.box').fadeIn().addClass('animated bounceInUp')
}, {
  offset:'50%'
})
var waypoint = $('#form').waypoint(function(direction){
  $('.label-js').fadeIn().addClass('animated bounceInLeft');
  $('.input-js').fadeIn().addClass('animated bounceInRight');
  $('.button-js').fadeIn().addClass('animated bounceInUp');
  $('.form3').fadeIn().addClass('animated bounceInUp');

}, {
  offset:'40%'
})


})

