import {actionsTypes} from "../actions/actionsTypes"

export const allFields = {
    total: null,
    left: null,
    check: null
}

export const boardFieldsReducer = (state = allFields, {type, payload}) => {
    switch (type) {
        case actionsTypes.totalFields:
            const {total, check} = payload
            return {total: total, left: total, check: check};
        case actionsTypes.revealField:
            return {...state,
                left: state.left - 1};
        case actionsTypes.increaseChecker:
            return {...state,
                check: state.check + 1}
        default:
            return state;
    }
};