let Game = {
  canvas: undefined,
  ctx: undefined,
  score: 0,
  finalBoss: false,
  demons: [],
  fishes: [],
  grasos: [],
  player: undefined,
  begin: false,
  nDemonsGenerated: 0,

  fps: 60,
  keys: {
    TOP_KEY: 38,
    BOTTOM_KEY: 40,
    SPACE: 32,
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
    this.nDemonsGenerated = 0;
    this.initCounter();
    this.tralala.play();

    this.interval = setInterval(() => {
      if (Game.begin === true) {
        this.clearRect();
        let date2 = new Date();
        this.frameCounter++;
        this.draw();

        this.animate();
        this.move();

        if (this.isSquareDemon()) {
          this.demons.forEach(demon => {
            demon.w *= 0.7;
            if (demon.w === 0) {
              this.demons.splice[(demon, 1)];
            }
          });
          if (this.demons[0].w <= 1) {
            this.song.pause();
            this.finalBoss = false;
            this.tralala.play();
            this.background.img3.src = "./images/layers/grassy_mountains.png";
            this.background.img2.src = "./images/layers/far_mountains.png";
          }
        }

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
        this.score = this.dateDiff(this.date1, date2);

        this.generateDemons();
        if (!this.finalBoss) {
          this.generateFishes();
          this.generateGrasos();
        }

        this.isSquareDemon();

        this.player.eraseSquares();
        this.eraseFishes();
        this.eraseGrasos();
      }
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
    this.tralala.pause();
    this.bargain.play();

    if (confirm("Saca el GILOCOPTERO")) {
      this.bargain.pause();
      this.start();
    }
  },
  createAll: function() {
    this.tralala = new Audio();
    this.tralala.src = "./images/tralala.mp3";
    this.song = new Audio();
    (this.song.src = "./images/ElDiablo.mp3"), (this.bargain = new Audio());
    this.bargain.src = "./images/bargain.mp3";
    this.beastie = new Audio();
    this.beastie.src = "./images/beastieBoys.mp3";
    this.background = new Background(
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
    this.date1 = new Date();
  },

  draw: function() {
    this.background.draw();

    this.player.draw();
    this.scoreBoard.draw();

    this.demons.forEach(demon => demon.draw());
    this.fishes.forEach(fish => fish.draw());
    this.grasos.forEach(graso => graso.draw());
  },
  move: function() {
    this.background.move();

    this.grasos.forEach(graso => graso.move());
    this.fishes.forEach(fish => fish.move());
    this.demons.forEach(demon => demon.move());
  },
  generateFishes: function() {
    if (this.frameCounter % 50 == 0) {
      this.fishes.push(
        new Fish(this.canvas.width, this.canvas.height, this.ctx)
      );
    }
  },

  generateDemons: function() {
    if (this.frameCounter % 1100 === 0 && this.nDemonsGenerated < 3) {
      this.nDemonsGenerated++;
      this.tralala.pause();
      this.song.play();

      this.finalBoss = true;
      this.background.img2.src = "./images/clouds_BG.png";
      this.background.img3.src = "./images/mountains.png";

      this.demons.push(
        new Demon(this.canvas.width, this.canvas.height, this.ctx)
      );
    }
  },
  generateGrasos: function() {
    if (this.frameCounter % 60 == 0) {
      this.grasos.push(
        new Graso(this.canvas.width, this.canvas.height, this.ctx)
      );
    }
  },
  eraseDemons: function() {
    this.demons.forEach((demon, i) => {
      if (demon.x < 0) this.demons.splice(i, 1);
    });
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
  dateDiff: function(date2, date1) {
    return date1.getTime() - date2.getTime();
  },
  isSquareDemon: function() {
    let colision = false;
    if (this.demons.length > 0) {
      this.demons.forEach(demon => {
        this.player.squares.forEach(square => {
          colision = this.isSquare(demon, square);
        });
      });
    }

    return colision;
  },

  isSquare: function(demon, square) {
    return (
      square.x + square.w > demon.x &&
      square.y + square.h > demon.y &&
      square.y < demon.y + demon.h
    );
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
    this.demons.forEach(demon => demon.animate(this.frameCounter));
    this.fishes.forEach(fish => fish.animate(this.frameCounter));
  },
  clearRect: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
