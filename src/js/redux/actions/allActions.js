import {actionsTypes} from "./actionsTypes";

const {board, reload, buttonPress} = actionsTypes

export const boardSetter = data => {
    return {type: board, payload:data};
};

export const reloadSetter = data => {
    return {type: reload, payload: data};
};

export const buttonPressSetter = data => {
    return {type: buttonPress, payload: data};
};