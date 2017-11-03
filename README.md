youtubeShortcode
================

Enable Youtube shortcode working with Youtube API.

How it work ?
=============

Simple use shortcode : [youtubeShortcode id="YOUTUBE_VIDEO_ID"]

Params
======

'id'          		=> null, // (String) Read Youtube documentation - Your Youtube video ID
'autoplay' 			=> false, // (Bool) Read Youtube documentation - For launch autoplay
'apikey'   			=> null,  // (String) Not use for the moment
'container_id'		=> "youtube_player", // (String) Html id name
'controls'			=> 2, // (Int) Read Youtube documentation - For displaying controls
'hovervolume'		=> 0, // (Int) 0 => Sound is activated | 1 => Sound is activated in hover | 2 => Same 1, but sound is desactivated in mouseouter 
'loop'				=> 0, // (Int) Read Youtube documentation - Activate loop
'modestbranding' 	=> 1, // (Int) Read Youtube documentation - Displaying branding
'showinfo'			=> 0, // (Int) Read Youtube documentation - Displaying information

To know
=======

Default related video is disable because the plugin displaying youtube video like background.