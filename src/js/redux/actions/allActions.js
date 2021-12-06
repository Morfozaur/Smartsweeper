import {actionsTypes} from "./actionsTypes";

const {board, boardSize, reload, flagMode, totalMines, removeMine, addMine} = actionsTypes

export const boardSetter = data => {
    return {type: board, payload:data};
};
export const boardSizeSetter = data => {
    return {type: boardSize, payload:data};
};

export const reloadSetter = data => {
    return {type: reload, payload: data};
};

export const flagModeSetter = data => {
    return {type: flagMode, payload: data};
};

export const minesSetter = data => {
    return {type: totalMines, payload: data};
};

export const checkMineSetter = () => {
    return {type: removeMine};
};
export const uncheckMineSetter = () => {
    return {type: addMine};
};