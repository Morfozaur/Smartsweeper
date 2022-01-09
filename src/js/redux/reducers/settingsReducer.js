import {actionsTypes} from "../actions/actionsTypes";
const { backlight, sizeActive } = actionsTypes;

const settings =  {
    editable: false,
    backlight: false,
    sizeActive: true
}

export const settingsReducer = (state = settings, {type, payload}) => {
    switch (type) {
        case backlight:
            return {...state, backlight: payload};
        case sizeActive:
            return {...state, sizeActive: payload};
        default:
            return state;
    }
};