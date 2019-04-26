var readlineSync = require('readline-sync');
module.exports = class Canvas {
  constructor(grid) {
    this.j = 0;
    this.k = 0;
    this.l = 0
  }
  
  placeTroop(team) {
      return (readlineSync.question('test')).split(',').map(Number)
  }
  wantsToPlay(color) {
    let x = readlineSync.question(`Does ${color} team want to keep attacking?`)
    return x == 'yes' ? true : false
  }
  askToPlay(team) {
    console.log(team.grid)
    let invasion = []
    invasion.push(readlineSync.question(`Which ${team.color} box do you want to attack from?`).split(',').map(Number))
    invasion.push(readlineSync.question(`Which box do you want to attack?`).split(',').map(Number))
    return invasion
  }
  invade(invasion) {
      return Number(readlineSync.question(`How many troops do you want to use to invade ${invasion[1].join()}`))
  }
};
