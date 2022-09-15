import {actionsTypes} from "../actions/actionsTypes";

export const scoreboard = {
    size: 's',
    mode: 'classic',
    style: 'classic'
}

const {scoreSize ,scoreMode, scoreStyle, scoreDefault} = actionsTypes

export const scoreboardReducer = (state = scoreboard, {type, payload}) => {
    switch (type) {
        case scoreSize:
            return {...state,
                size: payload};
        case scoreMode:
            return {...state,
                mode: payload};
        case scoreStyle:
            return {...state,
                style: payload};
        case scoreDefault:
            return scoreboard;
        default:
            return state;
    }
};