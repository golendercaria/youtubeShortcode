youtubeShortcode
================

Enable Youtube shortcode working with Youtube API.

How it work ?
=============

Simple use shortcode : [youtubeShortcode id="YOUTUBE_VIDEO_ID"]

Params
======

'id'          		=> null, // (String) Read Youtube documentation - Your Youtube video ID<br/>
'autoplay' 			=> false, // (Bool) Read Youtube documentation - For launch autoplay<br/>
'apikey'   			=> null,  // (String) Not use for the moment<br/>
'container_id'		=> "youtube_player", // (String) Html id name<br/>
'controls'			=> 2, // (Int) Read Youtube documentation - For displaying controls<br/>
'hovervolume'		=> 0, // (Int) 0 => Sound is activated | 1 => Sound is activated in hover | 2 => Same 1, but sound is desactivated in mouseouter<br/> 
'loop'				=> 0, // (Int) Read Youtube documentation - Activate loop<br/>
'modestbranding' 	=> 1, // (Int) Read Youtube documentation - Displaying branding<br/>
'showinfo'			=> 0, // (Int) Read Youtube documentation - Displaying information<br/>

To know
=======

Default related video is disable because the plugin displaying youtube video like background.