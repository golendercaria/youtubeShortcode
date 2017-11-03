console.log(youtube_data);

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
			videoId: youtube_data.id,
			playerVars: { 'autoplay': youtube_data.autoplay, 'controls':  youtube_data.controls },
		    events: {
		      'onReady': onPlayerReady,
		      //'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
		      //'onStateChange': onPlayerStateChange,
		      //'onError': onPlayerError
			}
		});
	}
	

	// 4. The API will call this function when the video player is ready.
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
		/*
		if( youtube_data.autoplay ){
			event.target.playVideo();
		}
		*/
	}

	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	/*var done = false;
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 6000);
			done = true;
		}
	}*/
	
	function stopVideo() {
		player.stopVideo();
	}
	
	