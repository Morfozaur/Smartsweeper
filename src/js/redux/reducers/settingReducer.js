import {actionsTypes} from "../actions/actionsTypes";
const { backlight } = actionsTypes;

const settings =  {
    backlight: false,
}

export const settingReducer = (state = settings, {type, payload}) => {
    switch (type) {
        case backlight:
            return {...state, backlight: payload};
        default:
            return state;
    }
};