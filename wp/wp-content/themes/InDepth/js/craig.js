console.log('craig.js');
(function($){
  $(document).ready( function(){

    /* The App Screen Shots ----------------------------------------- */

    var changeImage = function(index) {
      $('.app-screen').hide();
      $('#app-screen-'+index).show();
    }

    $('#feature-1').mouseenter(function() { changeImage(1); });
    $('#feature-2').mouseenter(function() { changeImage(2); });
    $('#feature-3').mouseenter(function() { changeImage(3); });
    $('#feature-4').mouseenter(function() { changeImage(4); });
    $('#feature-5').mouseenter(function() { changeImage(5); });
    $('#feature-6').mouseenter(function() { changeImage(6); });

    /* Mobile Read More --------------------------------------------- */

    $('.mobile_read_more_text').click(function() {
      $(this).css({display:'none'}).parents('.et_pb_text').find('.mobile_read_more_container').slideDown();
    });

    /* Hexagon Hovers ----------------------------------------------- */

    $('.hexa-hit-area').mouseenter(function(){
      if (!$(this).data('fading-in')){
        $(this).data('fading-in',true)
        $(this).parents('.hexaHolder').find('.hexa img').fadeTo(300, 1, function() {
          $(this).parents('.hexaHolder').find('.hexa-hit-area').data('fading-in', false)
        });
      }
    });

    $('.hexa-hit-area').mouseleave(function(){
      if (!$(this).data('fading-out')){
        $(this).data('fading-out', true)
        $(this).parents('.hexaHolder').find('.hexa img').fadeTo(2000, 0.6, function() {
          $(this).parents('.hexaHolder').find('.hexa-hit-area').data('fading-out', false)
        });
      }
    });

  });
})(jQuery)
