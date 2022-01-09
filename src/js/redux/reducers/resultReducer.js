import {actionsTypes} from "../actions/actionsTypes";

const defaultState = {
    resolve: 'init',
    start: null,
    end: null,
    time: 0
}

const { resolve, start, end} = actionsTypes

export const resultReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
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