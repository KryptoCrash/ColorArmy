module.exports = class Team {
  constructor(color, grid, gridSize, canvas) {
    this.color = color;
    this.grid = grid.grid;
    this.gridSize = gridSize;
    this.canvas = canvas;
  }
  play(invasion) {
    let attackerSquare = this.grid[invasion[0][1]][invasion[0][0]];
    let defenderSquare = this.grid[invasion[1][1]][invasion[1][0]];
    if (attackerSquare.team != this)
      throw Error("Error: Box not part of this team!");
    if (attackerSquare.count < 2)
      throw Error("Error: Cannot abandon box!");
    if (defenderSquare.team == this)
      throw Error("Error: Cannot attack oneself!");
    if (Math.abs(invasion[0][0]-invasion[1][0]) > 1 || Math.abs(invasion[0][1]-invasion[1][1]) > 1)
      throw Error("Error: Opponent too far away!");
    return invasion
  }
  placeTroops() {
    let troops = this.gridSize**2;
    while (troops > 0) {
      let boxPos = this.canvas.placeTroop();
      if (this.grid[boxPos[0]][boxPos[1]].team != this) {
        throw new Error("Error: Can`t place troop on enemy lines!");
      } else if(this.grid[boxPos[0]][boxPos[1]].count > 9) {
        throw new Error("Error: Too many troops here!");
      } else {
        this.grid[boxPos[0]][boxPos[1]].count++
        troops--;
      }
    }
    return 'hi'
  }
};
