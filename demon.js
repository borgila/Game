
class Demon {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/demon-idle.png";
    this.w = 200;
    this.h = 300;
    this.canvasW = w;
    this.canvasH = h;

    this.x = w;
    this.y = Math.floor(Math.random() * (650 - 200)) + 200;
    this.frames = 6;
    this.frameIndex = 0;

    this.dy = 11;
    this.dx = 11;

    this.bounce = false;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.frameIndex * Math.floor(this.img.width / this.frames),
      0,
      Math.floor(this.img.width / this.frames),
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  animate(framesCounter) {
    if (framesCounter % 6 === 0) {
      this.frameIndex++;

      if (this.frameIndex === 6) {
        this.frameIndex = 0;
      }
    }
  }

  move() {
    if (!this.bounce) {
      if (this.x >= 1050) {
        this.x -= this.dx;
        this.y -= this.dy / 10;
      } else {
        this.bounce = true;
      }
    } else {
      this.x -= this.dx;
      this.y -= this.dy;
      if (this.x <= 0 || this.x >= 1750) {
        this.dx = this.dx * -1;
      }
      if (this.y <= 0 || this.y >= 660) {
        this.dy = this.dy * -1;
      }
    }
  }
}
