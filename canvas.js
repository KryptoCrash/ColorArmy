module.exports = class Canvas {
    constructor(grid) {
        this.i = 0
        this.j = 0
    }
    placeTroop() {
        if(this.i<16) {
            this.i++
            let o = 2;
            o += Math.round(Math.random())
            return [o,Math.round(Math.random()*3)]
        } else {
            this.i++
            let o = 0;
            o += Math.round(Math.random())
            return [o,Math.round(Math.random()*3)]
        }
    }
    wantsToPlay() {
        return !!(Math.round(Math.random()))
    }
    askToPlay(team) {
        this.j++
        if(this.j==1) return team.play([[1,2],[2,1]])
        if(this.j==2) return team.play([[2,2],[1,1]])
        if(this.j==3) return team.play([[0,2],[0,1]])
        if(this.j==4) return team.play([[3,2],[3,1]])
    }
}