import {random} from "./baseFunctions";

export const mineBoard = (data, board, mines = 10) => {
    const pool = [...data];
    const minedBoard = [...board]
    for (let i = 0; i < mines; i++) {
        const pick = random(0, pool.length - 1);
        const {col, row} = pool[pick];
        minedBoard[col][row].bomb = true;
        pool.splice(pick, 1);
    }

    const wtf = (size) => {
        const mines = Math.pow(size, 2) * ((10 + size) /100);
        const pool = Math.pow(size, 2);
        console.log('Pool: ', pool, ', Mines: ', mines, '%:', (mines/pool)*100, '%');
    }

    wtf(10)
    wtf(15)
    wtf(20)

    console.log()

    return minedBoard
};