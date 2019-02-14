
function drawLives(spriteSheet, player) {
	for(var i=0; i <  player.getLives(); i++){
		image(spriteSheet.getPlayer()[0],(width/1.5)+((width/19)*i),5, (width/20),(width/20)/1.4);
	}
}

function drawScore() {
	fill(255);
	textAlign(CENTER);
	textSize(width/25);
	text('Score:'+score+"\nLevel:"+level, width/10, height/15);
}

function drawGameOver() {
	fill(255,0,0);
	textAlign(CENTER);
	textSize(width/10);
	if(dustie.getLives()>0){
		text('You Died', width/2, height/2);
	} else {
		text('Game Over!', width/2, height/2);
	}
	 if (mouseIsPressed) {
    	if (mouseButton === LEFT) {
    		// resetGame();
    		setup();
    	}
	}
}


function drawLvlComplete() {
	fill(0,255,0);
	textAlign(CENTER);
	textSize(width/10);
	text('You Win!', width/2, height/2);
	textSize(width/25);
	text("Next Level.",width/2, height/2+(width/14));
}


function restartButton(){
	fill(0,255,0,75);
	stroke(255,0,0);
	rect(width/2-((width/5)/2), height/2+((height/10)/2), width/5, height/12);
	fill(255,0,0);
	textSize(width/25);
	text("Restart",width/2, height/2+(width/14));
	stroke(0);
}