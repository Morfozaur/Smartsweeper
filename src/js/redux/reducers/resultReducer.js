import {actionsTypes} from "../actions/actionsTypes";

const defaultState = {
    resolve: 'init',
    start: null,
    end: null,
    time: 0,
    clicks: 0
}

const { resolve, start, end, clickCounter, newGame} = actionsTypes

export const resultReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case newGame:
            return {...defaultState, resolve: false};
        case clickCounter:
            return {...state, clicks: state.clicks + 1};
        case resolve:
            return {...state, resolve: payload};
        case start:
            return {...state, start: payload};
        case end:
            const time = Number(((payload - state.start)/1000).toFixed(2))
            return {
                ...state,
                end: payload,
                time};
        default:
            return state;
    }
};