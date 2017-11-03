<?php
	
class youtubeShortcode{
	
	public function __construct(){
		
		$this->menuPageTitle = "youtubeShortcode Options";
		$this->menuPageLabel = "youtubeShortcode Options";

		add_action( 'wp_enqueue_scripts', array( $this, 'youtubeShortcode_script' ), 0 );
		add_shortcode( "youtubeShortcode", array( $this, 'youtubeShortcode' ) );
	}
	
	public function youtubeShortcode_script(){
		wp_register_script( 'youtubeShortcode-js', plugin_dir_url( __FILE__ ) . '/js/youtubeShortcode.js', array('jquery'), "0.1", true);
	}
	
	public function youtubeShortcode( $atts ){
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
		wp_localize_script( 'youtubeShortcode-js', 'youtube_data', $atts );
		wp_enqueue_script( 'youtubeShortcode-js' );
	}

}