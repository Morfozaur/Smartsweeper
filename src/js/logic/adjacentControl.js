import {down, downLeft, downRight, ifFieldExist, left, right, up, upLeft, upRight} from "./ifFieldExist";

export const modifyAdjacent = (board, col, row, operator) => {
    const size = board.length;

    const type = operator === 'plus' ? 1 : -1

    if (ifFieldExist(col, row, upLeft, size)) {
        board[col - 1][row - 1].adj += type;
        board[col - 1][row - 1].smart = true;
    }
    if (ifFieldExist(col, row, up, size)) {
       board[col][row - 1].adj += type;
       board[col][row - 1].smart = true;
    }
    if (ifFieldExist(col, row, upRight, size)) {
        board[col + 1][row - 1].adj += type;
        board[col + 1][row - 1].smart = true;
    }
    if (ifFieldExist(col, row, right, size)) {
        board[col + 1][row].adj += type;
        board[col + 1][row].smart = true;
    }
    if (ifFieldExist(col, row, downRight, size)) {
        board[col + 1][row + 1].adj += type;
        board[col + 1][row + 1].smart = true;
    }
    if (ifFieldExist(col, row, down, size)) {
        board[col][row + 1].adj += type;
        board[col][row + 1].smart = true;
    }
    if (ifFieldExist(col, row, downLeft, size)) {
        board[col - 1][row + 1].adj += type;
        board[col - 1][row + 1].smart = true;
    }
    if (ifFieldExist(col, row, left, size)) {
        board[col - 1][row].adj += type;
        board[col - 1][row].smart = true;
    }

};

export const unsmartAdjacent = (board, col, row) => {
    const size = board.length;

    board[col][row].smart = false;
    if (ifFieldExist(col, row, upLeft, size)) {
        board[col - 1][row - 1].smart = false;
    }
    if (ifFieldExist(col, row, up, size)) {
        board[col][row - 1].smart = false;
    }
    if (ifFieldExist(col, row, upRight, size)) {
        board[col + 1][row - 1].smart = false;
    }
    if (ifFieldExist(col, row, right, size)) {
        board[col + 1][row].smart = false;
    }
    if (ifFieldExist(col, row, downRight, size)) {
        board[col + 1][row + 1].smart = false;
    }
    if (ifFieldExist(col, row, down, size)) {
        board[col][row + 1].smart = false;
    }
    if (ifFieldExist(col, row, downLeft, size)) {
        board[col - 1][row + 1].smart = false;
    }
    if (ifFieldExist(col, row, left, size)) {
        board[col - 1][row].smart = false;
    }
};