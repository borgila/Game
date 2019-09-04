let Game = {
  canvas: undefined,
  ctx: undefined,
  score:0,

  fps: 60,
  keys: {
    TOP_KEY: 38,
    BOTTOM_KEY: 40,
    SPACE: 27,
    LEFT_KEY: 37,
    RIGHT_KEY: 39
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
     let date2=new Date()
      this.frameCounter++;
      this.draw();
      this.animate();
      this.move();
      if (this.isBoost()) {
        this.strenghtPlayer();
      }
      if (this.isCollision()) {
        if (this.player.w > 50 && this.player.h > 75) {
          this.player.w *= 0.98;
          this.player.h *= 0.98;
        } else {
          this.gameOver();
        }
      }
      this.score= this.dateDiff(this.date1,date2);
      this.generateDemons();
      this.generateFishes();
      this.eraseFishes();
      this.generateGrasos();
      this.eraseGrasos();
    }, 1000 / this.fps);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  strenghtPlayer: function() {
    this.player.w *= 1.02;
    this.player.h *= 1.02;
  },
  gameOver: function() {
    this.stop();

    if (confirm("Saca el GILOCOPTERO")) {
      this.start();
    }
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
    
    this.scoreBoard = new ScoreBoard(100, 100, this.ctx);
    this.date1 = new Date;
    this.demons=[];
    this.fishes = [];
    this.grasos = [];
  },

  draw: function() {
    this.background.draw();
    this.background2.draw();
    this.background3.draw();
    this.player.draw();
    this.scoreBoard.draw();
    
    this.demons.forEach(demon => demon.draw());
    this.fishes.forEach(fish => fish.draw());
    this.grasos.forEach(graso => graso.draw());
  },
  move: function() {
    this.background2.move();
    this.background3.move();
    this.grasos.forEach(graso => graso.move());
    this.fishes.forEach(fish => fish.move());
    this.demons.forEach(demon => demon.move());
  },
  generateFishes: function() {
    if (this.frameCounter % 120 == 0) {
      this.fishes.push(
        new Fish(this.canvas.width, this.canvas.height, this.ctx)
      );
    }
  },
  generateDemons: function() {  
    if (this.frameCounter % 600 === 0) {
      this.demons.push(
        new Demon(this.canvas.width, this.canvas.height, this.ctx)
      );
    }
  },
  generateGrasos: function() {
    if (this.frameCounter % 150 == 0) {
      this.grasos.push(
        new Graso(this.canvas.width, this.canvas.height, this.ctx)
      );
    }
  },
  eraseFishes: function() {
    this.fishes.forEach((fish, i) => {
      if (fish.x < 0) this.fishes.splice(i, 1);
    });
  },
  eraseGrasos: function() {
    this.grasos.forEach((graso, i) => {
      if (graso.x < 0) this.grasos.splice(i, 1);
    });
  },
  dateDiff : function(date2,date1){
    return date1.getTime() - date2.getTime()

  },

  isCollision: function() {
    return this.fishes.some(fish => {
      return (
        this.player.x - 30 + this.player.w >= fish.x &&
        this.player.x < fish.x + fish.w &&
        this.player.y + (this.player.h - 30) >= fish.y &&
        this.player.y < fish.y + fish.h
      );
    });
  },
  isBoost: function() {
    return this.grasos.some(graso => {
      return (
        this.player.x - 30 + this.player.w >= graso.x &&
        this.player.x < graso.x + graso.w &&
        this.player.y + (this.player.h - 30) >= graso.y &&
        this.player.y < graso.y + graso.h
      );
    });
  },
  

  initCounter: function() {
    this.frameCounter = 0;
  },
  animate: function() {
    this.player.animate(this.frameCounter);
    this.demons.forEach(demon=> demon.animate(this.frameCounter));
    this.fishes.forEach(fish => fish.animate(this.frameCounter));
  },
  clearRect: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
