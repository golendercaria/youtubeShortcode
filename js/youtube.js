console.log(youtube_data);

	//loading api youtube
	var tag = document.createElement('script');
	
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	//generate iframe
	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player(youtube_data.container_id, {
			height: '360',
			width: '640',
			videoId: youtube_data.id,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}
	

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		if( youtube_data.autoplay ){
			event.target.playVideo();
		}
	}

	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	var done = false;
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 6000);
			done = true;
		}
	}
	
	function stopVideo() {
		player.stopVideo();
	}