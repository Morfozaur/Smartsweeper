import {store} from "../redux/store";

const [upLeft, up, upRight, right, downRight, down, downLeft, left] = ['upLeft', 'up', 'upRight', 'right', 'downRight', 'down', 'downLeft', 'left']

const type = {
    upLeft: 'UP-LEFT',
    up: 'UP',
    upRight: 'UP-RIGHT',
    right: 'RIGHT',
    downRight: 'DOWN-RIGHT',
    down: 'DOWN',
    downLeft: 'DOWN-LEFT',
    left: 'LEFT'
};

const lowVer = el => el - 1 >= 0;
const highVer = (el, length) => el + 1 < length;

const validate = (col, row, action,length = null) => {
    switch (action) {
        case upLeft:
            return lowVer(row) && lowVer(col);
        case up:
            return lowVer(row);
        case upRight:
            return lowVer(row) && highVer(col, length);
        case right:
            return highVer(col, length);
        case downRight:
            return highVer(row, length) && highVer(col, length);
        case down:
            return highVer(row, length);
        case downLeft:
            return highVer(row, length) && lowVer(col);
        case left:
            return lowVer(col);
        default:
            break;
    }
};



export const reveal = async (col, row, main) => {
    let board = store.getState().board;
    const size = board.length;

    board[col][row].visible = true;

    const passer = (data) => data.adj <= 0 && data.visible === false;

    if (validate(col, row, upLeft)) {
        if (passer(board[col-1][row-1])) board = await reveal(col - 1, row - 1, board)
    }
    if (validate(col, row, up)) {
        if (passer(board[col][row-1])) board = await reveal(col, row - 1, board)
    }
    if (validate(col, row, upRight, size)) {
        if (passer(board[col+1][row-1])) board = await reveal(col + 1, row - 1, board)
    }
    if (validate(col, row, right, size)) {
        if (passer(board[col+1][row])) board = await reveal(col + 1, row, board)
    }
    if (validate(col, row, downRight, size)) {
        if (passer(board[col+1][row+1])) board = await reveal(col + 1, row + 1, board)
    }
    if (validate(col, row, down, size)) {
        if (passer(board[col][row+1])) board = await reveal(col, row + 1, board)
    }
    if (validate(col, row, downLeft, size)) {
        if (passer(board[col-1][row+1])) board = await reveal(col - 1, row + 1, board)
    }
    if (validate(col, row, left)) {
        if (passer(board[col-1][row])) board = await reveal(col - 1, row, board)
    }


    // if (validate(col, row, upLeft)) console.log(upLeft);
    // if (validate(col, row, up)) console.log(up)
    // if (validate(col, row, upRight, size)) console.log(upRight)
    // if (validate(col, row, right, size)) console.log(right)
    // if (validate(col, row, downRight, size)) console.log(downRight)
    // if (validate(col, row, down, size)) console.log(down)
    // if (validate(col, row, downLeft, size)) console.log(downLeft)
    // if (validate(col, row, left)) console.log(left)


    if (main) {
        return board
    }
};