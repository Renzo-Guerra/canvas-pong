export default class Board {
  constructor(width, height, backgroundColor, context){
    this.width = width;
    this.height = height;
    this.context = context;
    this.backgroundColor = backgroundColor;
    this.draw();
  }

  getWidth(){
    return this.width;
  }
  
  getHeight(){
    return this.height;
  }

  draw(){
    this.context.fillStyle = this.backgroundColor;
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.context.fill();
  }
}