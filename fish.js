class Fish {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/theFish.png";
    this.w=120;
    this.h=160
    this.canvasW = w;
    this.canvasH = h;

    this.x = w;
    this.y = Math.floor(Math.random() * (700 - 150)) + 150;;
    this.frames = 4;
    this.frameIndex = 0;
    this.dy= 5;
    this.dx = 5;
  }

  draw() {
   
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
  if (framesCounter % 6 === 0) {
    this.frameIndex++;

    if (this.frameIndex == 4) {
      this.frameIndex = 0;
    }
  }
}


  move() {
    if(this.x < 300){
      this.x -= this.dx
    }
    if(this.x < 500){
      this.x -= this.dx
    }
    if(this.x > 500 && this.x < 699){
      this.x -= this.dx
  
      this.y += this.dy
    }
    if(this.x > 701 && this.x <899){
      this.x -= (this.dx )
      this.y -= this.dy
      
    }
    if(this.x > 900 && this.x < 1099){
      this.x -= this.dx
      this.y -= this.dy
    }
    if(this.x > 1100 && this.x < 1299){
      this.x -= (this.dx*2)
      this.y += this.dy
    }
    if(this.x > 1300 && this.x < 1499){
      this.x -= (this.dx*8)
      this.y -= this.dy
    }
    if(this.x > 1500 && this.x  < 1699 ){
      this.x -= (this.dx*8)
      this.y -= this.dy
    }
    if(this.x > 1700 && this.x < 1900){
      this.x -= (this.dx*2)
      this.y += this.dy
    }else this.x -= this.dx
    
    
  }
}
