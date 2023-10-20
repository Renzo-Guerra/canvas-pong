export default class Ball {
  constructor(radius, color, context) {
    this.radius = radius;
    this.color = color;
    this.context = context;
    this.restart();
    this.directionX = (Math.random() >= .5) ? 1 : -1;
    this.directionY = (Math.random() >= .5) ? 1 : -1;
  }

  restart(){
    this.x = (this.context.canvas.width / 2);
    this.y = (this.context.canvas.height / 2);
    this.directionX = (Math.random() >= .5) ? 1 : -1;
    this.directionY = (Math.random() >= .5) ? 1 : -1;
  }

  getWidth(){ return this.width; }
  getHeight(){ return this.height; }
  draw(){
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.fill();
    this.context.closePath();
    this.context.stroke();
  }

  changeXDirection(){
    this.directionX = this.directionX * -1;
  }

  changeYDirection(){
    this.directionY = this.directionY * -1;
  }

  move(){
    // If the ball y_direction is UP
    if(this.directionY == 1){
      this.y -= 2;
    }else{
      // If the ball y_direction is DOWN
      this.y += 2;
    }

    // If the ball x_direction is RIGHT
    if(this.directionX == 1){
      this.x += 2;
    }else{
      // If the ball x_direction is LEFT
      this.x -= 2;
    }
  }

  getPosition(){
    return { x: this.x, y: this.y };
  }

  getRadius(){
    return this.radius;
  }
}