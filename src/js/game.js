const Character = require('./domain.js').defaultCharacter

const defaultGame = class Game {
    start() {
        console.log('game started');
    }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

module.exports = {
    defaultGame,
    GameSavingData,
    loadGame: readGameSaving,
    saveGame: writeGameSaving,
}

