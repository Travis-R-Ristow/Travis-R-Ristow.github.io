class spriteSheet {
	constructor(str){
		this.sheet = loadImage(str);
	}


	getTitle(){
		var title;
		title = this.sheet.get(0,0,this.sheet.width,this.sheet.width/3.5);
		return title;
	}

	getPlayer(){
		var player = [];
		player[0] = this.sheet.get(25,105,105,75);
		player[1] = this.sheet.get(366,274,28,20);
		return player;
	}

	getEnemies(){
		var enemy = [];
		enemy[0] = this.sheet.get(5,224,200,20);
		enemy[1] = this.sheet.get(435,275,30,20);
		return enemy;
	}

}