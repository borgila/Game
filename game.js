let Game = {
  canvas: undefined,
  ctx: undefined,

  fps: 60,
  keys: {
    TOP_KEY: 38,
    BOTTOM_KEY: 40,
    SPACE: 27,
    LEFT_KEY:37,
    RIGHT_KEY:39,
  },
  init: function(canvasID) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.createAll();
    this.start();
  },
  start: function() {
    this.initCounter();
    this.interval = setInterval(() => {
      this.clearRect();
      this.frameCounter++;
      this.draw();
      this.animate();
      this.move();
    }, 1000 / this.fps);
  },
  createAll: function() {
    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.background2 = new Background2(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.background3 = new Background3(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.player = new Player(
      this.canvas.width,
      this.canvas.height,
      this.ctx,
      this.keys
    );
    this.fish = new Fish(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
  },

  draw: function() {
    this.background.draw();
    this.background2.draw();
    this.background3.draw();
    this.player.draw();
    this.fish.draw();
  },
  move: function() {
    this.background2.move();
    this.background3.move();
    this.fish.move();
  },
  generateObstacles: function{

  },


  initCounter: function() {
    this.frameCounter = 0;
  },
  animate: function() {
    this.player.animate(this.frameCounter);
    this.fish.animate(this.frameCounter);
  },
  clearRect: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
