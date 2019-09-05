class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/layers/sky.png";
    this.img2 = new Image();
    this.img2.src = "./images/layers/far_mountains.png";
    this.img3 = new Image();
    this.img3.src = "./images/layers/grassy_mountains.png";

    this.h = h;
    this.w = w;

    this.x = 0;
    this.x2 = 0;
    this.x3 = 0;
    this.x4 = 0;
    this.x5 = 0;

    this.y = 0;

    this.dx2 = 10;
    this.dx3 = 12;
    this.dx4 = 10;
    this.dx5 = 12;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.img2, this.x2, this.y, this.w, this.h);
    this.ctx.drawImage(this.img2, this.x2 + this.w, this.y, this.w, this.h);
    this.ctx.drawImage(this.img3, this.x3, this.y, this.w, this.h);
    this.ctx.drawImage(this.img3, this.x3 + this.w, this.y, this.w, this.h);
  }
  move() {
    this.x2 -= this.dx2 && this.x > 1501;
    this.x3 -= this.dx3;

    if (this.x3 < -this.w) this.x3 = 0;
    if (this.x2 < -this.w) this.x2 = 0;
  }
}
