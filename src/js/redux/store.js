import {combineReducers, createStore} from 'redux'
import {boardReducer} from "./reducers/boardReducer";
import {reloadReducer} from "./reducers/reloadReducer";
import {buttonPressReducer} from "./reducers/buttonPressReducer";

const allReducers = combineReducers({
    board: boardReducer,
    reload: reloadReducer,
    flag: buttonPressReducer
});

export const store = createStore(allReducers);