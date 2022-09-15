import {store} from "../redux/store";
import {boardSetter, endSetter} from "../redux/actions/allActions";

export const revealAll = async () => {
    const board = [...store.getState().board];
    let updatedBoard = [...board];

    store.dispatch(endSetter(new Date().getTime()));
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board.length; row++) {
            updatedBoard[col][row].visible = true;
        }
    }
    store.dispatch(boardSetter(updatedBoard))
};