var particles = [];
var divWidth;
var divHeight;

function setup(){
	divWidth = document.getElementById('bg').offsetWidth;
	divHeight = document.getElementById('bg').offsetHeight;
	createCanvas(windowWidth, divHeight).parent("bg");
	do{
		particles.push(new particle(random(0,divWidth),random(0,divHeight),divWidth/150,random(-0.5,0.5),random(-0.5,0.5)));
	}while(particles.length < divWidth/25)
}


// var firstParticle = new particle(100,100,20,1,1);

function draw(){
	background(204,255,255);
	noStroke();
	for (var p of particles){
		p.draw();
		p.move();
		for (var p2 of particles){
			if(dist(p.getX(),p.getY(), p2.getX(),p2.getY()) < divWidth/20 && !p2.getConected() ){
				stroke(0);
				strokeWeight(divWidth/500)
				line(p.getX(),p.getY(), p2.getX(),p2.getY());
				// p.setConected(true);
			}
		}
	}
}


function windowResized() {
	divWidth = document.getElementById('bg').offsetWidth;
	divHeight = document.getElementById('bg').offsetHeight;
	resizeCanvas(windowWidth, divHeight);
	particles= [];
	do{
		particles.push(new particle(random(0,divWidth),random(0,divHeight),divWidth/150,random(-0.5,0.5),random(-0.5,0.5)));
	}while(particles.length < divWidth/25);
}