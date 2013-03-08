function AudioAnalyzer(audioStream, dest) {

	this.analyzer = context.createAnalyser();
	this.analyzer.smoothingTimeConstant = 0.86;
    this.analyzer.fftSize = 512;
    //this.analyzer.minDecibels = 0.003;
    //this.analyzer.maxDecibels = 1;

	var fSpectrumArray = new Uint8Array( this.analyzer.frequencyBinCount );

	var destination = dest || context.destination;

	this.analyzer.connect(destination);


	this.analyze = function(channels){

		this.analyzer.getByteFrequencyData( fSpectrumArray );
		
		return isNaN(channels) ? fSpectrumArray : this.splitSoundSpectrum( fSpectrumArray, channels );

	}



	this.splitSoundSpectrum = function( soundSpectrum, channels){
			
		var spectrumChannels = [];
		var maxFrequenciesPerChannel = soundSpectrum.length / channels;

		// per channel
		var frequencySum = 0;
		var frequencyCount = 0;

		for(var i = 0; i < soundSpectrum.length; i++){

			frequencySum += soundSpectrum[i];
			frequencyCount++;

			if( frequencyCount >= maxFrequenciesPerChannel ){
				
				var averageFrequency = Math.round( frequencySum/frequencyCount );

				spectrumChannels.push(averageFrequency);

				frequencySum = 0;
				frequencyCount = 0;
			}

		}

		return spectrumChannels;

	}

}
