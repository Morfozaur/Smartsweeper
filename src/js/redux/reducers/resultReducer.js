import {actionsTypes} from "../actions/actionsTypes";

const defaultState = {
    resolve: null,
    start: null,
    end: null,
    time: 0
}

export const resultReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case actionsTypes.resolve:
            return {...state, resolve: payload};
        case actionsTypes.start:
            return {...state, start: payload};
        case actionsTypes.end:
            return {
                ...state,
                end: payload,
                time: Number(((payload - state.start)/1000).toFixed(2))};
        default:
            return state;
    }
};