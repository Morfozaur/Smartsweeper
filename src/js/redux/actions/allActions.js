import {actionsTypes} from "./actionsTypes";

const {
    screen,
    board,
    boardSize,
    reload,
    selectMode,
    totalMines,
    selectMine, unselectMine,
    addFlag, removeFlag,
    totalFields, revealField,
    power
} = actionsTypes

export const screenSetter = data => {
    return {type: screen, payload:data};
};

export const boardSetter = data => {
    return {type: board, payload:data};
};

export const boardSizeSetter = data => {
    return {type: boardSize, payload:data};
};

export const reloadSetter = data => {
    return {type: reload, payload: data};
};

export const selectModeSetter = data => {
    return {type: selectMode, payload: data};
};

export const minesSetter = data => {
    return {type: totalMines, payload: data};
};

export const selectMineSetter = () => {
    return {type: selectMine};
};

export const unselectMineSetter = () => {
    return {type: unselectMine};
};

export const addFlagSetter = () => {
    return {type: addFlag};
};

export const removeFlagSetter = () => {
    return {type: removeFlag};
};

export const totalFieldsSetter = data => {
    return {type: totalFields, payload: data};
};

export const revealFieldSetter = () => {
    return {type: revealField};
};

export const powerSetter = () => {
    return {type: power};
};