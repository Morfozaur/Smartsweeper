import {actionsTypes} from "../actions/actionsTypes";

const defaultState = {
    total: null,
    remain: null
}

export const minesReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case actionsTypes.totalMines:
            return payload;
        case actionsTypes.addMine:
            return {...state,
                remain: state.remain + 1};
        case actionsTypes.removeMine:
            return {...state,
                remain: state.remain - 1};
        default:
            return state;
    }
};