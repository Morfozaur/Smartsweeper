import {random} from "./baseFunctions";

export const mineBoard = (data, board, mines) => {
    const pool = [...data];
    const targetBoard = [...board];
    const availableFields = {};
    const fieldList = [];
    for (let col = 0; col < targetBoard.length; col++) {
        availableFields[col] = [];
        for (let row = 0; row < targetBoard.length; row++) {
            availableFields[col].push(row)
        }
    }
    const mineList = [];
    for (let i = 0; i < (mines); i++) {
        const pick = random(0, pool.length - 1);
        const {col, row} = pool[pick];
        targetBoard[col][row].bomb = true;
        mineList.push([col, row])
        availableFields[col] = availableFields[col].filter(num => num !== row)

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
    for (const col in availableFields) {
        for (let x = 0; x < availableFields[col].length; x++) {
            fieldList.push([parseInt(col), availableFields[col][x]])
        }
    }
    // console.log(availableFields, mineList, fieldList)

    return { newBoard: targetBoard, fieldsManager: { mineList, availableFields, fieldList } }
};