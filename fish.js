class Fish {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/theFish.png";
    this.w=120;
    this.h=160
    this.canvasW = w;
    this.canvasH = h;

    this.x = w - 200;
    this.y = Math.floor(Math.random() * (this.canvasH - 0 + 1) + 0);
    this.frames = 4;
    this.frameIndex = 0;

    this.dx = 10;
  }

  draw() {
   // this.ctx.drawImage(this.img, this.x, this.y, 90, 130);
   console.log(this.img.width)
   this.ctx.drawImage(
         this.img,
         this.frameIndex * Math.floor(this.img.width/ this.frames),
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
  if (framesCounter % 3 === 0) {
    this.frameIndex++;

    if (this.frameIndex == 4) {
      this.frameIndex = 0;
    }
  }
}


  move() {
    this.x -= this.dx;
  }
}
