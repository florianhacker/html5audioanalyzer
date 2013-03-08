function Particle(posx, posy) {

	this.posX = posx; 
	this.posY = posy; 

	this.velX = 20; //default 
	this.velY = 0; //default

	this.size = 100; //default
	this.color = "rgba(255,255,255,1)"; //default

	this.gravity = 0; 

	this.update = function() {

		// simulate drag
		// this.velX *= this.drag; 
		// this.velY *= this.drag;
		
		this.velY += this.gravity; 

		// and the velocity to the position
		this.posX += this.velX;
		this.posY += this.velY; 
	};
	
	this.render = function(c) {

		c.fillStyle = this.color;

		c.beginPath();
		c.arc(this.posX, this.posY, this.size, 0, Math.PI*2, true);
		c.closePath();
		
		c.fill();
	};
}
