import {boarding} from "../../logic/boarding";
import {playStart} from "../../logic/synth";
import {
    boardSetter, detectorSetter, editableSetter,
    minesSetter,
    resolveSetter,
    screenSetter, setHiddenSetter,
    startSetter,
    totalFieldsSetter
} from "./allActions";

export const thunkBoard = (mines) => {
    return async (dispatch, getState) => {
        const {gameplay: {boardSize, mode}} = getState();
        const {newBoard, fieldsManager} = boarding(boardSize, mines, mode);
        await playStart();
        dispatch(totalFieldsSetter({total: Math.pow(boardSize, 2), check: mines}));
        dispatch(boardSetter(newBoard));
        dispatch(minesSetter({total: mines, remain: mines, flagged: 0}));
        dispatch(screenSetter('board'));
        dispatch(editableSetter(false));
        dispatch(resolveSetter(false));
        dispatch(detectorSetter(0))
        dispatch(setHiddenSetter(fieldsManager))
        dispatch(startSetter(new Date().getTime()));
    }
};