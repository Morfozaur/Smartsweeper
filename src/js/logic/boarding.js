import {mineBoard} from "./mineBoard";

export const boarding = (size, mines, mode) => {
    const board = [];
    const fields = [];
    const smart = (mode ==='smart') || (mode === 'rise')
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push({
                visible: false,
                bomb: false,
                flag: false,
                question: false,
                adj:0,
                unknown: true});
            fields.push({col: i, row: j});
        }
        board.push(row);
    }
    return mineBoard(fields, board, mines, smart);
};