var Game = require('./game.js')
function startGame(gridSize) {
  var game = new Game(gridSize);
  game.setup();
  while (!game.grid.isOver()) {
    game.play();
  }
  game.gameOver();
}
startGame(4)