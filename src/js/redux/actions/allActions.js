import {actionsTypes} from "./actionsTypes";

const {board, reload, flagMode} = actionsTypes

export const boardSetter = data => {
    return {type: board, payload:data};
};

export const reloadSetter = data => {
    return {type: reload, payload: data};
};

export const flagModeSetter = data => {
    return {type: flagMode, payload: data};
};