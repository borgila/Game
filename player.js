class Player {
  constructor(w, h, ctx, keys) {
    this.canvasW = w;
    this.canvasH = h;

    this.ctx = ctx;
    this.keys = keys;
    this.x = 300;
    this.y = 450;
    this.squares = [];

    this.img = new Image();
    this.img.src = "images/walk-sequence.png";

    this.frames = 8;
    this.frameIndex = 0;

    this.w = 50;
    this.h = 75;

    this.setListeners();
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
    this.squares.forEach(square => square.draw());
    this.squares.forEach(square => square.move());
  }
  animate(framesCounter) {
    if (framesCounter % 8 === 0) {
      this.frameIndex++;

      if (this.frameIndex == 8) {
        this.frameIndex = 0;
      }
    }
  }
  shoot() {
    var square = new Square(this.x, this.y, this.ctx);
    this.squares.push(square);
    
  }
  eraseSquares() {
    this.squares = this.squares.filter((square, i) => {
      return square.x < 1850
    });
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

          if (this.y >= 855) {
            this.y = 855;
          }
          break;
        case this.keys.RIGHT_KEY:
          this.x += 30;
          if (this.x >= 1750) {
            this.x = 1750;
          }

          break;

        case this.keys.LEFT_KEY:
          this.x -= 30;
          if (this.x - this.w <= 0) {
            this.x = 0;
          }
          break;

        case this.keys.SPACE:
          this.shoot();

          break;
      }
    }.bind(this);
  }
}
