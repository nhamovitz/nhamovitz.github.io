function Ball() {
    
    this.pos = createVector(width/2,height/2);    
    this.r = 25;
        
    var increaseXVel = 1.02;
    
    // var maxBounceAngle = (5*PI)/12;
    
    
    this.render = function() {
        ellipse(this.pos.x,this.pos.y,this.r,this.r)
    }
        
    this.update = function() {
        this.pos.add(this.vel);
        
    }
    
    this.start = function () {
        this.pos = createVector(width/2,height/2);
        gameOn = true;
        this.vel = createVector(-9,random(-5,5));
    }
    
    this.resetGame = function() {
        this.pos = createVector(width/2,height/2);
        this.vel = createVector(0,0);
        gameOn = false;
    }
    
    this.scoreAnim = function(x, y) {
        // for (i = 10; i < 36; i + 5) {
            push();
            noStroke()
            fill('red');
            ellipse(x, y, 10, 10);
            pop();
        // }
    }
    
    
    this.edges = function() {
        if (this.pos.x <= 0 + player.w && (this.pos.y < player.pos.y || this.pos.y > player.pos.y + player.l)) {
            score['cpu']++;
            gameCounts++;
            this.resetGame();
            this.scoreAnim(this.pos.x, this.pos.y);
        } else if (this.pos.x >= width - cpu.w && (this.pos.y < cpu.pos.y || this.pos.y > cpu.pos.y + cpu.l)) {
            score['player']++;
            gameCounts++;
            this.resetGame();
            this.scoreAnim(this.pos.x, this.pos.y);

        }
        
        
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
        
        this.bounce();
     
    }
    
    this.bounce = function () {
        if (this.pos.x < (player.w + this.r*0.5) && (this.pos.y > player.pos.y && this.pos.y < (player.pos.y + player.l))) {
            this.vel.x *= -increaseXVel;
            
            var intersectDist = dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y);
            
            var newYVel = -0.062222*intersectDist + 7;
                //maps intersectDist from 0 to paddle.l to value between -7 and 7
            this.vel.y = newYVel;
            
            
        }
            
        if (this.pos.x > width - cpu.w - this.r*0.5 && (this.pos.y > cpu.pos.y && this.pos.y < (cpu.pos.y + cpu.l))) {
            this.vel.x *= -increaseXVel;
            
            
            var intersectDist = dist(this.pos.x, this.pos.y, cpu.pos.x, cpu.pos.y);
            
            var newYVel = -0.062222*intersectDist + 7;
            this.vel.y = newYVel;


        }
    }
    
}