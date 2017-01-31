function Paddle(x) {
    
    this.x = x;
    this.y = height/4.5;
    this.pos = createVector(this.x,this.y);
    this.w = 20;
    this.l = height/2;
    
    this.vel = createVector(0,0);
    
    this.render = function() {
        rect(this.pos.x,this.pos.y,this.w,this.l);
    }
    
    // this.update = function() {
        // if (gameOn) {
            // this.pos.add(this.vel);
        // }
    // }
    
    this.playerUpdate = function() {
        this.pos.y = mouseY - this.l/2;
    }
    
    this.cpuUpdate = function() {
        
        var yVel = 0.087755*pow(ball.vel.y, 2) + 0.2;
    
        if (ball.pos.y < this.pos.y + (this.l/2)) {
            this.vel.y = -yVel;
        } else if (ball.pos.y > this.pos.y + (this.l/2)) {
            this.vel.y = yVel;
        }        
        
        this.pos.add(this.vel);
    }
}