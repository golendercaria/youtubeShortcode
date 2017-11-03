	//console.log(youtube_data);

	/*
	*	youtube_data.hovervolume 	0 (none) 1 (active sound on hover) 2 (same 1, but disable sound if quit area)	
	*/

	//loading api youtube
	var tag = document.createElement('script');
	
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	//generate iframe
	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player(youtube_data.container_id, {
			width: '100%',
			height:'50%',
			videoId: youtube_data.id,
			playerVars: { 'autoplay': youtube_data.autoplay, 'controls':  youtube_data.controls, 'playlist' : youtube_data.id , 'loop' : youtube_data.loop, 'modestbranding' : youtube_data.modestbranding, 'showinfo' : youtube_data.showinfo, 'rel': 0 },
		    events: {
		      'onReady': onPlayerReady,
		      //'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
		      //'onStateChange': onPlayerStateChange,
		      //'onError': onPlayerError
			}
		});
	}
	

	//player ready set var
	function onPlayerReady(event) {
		if( youtube_data.hovervolume > 0 ){
			event.target.setVolume(0);
			jQuery("#"+youtube_data.container_id).mouseover(function(e){
				event.target.setVolume(100);
			});
			
			if( youtube_data.hovervolume == 2 ){
				jQuery("#"+youtube_data.container_id).mouseleave(function(e){
					event.target.setVolume(0);
				});
			}
		}
	}


	
	