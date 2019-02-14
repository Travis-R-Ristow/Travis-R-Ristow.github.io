class lazer {
	constructor(x, y, size){
		this.x = x;
		this.y = y;
		this.size = size/2;
		this.spd = this.size/25;
	}

	draw(){
		fill(192);
		rect(this.x+(this.size/1.2), this.y, this.size/4, this.size/2);
	}

	move(){
		this.y -= this.spd;
	}

	// cleanUp(){
	// 	if(this.x < 100){
	// 		this.size = 0;
	// 	}
	// }


	getX(){
		return this.x+(this.size/1.2);
	}
		setX(x){
			this.x = x;
		}

	getY(){
		return this.y;
	}
		setY(y){
			this.y = y;
		}

	getW(){
		return this.size/4;
	}

	getH(){
		return this.size/2;
	}

	getSize(){
		return this.size;
	}
		setSize(size){
			this.size = size;
		}

	screenResize(player){
		var offSetX = this.x/this.size;
		var offSetY = this.y/this.size;

		this.size = player.sz/2;

		this.x = offSetX*this.size;
		this.y = offSetY*this.size;

		this.spd = this.size/25;
	}
}