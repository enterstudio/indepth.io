console.log('craig.js');
(function($){
  $(document).ready( function(){

    /* The App Screen Shots ----------------------------------------- */

    var changeImage = function(index) {
      $('.app-screen').css({display:'none'});
      $('#app-screen-'+index).fadeIn();
    }

    $('#feature-1 h4').click(function() { changeImage(1); });
    $('#feature-2 h4').click(function() { changeImage(2); });
    $('#feature-3 h4').click(function() { changeImage(3); });
    $('#feature-4 h4').click(function() { changeImage(4); });
    $('#feature-5 h4').click(function() { changeImage(5); });
    $('#feature-6 h4').click(function() { changeImage(6); });

    /* Mobile Read More --------------------------------------------- */

    $('.mobile_read_more_text').click(function() {
      $(this).css({display:'none'}).parents('.et_pb_text').find('.mobile_read_more_container').slideDown();
    });

  });
})(jQuery)
