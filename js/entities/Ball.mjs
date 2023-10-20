export default class Ball {
  constructor(radius, color, context) {
    this.radius = radius;
    this.color = color;
    this.context = context;
    this.restart();
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
}