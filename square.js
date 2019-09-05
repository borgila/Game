class Square {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
    // this.h = h
    this.ctx = ctx
     this.dx = 15;
    

    
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x,this.y,this.w,this.h);
    this.ctx.fill();
    this.ctx.closePath();
  }
  move() {
    this.x += this.dx;
  }

}