import {actionsTypes} from "../actions/actionsTypes";
import {filterMineArray} from "../../logic/baseFunctions";

export const hiddenReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case actionsTypes.setHidden:
            return payload
        case actionsTypes.addMine:
            const newMineList = state.mineList;
            newMineList.push(payload)
            return {...state, mineList: newMineList}
        case actionsTypes.removeMine:
            const removedMineList = state.mineList;
            const updatedList = removedMineList.filter(el => filterMineArray(el, payload) )
            return {...state, mineList: updatedList}
        case actionsTypes.addField:
            const {addCol, addRow} = payload;
            const addData = state.availableFields;
            addData[addCol].push(addRow)
            return {...state, availableFields: addData}
        case actionsTypes.removeField:
            const {remCol, remRow} = payload;
            const remData = state.availableFields;
            remData[remCol] = remData[remCol].filter(num => num !== remRow)
            return {...state, availableFields: remData}
        default:
            return state
    }
};