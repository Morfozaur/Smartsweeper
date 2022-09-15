import {random} from "./baseFunctions";

export const mineBoard = (data, board, mines, smart) => {
    const pool = [...data];
    const targetBoard = [...board];

    const availableFields = {};
    const mineList = [];

    if (smart) {
        for (let col = 0; col < targetBoard.length; col++) {
            availableFields[col] = [];
            for (let row = 0; row < targetBoard.length; row++) {
                availableFields[col].push(row)
            }
        }
    }

    for (let i = 0; i < (mines); i++) {
        const pick = random(0, pool.length - 1);
        const {col, row} = pool[pick];
        targetBoard[col][row].bomb = true;
        if (smart) {
            mineList.push([col, row])
            availableFields[col] = availableFields[col].filter(num => num !== row)
        }

        for (let c = -1; c < 2; c++) {
            if ((col + c) >= 0 && (col + c) < targetBoard.length) {
                for (let r = -1; r < 2; r++) {
                    if ((row + r) >= 0 && (row + r) < targetBoard.length) {
                        targetBoard[col+c][row+r].adj += 1;
                        if (col + c === col && row + r === row) targetBoard[col][row].adj -= 1;
                    }
                }
            }
        }
        pool.splice(pick, 1);
    }

    return { newBoard: targetBoard, fieldsManager: { mineList, availableFields } }
};