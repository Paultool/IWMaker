
var IObject = Class.create({
  initialize: function(id, src, type, position, start, end) {
    this.id = id;
	this.type = type;
    this.src = src;
	this.position = position;
	this.start = start;
	this.end = end;
	
  },
  StartPlay: function() {
	
	var s =this.type;
	switch(this.type){
	
		case 'audio':
			var audio = document.createElement(this.type);
			audio.id= this.id;
			audio.type= 'audio/mpeg';
			audio.src = this.src;
			audio.volume = 1;
			
			var audioStartTime = this.start;

			audio.addEventListener('canplay', function() { 
			   audio.currentTime = audioStartTime;
			}, false);
			
			audio.play();
			return audio; 
			
		case 'video':
			var video = document.createElement(this.type);
			video.id= this.id;
			video.type= 'video/mp4';
			video.src = this.src;
			video.width = 820; 
			video.videoHeight 
			
			var videoStartTime = this.start;

			video.addEventListener('canplay', function() { 
			   video.currentTime = videoStartTime;
			}, false);
			
			video.load();
			video.play();
			//
			$('#VideoContainer').html(video);
			return video; 
		default:
			alert('def');
		
	}
	
	
  }
});

