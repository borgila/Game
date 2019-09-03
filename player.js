class Player {
  constructor(w, h, ctx, keys) {
    this.canvasW = w;
    this.canvasH = h;

    this.ctx = ctx;
    this.keys = keys;
    this.x =  700;
    this.y =  450;

    this.img = new Image();
    this.img.src = "images/walk-sequence.png";

    // número de imágenes diferentes
    this.frames = 8;
    this.frameIndex = 0;

    // medidas de la imagen a representar en el canvas
    this.w = 50;
    this.h = 75;

    //this.vy = 7;
    this.setListeners();

    //this.setListeners();
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
    if (framesCounter % 8 === 0) {
      this.frameIndex++;

      if (this.frameIndex == 8) {
        this.frameIndex = 0;
      }
    }
  }

  setListeners() {
    document.onkeydown = function(event) {
      switch (event.keyCode) {
        case this.keys.TOP_KEY:
          this.y -= 30;
          if (this.y <= 0) {
            this.y = 0;
          } 
          break;

        case this.keys.BOTTOM_KEY:
          this.y += 30;
          
          if (this.y >=855) {
            this.y = 855;
          }
          break;
        case this.keys.RIGHT_KEY:
          this.x += 30;
          if( this.x >= 1750 ){
            this.x = 1750
          }

          break;

        case this.keys.LEFT_KEY:
          this.x -= 30;
          if(this.x - this.w <=0){
            this.x =0
          }
          break;

        case this.keys.SPACE:
          this.shoot();
          break;
      }
    }.bind(this);
  }
}
