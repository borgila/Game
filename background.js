class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.img = new Image();
    this.img.src = "./images/layers/sky.png";
    
    
    this.h = h
    this.w = w

    this.x = 0;
    this.y = 0;
    


    this.dx2 = 10;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
    }

//   move() {
//     this.x -= this.dx;

//     if (this.x < -this.w) this.x= 0;
//   }
 }