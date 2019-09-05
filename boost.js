class Graso {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/graso.png";
    this.w=75;
    this.h=100;
    this.canvasW = w;
    this.canvasH = h;

    this.x = w;                          
    this.y = Math.floor(Math.random() * (850 - 600 + 1)) + 600;
    
    this.dy = 2
    this.dx = 17;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h


    )
   
   
}


  move() {
    
    this.x -= this.dx;
    this.y -= this.dy
  }
}
