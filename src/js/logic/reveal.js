import {store} from "../redux/store";
import {ifFieldExist, down, downLeft, downRight, left, right, up, upLeft, upRight} from "./ifFieldExist";
import {boardSetter, removeFieldListSetter, removeFlagSetter, revealFieldSetter} from "../redux/actions/allActions";


export const reveal = async (col, row, main) => {
    let {board, gameplay: {mode}} = store.getState();

    let updatedBoard = [...board];

    const size = board.length;
    const smartChecker = (mode === 'rise' || mode === 'smart')

    updatedBoard[col][row].visible = true;
    if (updatedBoard[col][row].flag) store.dispatch(removeFlagSetter());
    updatedBoard[col][row].flag = false;
    updatedBoard[col][row].question = false;
    store.dispatch(revealFieldSetter());
    if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col, remRow:row}))


    const passer = (data) => (data.adj <= 0) && (data.visible === false);

    if (ifFieldExist(col, row, upLeft)) {
        if (passer(updatedBoard[col - 1][row - 1])) updatedBoard = await reveal(col-1, row-1, updatedBoard);
        else if (!updatedBoard[col - 1][row - 1].visible) {
            store.dispatch(revealFieldSetter());
            updatedBoard[col - 1][row - 1].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col - 1, remRow:row - 1}))
        }
    }
    if (ifFieldExist(col, row, up)) {
        if (passer(updatedBoard[col][row-1])) updatedBoard = await reveal(col, row-1, updatedBoard);
        else if (!updatedBoard[col][row - 1].visible) {
            store.dispatch(revealFieldSetter());
            updatedBoard[col][row - 1].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col, remRow:row - 1}))
        }
    }
    if (ifFieldExist(col, row, upRight, size)) {
        if (passer(updatedBoard[col+1][row-1])) updatedBoard = await reveal(col+1, row-1, updatedBoard);
        else if(!updatedBoard[col + 1][row - 1].visible) {
            // store.dispatch(revealFieldSetter());
            updatedBoard[col + 1][row - 1].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col + 1, remRow:row - 1}))
        }
    }
    if (ifFieldExist(col, row, right, size)) {
        if (passer(updatedBoard[col+1][row])) updatedBoard = await reveal(col+1, row, updatedBoard);
        else if(!updatedBoard[col + 1][row].visible) {
            store.dispatch(revealFieldSetter());
            updatedBoard[col + 1][row].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col + 1, remRow:row}))
        }
    }
    if (ifFieldExist(col, row, downRight, size)) {
        if (passer(updatedBoard[col+1][row+1])) updatedBoard = await reveal(col+1, row+1, updatedBoard);
        else if(!updatedBoard[col + 1][row + 1].visible) {
            store.dispatch(revealFieldSetter());
            updatedBoard[col + 1][row + 1].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col + 1, remRow:row + 1}))
        }
    }
    if (ifFieldExist(col, row, down, size)) {
        if (passer(updatedBoard[col][row+1])) updatedBoard = await reveal(col, row+1, updatedBoard);
        else if(!updatedBoard[col][row + 1].visible) {
            store.dispatch(revealFieldSetter());
            updatedBoard[col][row + 1].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col, remRow:row + 1}))
        }
    }
    if (ifFieldExist(col, row, downLeft, size)) {
        if (passer(updatedBoard[col-1][row+1])) updatedBoard = await reveal(col-1, row+1, updatedBoard);
        else if(!updatedBoard[col - 1][row + 1].visible) {
            store.dispatch(revealFieldSetter());
            updatedBoard[col - 1][row + 1].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col - 1, remRow:row + 1}))
        }
    }
    if (ifFieldExist(col, row, left)) {
        if (passer(updatedBoard[col-1][row])) updatedBoard = await reveal(col-1, row, updatedBoard);
        else if(!updatedBoard[col - 1][row].visible) {
            store.dispatch(revealFieldSetter());
            updatedBoard[col - 1][row].visible = true;
            if (smartChecker) store.dispatch(removeFieldListSetter({remCol:col - 1, remRow:row}))
        }
    }
    store.dispatch(boardSetter(updatedBoard))
    if (main) return updatedBoard
};