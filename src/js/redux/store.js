import {combineReducers, createStore} from 'redux'
import {boardReducer} from "./reducers/boardReducer";

const allReducers = combineReducers({
    board: boardReducer,
});

export const store = createStore(allReducers)