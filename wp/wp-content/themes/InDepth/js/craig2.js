(function($){
  $(document).ready( function(){

    /* The App Screen Shots ----------------------------------------- */

    var currentImage = 1;

    var changeImage = function(index) {
      index === 7 ? index = 1 : null;
      index === 0 ? index = 6 : null;
 
      currentImage = index;
      $('.app-screen').hide();
      $('#app-screen-'+index).show();
      $('.feature-list').removeClass('active-feature')
      $('#feature-'+index).addClass('active-feature')
    }

    var startSlideshow

    var startNewSlideShow = function () {
      startSlideshow = setInterval(function(){changeImage(currentImage + 1)}, 1000)
    }

    startNewSlideShow()


    $('#feature-1').mouseenter(function() { changeImage(1); clearInterval(startSlideshow);});
    $('#feature-2').mouseenter(function() { changeImage(2); clearInterval(startSlideshow);});
    $('#feature-3').mouseenter(function() { changeImage(3); clearInterval(startSlideshow);});
    $('#feature-4').mouseenter(function() { changeImage(4); clearInterval(startSlideshow);});
    $('#feature-5').mouseenter(function() { changeImage(5); clearInterval(startSlideshow);});
    $('#feature-6').mouseenter(function() { changeImage(6); clearInterval(startSlideshow);});

    $('#feature-1').mouseleave(function() { startNewSlideShow(); });
    $('#feature-2').mouseleave(function() { startNewSlideShow(); });
    $('#feature-3').mouseleave(function() { startNewSlideShow(); });
    $('#feature-4').mouseleave(function() { startNewSlideShow(); });
    $('#feature-5').mouseleave(function() { startNewSlideShow(); });
    $('#feature-6').mouseleave(function() { startNewSlideShow(); });

    $('#app-slide-left').click(function() { changeImage(currentImage - 1); clearInterval(startSlideshow);})
    $('#app-slide-right').click(function() { changeImage(currentImage + 1); clearInterval(startSlideshow);})


    /* Mobile Read More --------------------------------------------- */

    $('.mobile_read_more_text').click(function() {
      $(this).css({display:'none'}).parents('.et_pb_text').find('.mobile_read_more_container').slideDown();
    });

    /* Hexagon Hovers ----------------------------------------------- */

    $('.hexa-hit-area').mouseenter(function(){
      var hitBox = this;
      if (!$(hitBox).data('fading-in')){
        $(hitBox).data('fading-in', true)
        $(hitBox).parents('.hexaHolder').find('.hexa img').fadeTo(300, 1, function() {
          $(hitBox).data('fading-in', false)
        });
      }
    });

    // $('.hexa-hit-area').mouseleave(function(){
    //   if (!$(this).data('fading-out')){
    //     $(this).data('fading-out', true)
    //     $(this).parents('.hexaHolder').find('.hexa img').fadeTo(1000, 0.6, function() {
    //       $(this).parents('.hexaHolder').find('.hexa-hit-area').data('fading-out', false)
    //     });
    //   }
    // });


    $('.hexa-hit-area').mouseleave(function(){
        $(this).parents('.hexaHolder').find('.hexa img').fadeTo(1000, 0.6);
    });

  });
})(jQuery)
