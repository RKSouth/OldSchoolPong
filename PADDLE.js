class buildPaddle {
  constructor() {
}
  spawnPaddle(){  paddleY = constrain(mouseY, 0, 500);

    rect(paddleX, paddleY, paddleWidth, paddleHeight);
    rect(paddleX2, paddleY2, paddleWidth, paddleHeight);
}
}
