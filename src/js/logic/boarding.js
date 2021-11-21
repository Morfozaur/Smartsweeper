import {mineBoard} from "./mineBoard";

export const boarding = size => {
    const board = [];
    const fields = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push({visible: false, bomb: false, adj:0});
            fields.push({col: i, row: j})
        }
        board.push(row)
    }
    const mineNum = Math.pow(size, 2) * ((2 + size) /100);
    console.log(Math.ceil(mineNum))
    return mineBoard(fields, board, Math.ceil(mineNum))
};