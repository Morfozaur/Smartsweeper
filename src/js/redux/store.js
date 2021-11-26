import {combineReducers, createStore} from 'redux'
import {boardReducer} from "./reducers/boardReducer";
import {reloadReducer} from "./reducers/reloadReducer";
import {flagModeReducer} from "./reducers/flagModeReducer";

const allReducers = combineReducers({
    board: boardReducer,
    reload: reloadReducer,
    flagMode: flagModeReducer
});

export const store = createStore(allReducers);