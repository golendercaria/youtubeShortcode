<?php
	
	add_action( 'wp_enqueue_scripts', 'register_youtube_script', 10 );
	add_shortcode( "youtube", "shortcode_youtube" );
	
	function shortcode_youtube( $atts ){
	    $atts = shortcode_atts( array(
		    'id'          	=> null,
	        'autoplay' 		=> false,
	        'apikey'   		=> null,
	        'container_id'	=> "youtube_player"
	    ), $atts );
	    
	    ?><div id="<?php echo $atts["container_id"]; ?>"></div><?php
		wp_localize_script('youtube_script', 'youtube_data', $atts );
		wp_enqueue_script("youtube_script");
	}

	function register_youtube_script(){
		wp_register_script( 'youtube_script', get_stylesheet_directory_uri().'/tmp_youtube/js/youtube.js',array('jquery'), "0.1",true);
	}
	
	