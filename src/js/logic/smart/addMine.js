import {store} from "../../redux/store";
import {parseFields} from "./parseFields";
import {random} from "../baseFunctions";
import {modifyAdjacent} from "../adjacentControl";
import {
    addMineSetter, boardSetter, increaseCheckerLimitSetter,
    increaseMinesLimitSetter,
    removeFieldListSetter
} from "../../redux/actions/allActions";

export const addMine = () => {
    const {
        board,
        smart: {availableFields},
        mines: {total},
        gameplay: {mineLimit},
        fieldsCounter: {left}
    } = store.getState();

    if (total < mineLimit && total < left) {
        const parsedField = parseFields(availableFields);
        const fieldNum = random(parsedField.length-1);

        const removedField = {
            remCol: parsedField[fieldNum][0],
            remRow: parsedField[fieldNum][1],
        }

        const [newMineCol, newMineRow] = parsedField[fieldNum];
        let updatedBoard = [...board];
        updatedBoard[newMineCol][newMineRow].bomb = true;
        updatedBoard = modifyAdjacent(updatedBoard, newMineCol, newMineRow, 'plus')

        const remain = board[newMineCol][newMineRow].flag ? 0 : 1;
        store.dispatch(boardSetter(updatedBoard))
        store.dispatch(increaseMinesLimitSetter(remain));
        store.dispatch(increaseCheckerLimitSetter())
        store.dispatch(addMineSetter(parsedField[fieldNum]));
        store.dispatch(removeFieldListSetter(removedField));

    }
};