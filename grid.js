import Box from './box.js';
export default class Grid {
  constructor(gridSize) {
    this.gridSize = gridSize
    this.grid = []
  }
  setup(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
    for(let i=0;i<this.gridSize;i++) {
        this.grid.push([])
    }
    this.grid.forEach(row => {
        for(let i=0;i<this.gridSize;i++) {
            row.push(new Box())
        }
    })
    this.grid.forEach((row,i) => i < this.gridSize / 2 ? row.forEach(box => box.team = this.team2) : row.forEach(box => box.team = this.team1))
  }
  isOver() {
      return this.grid.every(row => row.every(box => box.team == this.grid[0][0].team && box.filled))
  }
}
