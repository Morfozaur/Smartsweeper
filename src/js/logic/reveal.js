import {store} from "../redux/store";
import {ifFieldExist, down, downLeft, downRight, left, right, up, upLeft, upRight} from "./ifFieldExist";
import {removeFlagSetter, revealFieldSetter} from "../redux/actions/allActions";


export const reveal = async (col, row, main) => {
    let board = [...store.getState().board];

    const size = board.length;
    board[col][row].visible = true;
    if (board[col][row].flag) store.dispatch(removeFlagSetter());
    board[col][row].flag = false;
    board[col][row].question = false;
    store.dispatch(revealFieldSetter());

    const passer = (data) => (data.adj <= 0) && (data.visible === false);

    if (ifFieldExist(col, row, upLeft)) {
        if (passer(board[col - 1][row - 1])) board = await reveal(col-1, row-1, board);
        else if (!board[col - 1][row - 1].visible) {
            store.dispatch(revealFieldSetter());
            board[col - 1][row - 1].visible = true;
        }
    }
    if (ifFieldExist(col, row, up)) {
        if (passer(board[col][row-1])) board = await reveal(col, row-1, board);
        else if (!board[col][row - 1].visible) {
            store.dispatch(revealFieldSetter());
            board[col][row - 1].visible = true;
        }
    }
    if (ifFieldExist(col, row, upRight, size)) {
        if (passer(board[col+1][row-1])) board = await reveal(col+1, row-1, board);
        else if(!board[col + 1][row - 1].visible) {
            store.dispatch(revealFieldSetter());
            board[col + 1][row - 1].visible = true;
        }
    }
    if (ifFieldExist(col, row, right, size)) {
        if (passer(board[col+1][row])) board = await reveal(col+1, row, board);
        else if(!board[col + 1][row].visible) {
            store.dispatch(revealFieldSetter());
            board[col + 1][row].visible = true;
        }
    }
    if (ifFieldExist(col, row, downRight, size)) {
        if (passer(board[col+1][row+1])) board = await reveal(col+1, row+1, board);
        else if(!board[col + 1][row + 1].visible) {
            store.dispatch(revealFieldSetter());
            board[col + 1][row + 1].visible = true;
        }
    }
    if (ifFieldExist(col, row, down, size)) {
        if (passer(board[col][row+1])) board = await reveal(col, row+1, board);
        else if(!board[col][row + 1].visible) {
            store.dispatch(revealFieldSetter());
            board[col][row + 1].visible = true;
        }
    }
    if (ifFieldExist(col, row, downLeft, size)) {
        if (passer(board[col-1][row+1])) board = await reveal(col-1, row+1, board);
        else if(!board[col - 1][row + 1].visible) {
            store.dispatch(revealFieldSetter());
            board[col - 1][row + 1].visible = true;
        }
    }
    if (ifFieldExist(col, row, left)) {
        if (passer(board[col-1][row])) board = await reveal(col-1, row, board);
        else if(!board[col - 1][row].visible) {
            store.dispatch(revealFieldSetter());
            board[col - 1][row].visible = true;
        }
    }
    if (main) return board
};