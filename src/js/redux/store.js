import {combineReducers, createStore} from 'redux'
import {boardReducer} from "./reducers/boardReducer";
import {reloadReducer} from "./reducers/reloadReducer";

const allReducers = combineReducers({
    board: boardReducer,
    reload: reloadReducer
});

export const store = createStore(allReducers)