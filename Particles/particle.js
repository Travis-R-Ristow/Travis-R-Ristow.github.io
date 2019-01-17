class particle{
	constructor(x, y, size, xSpd, ySpd){
		this.x = x;
		this.y = y;
		this.sz = size;
		this.xSpd = xSpd;
		this.ySpd = ySpd;
		this.conected = false;
	}

	draw(){
		noStroke();
		// fill(172,210,113);
		fill(255,255,0);
		ellipse(this.x+this.sz/7, this.y-this.sz/7, this.sz, this.sz);
		fill(0);
		ellipse(this.x, this.y, this.sz, this.sz);
	}

	move(){
		this.x += this.xSpd;
		this.y += this.ySpd;

		if(this.x < 0+(this.sz/2) || this.x > width-(this.sz/2)){
			this.xSpd *= -1;
		}
		if(this.y < 0+(this.sz/2) || this.y > height-(this.sz/2)){
			this.ySpd *= -1;
		}
	}

	getX(){
		return this.x;
	}
		setX(newX){
			this.x = newX;
		}

	getY(){
		return this.y;
	}
		setY(newY){
			this.y = newY;
		}

	getSize(){
		return this.sz;
	}
		setSize(newSize){
			this.sz = newSize;
		}

	getConected(){
		return this.conected;
	}
		setConected(bool){
			this.conected = bool;
		}

	getySpd(){
		return this.ySpd;
	}
		setySpd(newySpd){
			this.ySpd = newySpd;
		}

	getxSpd(){
		return this.xSpd;
	}
		setxSpd(newxSpd){
			this.xSpd = newxSpd;
		}

	// RESIZE ()=>{}
}