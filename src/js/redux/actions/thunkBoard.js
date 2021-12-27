import {boarding} from "../../logic/boarding";
import {playStart} from "../../logic/synth";
import {
    boardSetter,
    minesSetter,
    resolveSetter,
    screenSetter,
    startSetter,
    totalFieldsSetter
} from "./allActions";

export const thunkBoard = () => {
    return async (dispatch, getState) => {
        const {boardSize} = getState();
        const mines = Math.ceil(Math.pow(boardSize, 2) * ((2 + boardSize) /100))
        const newBoard = await boarding(boardSize, mines);
        await playStart();
        dispatch(totalFieldsSetter({total: Math.pow(boardSize, 2), check: mines}))
        dispatch(boardSetter(newBoard));
        dispatch(minesSetter({total: mines, remain: mines, flagged: 0}));
        dispatch(screenSetter('board'));
        dispatch(resolveSetter(false));
        dispatch(startSetter(new Date().getTime()))
    }
};