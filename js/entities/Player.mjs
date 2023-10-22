export default class Player {
  static width = 6; // px
  static height = 120; // px
  static marginBoard = 10;

  constructor(color, numeric_player, context){
    this.color = color;
    this.numeric_player = numeric_player;
    this.context = context;
    this.x = (numeric_player == 1) ? Player.marginBoard : (this.context.canvas.width - Player.marginBoard - Player.width);
    this.y = (this.context.canvas.height / 2) - (Player.height / 2);
  }

  draw(){
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, Player.width, Player.height);
    this.context.fill();
  }

  moveUp(){
    this.y -= 4;
  }

  moveDown(){
    this.y += 4;
  }

  playerTouchingBall(ball){
    // Ball collision with right player
    if(ball.getXDirection() == 1){
      // The ball is in the same X vertex
      if((ball.getPosition().x + ball.getRadius()) >= this.getX() && 
      (ball.getPosition().x + ball.getRadius()) <= (this.getX() + Player.width) &&
      // The ball Y position is inside the player Y position
      (ball.getPosition().y >= (this.getY())) && 
      (ball.getPosition().y <= (this.getY() + Player.height))){
        ball.changeXDirection();
      }
    }else{ // Ball collision with right player
      // The ball is in the same X vertex
      if((ball.getPosition().x - ball.getRadius()) >= this.getX() && 
      (ball.getPosition().x - ball.getRadius()) <= (this.getX() + Player.width) &&
      // The ball Y position is inside the player Y position
      (ball.getPosition().y >= (this.getY())) && 
      (ball.getPosition().y <= (this.getY() + Player.height))){
        ball.changeXDirection();
      }
    }       
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }
}