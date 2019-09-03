class Background2 {
  constructor(w, h, ctx) {
    this.ctx = ctx
  
    this.img2 = new Image();
    this.img2.src = "./images/layers/far_mountains.png";
    this.h = h
    this.w = w

    this.x=0
    this.y=0
    this.x2 = 0;
    this.y2 = 0;


    this.dx2 = 8;
  }

  draw() {
    
    this.ctx.drawImage(
      this.img2,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.drawImage(
      this.img2,
      this.x2 + this.w,
      this.y2,
      this.w,
      this.h
    );
  }

  move() {
    this.x -= this.dx2
    this.x2 -= this.dx2;

    if (this.x2 < -this.w) this.x2 = 0;
    if (this.x < -this.w) this.x = 0;

  }
}