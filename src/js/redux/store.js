import {combineReducers, createStore} from 'redux'
import {boardReducer} from "./reducers/boardReducer";
import {reloadReducer} from "./reducers/reloadReducer";
import {flagModeReducer} from "./reducers/flagModeReducer";
import {minesReducer} from "./reducers/minesReducer";

const allReducers = combineReducers({
    board: boardReducer,
    reload: reloadReducer,
    flagMode: flagModeReducer,
    mines: minesReducer
});

export const store = createStore(allReducers);