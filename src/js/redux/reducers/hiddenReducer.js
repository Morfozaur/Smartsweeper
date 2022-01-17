import {actionsTypes} from "../actions/actionsTypes";

export const hiddenReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case actionsTypes.setHidden:
            return payload
        case actionsTypes.addMine:
            return {...state}
        case actionsTypes.removeMine:
            return {...state}
        case actionsTypes.addField:
            const {addCol, addRow} = payload;
            const addData = state.availableFields;
            addData[addCol].push(addRow)
            return {...state, availableFields: addData}
        case actionsTypes.removeField:
            const {remCol, remRow} = payload;
            console.log(remCol, remRow)
            const remData = state.availableFields;
            remData[remCol] = remData[remCol].filter(num => num !== remRow)
            return {...state, availableFields: remData}
        default:
            return state
    }
};