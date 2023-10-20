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

  upToDown(){
    this.directionY = -1;
  }

  downToUp(){
    this.directionY = 1;
  }

  leftToRight(){
    this.directionX = 1;
  }

  rightToLeft(){
    this.directionX = -1;
  }

  move(){

    if(this.directionY == 1){
      this.y -= 2;
    }else{
      this.y += 2;
    }

    if(this.directionX == 1){
      this.x += 2;
    }else{
      this.x -= 2;
    }
  }

  getPosition(){
    return { x: this.x, y: this.y };
  }

}