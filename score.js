class ScoreBoard {
  constructor(x,y,ctx){
    this.ctx = ctx;
    this.x = x;
    this.y =y;
    



  }
  
  draw(){
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(Math.floor(Game.score/1000),30,30)
   
  }
};