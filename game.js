import Grid from "./grid.js";
import Team from "./team.js";
import Canvas from "./canvas.js";
export default class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.currentTeam;
  }
  setup() {
    this.canvas = new Canvas();
    this.grid = new Grid(this.gridSize);
    this.team1 = new Team("red", this.grid, this.gridSize, this.canvas);
    this.team2 = new Team("blue", this.grid, this.gridSize, this.canvas);
    this.grid.setup(this.team1, this.team2);
    this.team1.placeTroops(16);
    this.team2.placeTroops(16);
    this.currentTeam = this.team1
  }
  async play() {
    while(this.isPossibleToPlay(this.currentTeam)) {
      if (this.canvas.wantsToPlay(this.currentTeam.color)) {
         this.roll(this.canvas.askToPlay(this.currentTeam));
      } else break
    }
    this.currentTeam.placeTroops(5)
    if (this.currentTeam.color == 'red') {
        this.currentTeam = this.team2;
      } else {
        this.currentTeam = this.team1;
      }
    console.log(this.grid.grid.map(row => row.map(box => box.team.color)))
  }

neighboors(y,x) {
  let grid = this.grid.grid
    return [
          grid[y-1][x-1],
          grid[y-1][x],
          grid[y-1][x+1],
          grid[y][x-1],
          grid[y][x],
          grid[y][x+1],
          grid[y+1][x-1],
          grid[y+1][x],
          grid[y+1][x+1]
      ]
  }
  isPossibleToPlay(team) {
    return this.grid.grid.some((row,y) => {
      return row.some((box,x) => {
        if (box.team != team) return false;
        if (box.count < 2) return false;
        try {
            return this.neighboors(y,x).some(neighboor => !!(neighboor) && neighboor.team != team);
        } catch(e) {
            return false
        }
      });
    });
  }
  roll(invasion) {
      console.log(invasion)
    let attackerSquare = this.grid.grid[invasion[0][0]][invasion[0][1]];
    let defenderSquare = this.grid.grid[invasion[1][0]][invasion[1][1]];
    if (defenderSquare.count == 0 && attackerSquare.count > 1) {
      defenderSquare.team = attackerSquare.team;
      this.currentTeam.invade(invasion)
      return;
    }
    while (attackerSquare.count > 1 && defenderSquare.count > 0) {
      if (Math.round(Math.random()) == 1) {
        defenderSquare.count--;
        console.log('attacker wins: '+attackerSquare.count + ' ' + defenderSquare.count)
      } else {
        attackerSquare.count--;
        console.log('defender wins: '+attackerSquare.count + ' ' + defenderSquare.count)
      }
    }
  }
  gameOver() {
    console.log("Game over!");
  }
};
