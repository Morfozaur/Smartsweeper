import {mineBoard} from "./mineBoard";

export const boarding = (size, mines) => {
    const board = [];
    const fields = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push({
                visible: false,
                bomb: false,
                flag: false,
                question: false,
                adj:0});
            fields.push({col: i, row: j});
        }
        board.push(row);
    }
    return mineBoard(fields, board, mines);
};