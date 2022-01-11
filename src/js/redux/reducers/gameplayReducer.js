import {actionsTypes} from "../actions/actionsTypes";

const gameplay = {
    boardSize: 10,
    mode: 'C',
    style: 'C'
}

const { boardSize, mode, style } = actionsTypes

export const gameplayReducer = (state = gameplay, {type, payload}) => {
    switch (type) {
        case boardSize:
            return {...state, boardSize: payload};
        case mode:
            return {...state, mode: payload};
        case style:
            return {...state, style: payload};
        default:
            return state;
    }
};