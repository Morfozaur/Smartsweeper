import {actionsTypes} from "../actions/actionsTypes";

export const scoreboard = {
    size: null,
    mode: null,
    style: null
}

const {scoreSize ,scoreMode, scoreStyle} = actionsTypes

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
        default:
            return state;
    }
};