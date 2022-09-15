import {store} from "../../redux/store";
import {parseFields} from "./parseFields";
import {random} from "../baseFunctions";
import {
    addFieldListSetter,
    addMineSetter, boardSetter, increaseMinesToFindSetter, reduceMinesToFindSetter,
    reloadSetter,
    removeFieldListSetter,
    removeMineSetter
} from "../../redux/actions/allActions";
import {modifyAdjacent} from "../adjacentControl";

export const moveMine = () => {
    const {board, smart: {availableFields, mineList}} = store.getState();
    const parsedField = parseFields(availableFields);
    const mineNum = random(mineList.length-1);
    const fieldNum = random(parsedField.length-1);

    const removedField = {
        remCol: parsedField[fieldNum][0],
        remRow: parsedField[fieldNum][1],
    }

    const addedField = {
        addCol: mineList[mineNum][0],
        addRow: mineList[mineNum][1],
    }

    const [oldMineCol, oldMineRow] = mineList[mineNum];
    const [newMineCol, newMineRow] = parsedField[fieldNum];


    let updatedBoard = [...board];
    updatedBoard[oldMineCol][oldMineRow].bomb = false;
    updatedBoard[newMineCol][newMineRow].bomb = true;
    updatedBoard = modifyAdjacent(updatedBoard, oldMineCol, oldMineRow, 'minus');
    updatedBoard = modifyAdjacent(updatedBoard, newMineCol, newMineRow, 'plus');
    store.dispatch(boardSetter(updatedBoard))

    if (board[oldMineCol][oldMineRow].flag) {
        store.dispatch(increaseMinesToFindSetter())
    }

    if (board[newMineCol][newMineRow].flag) {
        store.dispatch(reduceMinesToFindSetter())
    }

    store.dispatch(removeMineSetter(mineList[mineNum]));
    store.dispatch(addMineSetter(parsedField[fieldNum]));
    store.dispatch(removeFieldListSetter(removedField));
    store.dispatch(addFieldListSetter(addedField));

    store.dispatch(reloadSetter(true));
};