import {actionsTypes} from "../actions/actionsTypes";
import {startingMines} from "../../logic/startingMines";

const gameplay = {
    boardSize: 10,
    mode: 'classic',
    style: 'classic',
    detector: 0,
    mineLimit: 18
}

const { boardSize, mode, style, detector } = actionsTypes

export const gameplayReducer = (state = gameplay, {type, payload}) => {
    switch (type) {
        case boardSize:
            return {...state, boardSize: payload, mineLimit: startingMines(payload) * 1.5};
        case mode:
            return {...state, mode: payload};
        case style:
            return {...state, style: payload};
        case detector:
            return {...state, detector: payload};
        default:
            return state;
    }
};