<?php
	
	add_action( 'wp_enqueue_scripts', 'register_youtube_script', 10 );
	add_shortcode( "youtube", "shortcode_youtube" );
	
	function shortcode_youtube( $atts ){
	    $atts = shortcode_atts( array(
		    'id'          		=> null,
	        'autoplay' 			=> false,
	        'apikey'   			=> null,
	        'container_id'		=> "youtube_player",
	        'controls'			=> 2,
	        'hovervolume'		=> false,
	        'loop'				=> 0,
	        'modestbranding' 	=> 1,
	        'showinfo'			=> 0,
	    ), $atts );
	    
	    ?><div style="position: relative; padding-top: 56.25%; height: 0; width: 100%;"><div id="<?php echo $atts["container_id"]; ?>" style="z-index: 10; position: absolute; top:0; left: 0; width: 100%; height: 100%;"></div></div><?php
		wp_localize_script('youtube_script', 'youtube_data', $atts );
		wp_enqueue_script("youtube_script");
	}

	function register_youtube_script(){
		wp_register_script( 'youtube_script', get_stylesheet_directory_uri().'/tmp_youtube/js/youtube.js',array('jquery'), "0.1",true);
	}
	
	