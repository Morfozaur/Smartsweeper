import {store} from "../redux/store";
import {endSetter} from "../redux/actions/allActions";

export const revealAll = async () => {
    const board = [...store.getState().board];
    store.dispatch(endSetter(new Date().getTime()));
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board.length; row++) {
            board[col][row].visible = true;
        }
    }
};