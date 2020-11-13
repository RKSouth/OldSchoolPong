/*
  Assignment: *Team Project: HighScore*
  Student: *Rachael Kelm, Ei Khin, Scott LaMere*
  Pasadena City College, Term (Sp), 2020
  Prof. Masood Kamandy
  Project Description: *Pong-Challenge 1 Racheal, Challenge 2 Scott,
  Challenge 3 Ei, but also worked on whole together as a group*
  Last Modified: 5/17/2020
  */



//ball
var xPos; //starting location of ball
var yPos; //I want something like: random(int(10, 590)),
var xSpeed = 4; //speed of ball
var ySpeed;
var ballDiameter = 20; //size of ball

//paddle
var paddleWidth = 20;
var paddleHeight = 100;
var paddleX = 570;
var paddleY;
//2nd paddle
var paddleX2 = 10;
var paddleY2 = 300;
var y2move = 0;
//Collision
var sqLength = 200;
var sqPos = 200;
//objects
let ball1;
let paddle1;

//SCORE
var scoreRight=0;
var scoreLeft=0;
let button;

//Colors
var paddleRed=255;
var paddleGreen= 255;
var paddleBlue= 255;
var ballRed= 255;
var ballGreen= 255;
var ballBlue= 255;

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(255);

  ball1 = new buildBall();
  paddle1 = new buildPaddle();

  wallCollision();
  xPos = ballDiameter / 2;
  yPos = random(0, height);
  ySpeed = random(-4, 4);


} //end of set up

function draw() {
  //to call these functions
  background(0);


  //calling object
  fill(ballRed, ballGreen,ballBlue);
  ball1.spawnBall();
  fill(paddleRed,paddleGreen,paddleBlue);
  paddle1.spawnPaddle();

  if (wallCollision(xPos, yPos)) {
    print("wall Collision")
    ySpeed *= -1;
    ballGreen-=4;
    ballBlue-=4;
  }

  xPos += xSpeed;
  yPos += ySpeed;

  reset();
 gameOver();
  //paddles


if (hitPaddle(paddleX, paddleY)) {
    print("hit Paddle")
    xSpeed *= -1;
    ballBlue-=4;
    paddleGreen-=4;
    paddleBlue-=4;
  }
if (hitLeftPaddle(paddleX2, paddleY2)) {
    print("hit Paddle")
    xSpeed *= -1;
    ballGreen+=4;
    paddleRed-=4;
  }
  paddleY2 = constrain(paddleY2 + y2move, 0, 500);

//score keeping
  fill(random(0,255),random(0,255),random(0,255));
  textSize(20);
  text(scoreRight, 400,10,200,200);
  text(scoreLeft, 200,10,100,200);

/*  if (button.mousePressed()) {
    reset();
  } else {
    return false;
  } */


} //END OF DRAW

//MOVEMENT OF BALL
function wallCollision(xPos, yPos) {
  //creates a wall on top and bottom of canvas
  if ((yPos >= height - ballDiameter / 2.0) ||
    (yPos <= 0 + ballDiameter / 2.0)) {
    return true;
  } else {
    return false;
  }
}



function reset() {
  //reset canvas

  if (xPos >= 600 - ballDiameter / 2.0) {
    xPos =600- ballDiameter / 2;
    yPos = random(0, height);
    xSpeed=-4
    scoreLeft=scoreLeft+1;
  }
   else if
    (xPos <= 0 + ballDiameter / 2.0) {
    xPos =0+ ballDiameter / 2;
    yPos = random(0, height);
     xSpeed=4
     scoreRight=scoreRight+1;
} else {
    return false;
  }
}

//hit paddle
function hitPaddle(paddleX, paddleY) {
  if (
     (xPos >= paddleX - 10 &&
      yPos - paddleY <= 100 &&
      yPos - paddleY > 0)
  ) {
    return true;
  } else {
    return false;
  }
}

function hitLeftPaddle(paddleX2, paddleY2) {
  if (xPos <= paddleX2 + 30 &&
   yPos - paddleY2 <= 100 &&
   yPos - paddleY2 > 0) {
    return true;

  } else {
    return false;
  }
}

function keyPressed() {
  if (key == 'w') {
    y2move = (-8);
  } else if (key == 's') {
    y2move = (8)
  }
}

function keyReleased() {
  // prevent any default behavior
  y2move = 0
}

function gameOver (){
  if (scoreLeft ==10 || scoreRight ==10) {
    background(255);
    frameRate(0);

  fill(50,100,100);
textSize(40);
 text( 'GAME OVER!!',sqPos,sqLength+40);
 button = createButton('restart');
 button.position(265,10);
 button.mousePressed(gameReset);
} else {
   return false;
}
}
function gameReset(){
   background(0);
   paddleRed=255;
   paddleGreen= 255;
   paddleBlue= 255;
   ballRed= 255;
   ballGreen= 255;
   ballBlue= 255;
   scoreLeft=0;
   scoreRight=0;
    frameRate(60);

}
