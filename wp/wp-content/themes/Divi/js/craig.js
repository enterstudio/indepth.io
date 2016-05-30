(function($){
  $(document).ready( function(){

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

  });
})(jQuery)
