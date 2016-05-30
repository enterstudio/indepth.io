jQuery(document).ready(function(){
	jQuery('.slider-screens').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});

	var nav = jQuery('#the-app [id^=feature-]');
	
	nav.on('click', function () {
		nav.removeClass('active-feature');
		jQuery(this).addClass('active-feature');
		
		return false;
	});
	nav.on('hover', function () {
		nav.removeClass('active-feature');
		jQuery(this).addClass('active-feature');
		
		return false;
	});

});