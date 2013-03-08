function AudioPlayer() {

	this.play = function(buffer, dest) {
		
		var source = context.createBufferSource(); // creates a sound source
		source.buffer = buffer;                    // tell the source which sound to play
		
		var destination = dest || context.destination;

		source.connect(destination);       // connect the source to the context's destination (the speakers)
		source.noteOn(0);                          // play the source now
	}

}

