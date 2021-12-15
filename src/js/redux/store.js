import {combineReducers, createStore} from 'redux'
import {boardReducer} from "./reducers/boardReducer";
import {reloadReducer} from "./reducers/reloadReducer";
import {selectionModeReducer} from "./reducers/selectionModeReducer";
import {minesReducer} from "./reducers/minesReducer";
import {boardSizeReducer} from "./reducers/boardSizeReducer";
import {boardFieldsReducer} from "./reducers/boardFieldsReducer";
import {screenReducer} from "./reducers/screenReducer";

const allReducers = combineReducers({
    screen: screenReducer,
    board: boardReducer,
    boardSize: boardSizeReducer,
    reload: reloadReducer,
    selectMode: selectionModeReducer,
    mines: minesReducer,
    fieldsCounter: boardFieldsReducer
});

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(allReducers, enhancers);