import {actionsTypes} from "./actionsTypes";

const {board, reload} = actionsTypes

export const boardSetter = data => {
    return {type: board, payload:data};
};

export const reloadSetter = data => {
    return {type: reload, payload: data};
};