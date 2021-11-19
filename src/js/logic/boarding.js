import {mineBoard} from "./mineBoard";

export const boarding = (size, setter) => {
    const board = [];
    const fields = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push({hide: false, bomb: false, adj:0});
            fields.push({col: i, row: j})
        }
        board.push(row)
    }
    // console.log(fields)
    const mineNum = Math.pow(size, 2) * ((5 + size) /100);
    console.log(mineNum)
    setter(mineBoard(fields, board, Math.ceil(mineNum)))
};