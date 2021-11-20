import {actionsTypes} from "./actionsTypes";

export const boardSetter = (board) => {
    return {type: actionsTypes.board, payload:board};
};