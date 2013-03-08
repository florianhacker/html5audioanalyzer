function AudioLoader() {

	this.load = function(url, callback) {
		console.log('load', url)
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';

		// Decode asynchronously
		var _this = this;
		request.onload = function() {
			
			context.decodeAudioData(request.response, function(buffer) {
				callback(buffer);
			}); 
		}

		request.send();

	}

}