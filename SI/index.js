
function preload() {
    sheet = new spriteSheet('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/62e732b2-bda8-4b5f-b21c-67a31a752f58/d28krr9-22da40b1-5add-4d51-9520-4402eb0fe081.png');
}

function setup() {
    // level = 1;
    playing = true;
    // CANVAS
        var size = windowWidth/1.5;
        aspectRatio = (displayWidth) / (displayHeight);
        createCanvas(size/1.1, (size/aspectRatio)/1.1).parent('spaceInvaders');
        
    // PLAYER
        lazers = [];
        coolingDown = false;
        dustie = new player(sheet.getPlayer(), size/15);

    // ENEMY
        aliens = sheet.getEnemies();
        bumpers = width/4;
        aliensArr = [];
        squad = level*5;
        var thing = 0;
        var spacing = [0,0];
        if(squad > 14) squad=14;
        for (var t=0; t < 3+(level-1); t++){
            spacing[1] = t;
            if(thing > 3) thing = 0;
            for (var i=0; i < squad; i++){
                spacing[0] = i;
                if(i>28){
                    spacing[0] = 0;
                }
               aliensArr.push(new enemy(aliens, bumpers+( spacing[0] *(size/30)), height/12+( spacing[1] *(size/25)), size/15, thing));
            }
            thing++;
        }

        setInterval(() => {
            alienAnimation = !alienAnimation;
        }, 1000);
}


function draw() {
    background(10);
    dustie.draw();
    dustie.drawLazers();
    drawEnemies();
    drawLives(sheet, dustie);
    drawScore();
    if(!playing){
        drawGameOver();
        if(dustie.getLives() == 0){
            restartButton();
        }
    }
    if (aliensArr.length == 0) {
        drawLvlComplete();
        // var oneTime = setTimeout( () => {
            level++;
            // levelUp();
            setup();
    }
}

function drawEnemies() {
    for(var enemy of aliensArr){
        enemy.draw(alienAnimation);
        if(enemy.getX() > width-bumpers){
            while(enemy.getX() > width-bumpers){
                enemy.setX(width-bumpers);
            }
            enemy.setSpd(enemy.getSpd()*-1);
            enemy.advance();
        }
        if(enemy.getX() < bumpers){
            while(enemy.getX() < bumpers){
                enemy.setX(bumpers);
            }
            enemy.setSpd(enemy.getSpd()*-1);
            enemy.advance();
        }
        if(!enemy.isKilled() && playing){
            enemy.move();
            lazerHit(enemy);
            hitPlayer(enemy);
        }
    }
}

function lazerHit(enemy){
    for(var lazer of lazers){
        if(collision(lazer, enemy)){
            enemy.death();
            score ++;
            arrPop(lazers, lazers.indexOf(lazer));
            setTimeout(() => {
                arrPop(aliensArr, aliensArr.indexOf(enemy));
            },1500);
        }
    }
}

function hitPlayer(enemy){
    if(collision(dustie, enemy)){
        enemy.death();
        dustie.hit();
    }
}

function levelUp() {
    score += 10*level;
    playing = true;

    // PLAYER
        lazers = [];
        coolingDown = false;

    // ENEMY
        aliens = sheet.getEnemies();
        bumpers = width/4;
        aliensArr = [];
        squad = level*5;
        var thing = 0;
        var spacing = [0,0];
        if(squad > 14) squad=14;
        for (var t=0; t < 3+(level-1); t++){
            spacing[1] = t;
            if(thing > 3) thing = 0;
            for (var i=0; i < squad; i++){
                spacing[0] = i;
                if(i>28){
                    spacing[0] = 0;
                }
               aliensArr.push(new enemy(aliens, bumpers+( spacing[0] *(size/30)), height/12+( spacing[1] *(size/25)), size/15, thing));
            }
            thing++;
        }
}

function windowResized() {
   var size = windowWidth/1.5;
        aspectRatio = (displayWidth) / (displayHeight);
        bumpers = width/4;
    resizeCanvas(size/1.1, (size/aspectRatio)/1.1);
    dustie.screenResize();

    for(var enemy of aliensArr){
        enemy.screenResize();
    }
}


window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};