class Graso {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/graso.png";
    this.w = 75;
    this.h = 100;
    this.canvasW = w;
    this.canvasH = h;

    this.x = w;
    this.y = Math.floor(Math.random() * (650 - 300)) + 300;

    this.dy = 15;
    this.dx = 10;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    if (this.x > 100 && this.x < 299) {
      this.x -= this.dx;
    }
    if (this.x > 300 && this.x < 499) {
      this.x -= this.dx;
    }
    if (this.x > 500 && this.x < 699) {
      this.x -= this.dx;

      this.y -= this.dy;
    }
    if (this.x > 701 && this.x < 899) {
      this.x -= this.dx;
      this.y += this.dy;
    }
    if (this.x > 900 && this.x < 1099) {
      this.x -= this.dx;
      this.y -= this.dy;
    }
    if (this.x > 1100 && this.x < 1299) {
      this.x -= this.dx;
      this.y += this.dy;
    }
    if (this.x > 1300 && this.x < 1499) {
      this.x -= this.dx;
      this.y -= this.dy;
    }
    if (this.x > 1500 && this.x < 1699) {
      this.x -= this.dx;
      this.y -= this.dy;
    }
    if (this.x > 1700 && this.x < 1900) {
      this.x -= this.dx;
      this.y += this.dy;
    } else this.x -= this.dx;
  }
}
