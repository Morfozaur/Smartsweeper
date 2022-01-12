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
    power,
    resolve, start, end,
    backlight, editable,
    style, mode, sizeActive,
    detector
} = actionsTypes

const setter = (type, data) => {
    if (data !== undefined) return {type: type, payload: data}
    return {type: type}
}

export const powerSetter = () => setter(power);

// SCREEN SETTERS
export const screenSetter = data => setter(screen, data);
export const reloadSetter = data => setter(reload, data);
export const selectModeSetter = data => setter(selectMode, data);

// BOARD SETTERS
export const boardSetter = data => setter(board, data);
export const boardSizeSetter = data => setter(boardSize, data);

// FIELDS SETTERS
export const minesSetter = data => setter(totalMines, data);
export const selectMineSetter = () => setter(selectMine);
export const unselectMineSetter = () => setter(unselectMine);
export const addFlagSetter = () => setter(addFlag);
export const removeFlagSetter = () => setter(removeFlag);
export const totalFieldsSetter = data => setter(totalFields, data);
export const revealFieldSetter = () => setter(revealField);

// GAMEPLAY SETTERS
export const resolveSetter = data => setter(resolve, data);
export const startSetter = data => setter(start, data);
export const endSetter = data => setter(end, data);
export const detectorSetter = data => setter(detector, data);

// SETTING SETTERS
export const backlightSetter = data => setter(backlight, data);
export const sizeConfigSetter = data => setter(sizeActive, data);
export const modeSetter = data => setter(mode, data);
export const styleSetter = data => setter(style, data);
export const editableSetter = data => setter(editable, data);