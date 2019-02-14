class enemy {
	constructor(img, x, y, size, type){
		var sz = size/3
		if(type === 0){
			this.img1 = img[0].get(140,0,28,20);
			this.img2 = img[0].get(172,0,28,20);
			this.w = sz;
			this.h = (sz)/1.4;
		} else if(type === 1){
			this.img1 = img[0].get(67,0,26,20);
			this.img2 = img[0].get(100,0,26,20);
			this.w = sz;
			this.h = (sz)/1.3;
		} else {
			this.img1 = img[0].get(0,0,20,20);
			this.img2 = img[0].get(33,0,20,20);
			this.w = sz;
			this.h = sz;
		}

		this.animate = true;
		this.type = type;

		this.x = x;
		this.y = y;
		this.spd = 2;
			this.killed = false;
			this.diedImg = img[1];
	}

	draw(sprite){
		if(!this.killed){
			if(sprite){
				image(this.img1, this.x, this.y, this.w, this.h);
			}else{
				image(this.img2, this.x, this.y, this.w, this.h);
			}
		}else{	// died
			if(this.animate){
				image(this.diedImg, this.x, this.y, this.w, this.h);
				this.y+=2;
			}
		}
	}

	move(){
		this.x += this.spd;
	}

	advance(){
		this.y += this.w;
	}


	getX(){
		return this.x;
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
		return this.w;
	}
		setW(w){
			this.w = w;
		}

	getH(){
		return this.h;
	}
		setH(h){
			this.h = h;
		}

	getSpd(){
		return this.spd;
	}
		setSpd(speed){
			this.spd = speed;
		}

	death(){
		this.killed = true;
		setInterval(() => {this.animate = !this.animate}, 150);
	}

	isKilled(){
		return this.killed;
	}

	screenResize(){
		var offSetX = this.x/this.w;
		var offSetY = this.y/this.h;

		this.w = ((windowWidth/1.1)/15)/3;
		if(this.type === 0){
			this.h = (((windowWidth/1.1)/15)/3)/1.4;
		} else if(this.type === 1){
			this.h = (((windowWidth/1.1)/15)/3)/1.3;		
		} else {
			this.h = (((windowWidth/1.1)/15)/3);
		}

		this.x = offSetX*this.w;
		this.y = offSetY*this.h;
	}
}