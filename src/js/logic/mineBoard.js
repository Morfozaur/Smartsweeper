import {random} from "./baseFunctions";

export const mineBoard = (data, board, mines = 10) => {
    const pool = [...data];
    const minedBoard = [...board];
    for (let i = 0; i < (mines); i++) {
        const pick = random(0, pool.length - 1);
        const {col, row} = pool[pick];
        minedBoard[col][row].bomb = true;

        for (let c = -1; c < 2; c++) {
            if ((col + c) >= 0 && (col + c) < minedBoard.length) {
                for (let r = -1; r < 2; r++) {
                    if ((row + r) >= 0 && (row + r) < minedBoard.length) {
                        minedBoard[col+c][row+r].adj += 1;
                        if (col + c === col && row + r === row) minedBoard[col][row].adj -= 1;
                    }
                }
            }
        }
        pool.splice(pick, 1);
    }
    return minedBoard
};