const app = require('./game.js')

const { defaultGame, GameSavingData, loadGame, saveGame } = app;

defaultGame.start();

console.log(GameSavingData);
console.log(loadGame);
console.log(saveGame);
