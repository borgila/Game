class ScoreBoard {
  constructor(x,y,ctx){
    this.ctx = ctx;
    this.x = x;
    this.y =y;
    



  }
  
  draw(){
    this.ctx.font = "60px aryal";
    this.ctx.fillStyle = rgb(128, 41, 80);
    this.ctx.fillText(Math.floor(Game.score/1000),100,100)
   
  }
};