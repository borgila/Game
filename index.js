let begin = false;
window.onload = function() {
  let start = document.querySelector("div");
  let button = document.querySelector("button");
  // this.beastie.play()
  button.onclick = function() {
    start.style = "display:none";
    Game.begin = true;
    Game.init("canvas");
  };
};
