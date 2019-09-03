class Background3 {
  constructor(w, h, ctx) {
    this.ctx = ctx
  
    this.img3 = new Image();
    this.img3.src = "./images/layers/grassy_mountains.png";
    this.h = h
    this.w = w

    this.x=0
    this.y=0
    this.x3 = 0;
    this.y3 = 0;


    this.dx3 = 12;
  }

  draw() {
    
    this.ctx.drawImage(
      this.img3,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.drawImage(
      this.img3,
      this.x3 + this.w,
      this.y3,
      this.w,
      this.h
    );
  }

  move() {
    this.x -= this.dx3
    this.x3 -= this.dx3;

    if (this.x3 < -this.w) this.x3 = 0;
    if (this.x < -this.w) this.x = 0;

  }
}