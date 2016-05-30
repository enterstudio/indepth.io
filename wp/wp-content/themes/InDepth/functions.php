<?php
/* Proper way to enqueue scripts and styles */
function noworries_includes(){

    wp_register_style( 'slick-css', '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css');
    wp_enqueue_style( 'slick-css' );
    
    wp_register_script( 'slick-js', '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js', array('jquery'), true);
    wp_enqueue_script( 'slick-js' );

    wp_register_script( 'noworries-js', get_stylesheet_directory_uri().'/includes/js/noworries_scripts.js', array('jquery'), true);
    wp_enqueue_script( 'noworries-js' );
    
}

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

add_action('wp_enqueue_scripts', 'noworries_includes', 'enqueue_parent_styles');


// Add Shortcode
function device_slider() { ?>

	<div id="iphone">
		<div class="slider-screens">
		  <div><img src="<?php echo get_stylesheet_directory_uri();?>/images/screens/screen-1.png"/></div>
		  <div><img src="<?php echo get_stylesheet_directory_uri();?>/images/screens/screen-2.png"/></div>
		  <div><img src="<?php echo get_stylesheet_directory_uri();?>/images/screens/screen-3.png"/></div>
		  <div><img src="<?php echo get_stylesheet_directory_uri();?>/images/screens/screen-4.png"/></div>
		  <div><img src="<?php echo get_stylesheet_directory_uri();?>/images/screens/screen-5.png"/></div>
		  <div><img src="<?php echo get_stylesheet_directory_uri();?>/images/screens/screen-6.png"/></div>
		</div>
		<img class="device-iphone" src="<?php echo get_stylesheet_directory_uri();?>/images/Apple-iPhone.png"/>
	</div>

<?php }
add_shortcode( 'display-iphone', 'device_slider' );



add_editor_style( 'css/editor.css' );

function themeit_mce_buttons_2( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}
add_filter( 'mce_buttons_2', 'themeit_mce_buttons_2' );
function themeit_tiny_mce_before_init( $settings ) {
	$style_formats = array(
		array( 'title' => 'Pull Quote', 'inline' => 'span', 'classes' => 'id-pullquote' ),
	);
	$settings['style_formats'] = json_encode( $style_formats );
	return $settings;
}
add_filter( 'tiny_mce_before_init', 'themeit_tiny_mce_before_init' ); 

?>