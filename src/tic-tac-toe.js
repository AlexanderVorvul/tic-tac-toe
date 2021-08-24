class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null],[null, null, null],[null, null, null]];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.matrix[rowIndex][columnIndex] == null){

            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;

            if (this.currentPlayerSymbol === 'x') this.currentPlayerSymbol = 'o';
                else this.currentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        if (this.getWinner()) return true;
        return this.isDraw();
    }

    getWinner() {

        let m = this.matrix;

        for(let i = 0; i < m.length; i++)
            if (m[i][0] != null && m[i][0]===m[i][1] && m[i][0]===m[i][2]) return m[i][0];

        for(let i = 0; i< m.length; i++)
            if (m[0][i] != null && m[0][i]===m[1][i] && m[0][i]===m[2][i]) return m[0][i];

        if(m[0][0] != null && m[0][0]===m[1][1] && m[1][1]===m[2][2]) return m[0][0];
        if(m[0][2] != null && m[0][2]===m[1][1] && m[1][1]===m[2][0]) return m[0][2];

        return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++)
                if (this.matrix[i][j] == null) return false;
        
        return true;
    }

    isDraw() {
        if (this.getWinner()) return false;
        return this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
