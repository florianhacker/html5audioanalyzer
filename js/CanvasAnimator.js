function CanvasAnimator() {

	var particles = [];
	this.maxParticles = 256;
	this.birthRate = 256;

	this.draw = function( ctx, soundSpectrum ){

		ctx.clearRect( 0, 0, window.innerWidth, window.innerHeight);

		this.makeParticles( this.birthRate );

		this.clearOldParticles();


		for (i=0; i<soundSpectrum.length; i++) {
			
			var particle = particles[i];
			
			if(particle){
				
				particle.size = soundSpectrum[i];

				particle.update();
				
				particle.render(ctx);

			}

		}
		
	}



	this.makeParticles = function(count){

		var idx = 0;

		while(count>0){
			
			var particle = new Particle();
			particle.posX = idx++ *160 + 200;
			particle.posY = window.innerHeight/2;
			particle.size = 10;
			
			particles.push( particle );
			
			count--;
		}
	} 



	this.clearOldParticles = function(){
		
		while(particles.length > this.maxParticles ){
			particles.shift(); 
		}

	}


}
