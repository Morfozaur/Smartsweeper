import {actionsTypes} from "../actions/actionsTypes";

export const defaultMines = {
    total: null,
    remain: null,
    flagged: null
}

export const minesReducer = (state = defaultMines, {type, payload}) => {
    switch (type) {
        case actionsTypes.totalMines:
            return payload;
        case actionsTypes.selectMine:
            return {...state,
                remain: state.remain + 1};
        case actionsTypes.unselectMine:
            return {...state,
                remain: state.remain - 1};
        case actionsTypes.addFlag:
            return {...state,
                flagged: state.flagged + 1};
        case actionsTypes.removeFlag:
            return {...state,
                flagged: state.flagged - 1};
        default:
            return state;
    }
};