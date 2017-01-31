var ball;
var player;
var cpu;

var score;

var gameOn;
var gameCounts;
var gameStarted = false;

function textInfo() {
    fill(255);
    
    textSize(35);
    textAlign(CENTER,CENTER);
    text("Pong!: The Game", width/2, 30);
    
    if (!gameOn && gameStarted) {
        textSize(25);
        textAlign(CENTER);
        text("Scores:", width/2, 70);
        
        
        textSize(15);
        textAlign(CENTER);
        text("Player:", width/2-60, 100);
        
        text("CPU:"   , width/2+60, 100);
        
        
        textSize(10);
        textAlign(CENTER);
        text(score['player'], width/2-60, 120);
        text(score['cpu']   , width/2+60, 120);
    }
    
    if (gameOn && gameCounts > 0) {
        textSize(30);
        textAlign(CENTER);
        text(score['player'], width/2-60, 80);
        text(score['cpu']   , width/2+60, 80);
    }
    
    if (!gameStarted) {
        textSize(15);
        textAlign(CENTER, CENTER);
        text('Press space to begin.', width/2, height/2-40)
    }
}


function setup() {
    createCanvas(600,450);
    background(255);
    ball = new Ball();
    player = new Paddle(0);
    cpu = new Paddle(width-20);
    
    score = {'player': 0, 'cpu': 0};
    
    gameOn = false;
    gameCounts = 0; 
}

function draw() {
    background(0);
    
    ball.render();
    ball.update();
    ball.edges();
    
    player.render();
    cpu.render();
    
    if (gameOn) {
        cpu.cpuUpdate();
        player.playerUpdate();
    }
    
    textInfo();
    
}

function midLine() {
    
}


function keyPressed() {
    if (key == ' ' && gameOn == false) {
        ball.start();
    }
    
    gameStarted = true;
}

// function text("Pong!: The Game", width/2, 20);