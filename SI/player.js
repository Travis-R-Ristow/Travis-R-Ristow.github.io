var lazers = [];
var coolingDown = false;

class player {
	constructor(img, size){
		this.img = img[0];
		this.x = (width/2)-size/2;
		this.y = height-(size/1.5);
		this.sz = size;
		this.spd = 2;
		this.lives = 3;
		this.death = img[1];
		this.died = false;
	}


	draw(){
		if(this.died){
			image(this.death, this.x, this.y, this.sz, this.sz/1.4);
		} else {
			image(this.img, this.x, this.y, this.sz, this.sz/1.4);
		}
		if(playing){
			if (keyIsDown(68)) {	// RIGHT
				if(coolingDown){
					this.x += this.spd/2
				}else{
					this.x += this.spd;
				}
			}
			if (keyIsDown(65)) {	// LEFT
				if(coolingDown){
					this.x -= this.spd/2
				}else{
					this.x -= this.spd;
				}
			}
			if (keyIsDown(32)) {	// SPACEBAR
				if(!coolingDown){
					// console.log("Suppressing Fire!!!");
					var newLazer = new lazer(this.x, this.y, this.sz);
					lazers.push(newLazer);
					coolingDown = true;
					setTimeout( function(){ coolingDown = false}, 1000);
				}
			}
		}
		

	}

	drawLazers(){
		for(var l of lazers){
			l.draw();
			if(playing){
				l.move();
			}
			if(l.getY() < 0-l.getSize()){
				arrPop(lazers, lazers.indexOf(l))
			}
		}
		// this.showCoolingDown();
		// console.log(lazers.length);
	}
	
	showCoolingDown(){
		if(coolingDown){
			textSize(this.sz/2);
			fill(0,0,255);
			rect(-(width/4),-(height/7),width/2,height/4.5, 50);
			fill(255);
			text("Cooling Down", width/300,this.sz/2);
		}
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
		return this.sz;
	}

	getH(){
		return this.sz/1.4;
	}
	
	getSpd(){
		return this.spd;
	}
		setSpd(speed){
			this.spd = speed;
		}
	getLives(){
		return this.lives;
	}
	hit(){
		this.lives--;
		if (this.lives == 0) {
			playing = false;
			// END GAME
		}
		playing = false;
		var deathAnimation = setInterval(
			() => {
				this.died = !this.died;	
			},200);
		setTimeout(() => {
			clearInterval(deathAnimation);
			this.died = false;
			playing = true;
			if(this.lives == 0){
				this.died = true;
				playing = false;
				// restartButton();
			}
		}, 2000);
	}

	screenResize(){
		var offSetX = this.x/this.sz;
		var offSetY = this.y/this.sz;

		this.sz = (windowWidth/1.1)/15;

		this.x = offSetX*this.sz;
		this.y = offSetY*this.sz;

		for(var lazer of lazers){
			lazer.screenResize(this);
		}
	}
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// move(){
	// 	if(this.dir === "right"){
	// 		this.x += this.spd;
	// 	}
	// 	if(this.dir === "left"){
	// 		this.x -= this.spd;
	// 	}
	// 	if(this.dir === "up"){
	// 		this.y -= this.spd;
	// 	}
	// 	if(this.dir === "down"){
	// 		this.y += this.spd;
	// 	}
	// }
	// 


	// getDir(direction){
	// 	if(direction == "right"){
	// 		return this.right;
	// 	}
	// 	if(direction == "left"){
	// 		return this.left;
	// 	}
	// 	if(direction == "up"){
	// 		return this.up;
	// 	}
	// 	if(direction == "down"){
	// 		return this.down;
	// 	}
	// }
	// 	setDir(direction){
	// 		this.dir = direction;
	// 	}

