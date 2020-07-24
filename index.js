$(document).ready(function(){
  $('.box').fadeOut();
  $('.find-js').fadeOut();
 

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


});



