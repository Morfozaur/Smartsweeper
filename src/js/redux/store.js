import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import {boardReducer} from "./reducers/boardReducer";
import {reloadReducer} from "./reducers/reloadReducer";
import {selectionModeReducer} from "./reducers/selectionModeReducer";
import {minesReducer} from "./reducers/minesReducer";
import {boardFieldsReducer} from "./reducers/boardFieldsReducer";
import {screenReducer} from "./reducers/screenReducer";
import {powerReducer} from "./reducers/powerReducer";
import {resultReducer} from "./reducers/resultReducer";
import thunk from "redux-thunk";
import {settingsReducer} from "./reducers/settingsReducer";
import {gameplayReducer} from "./reducers/gameplayReducer";
import {hiddenReducer} from "./reducers/hiddenReducer";
import {scoreboardReducer} from "./reducers/scoreboardReducer";

const allReducers = combineReducers({
    screen: screenReducer,
    board: boardReducer,
    reload: reloadReducer,
    selectMode: selectionModeReducer,
    mines: minesReducer,
    fieldsCounter: boardFieldsReducer,
    power: powerReducer,
    result: resultReducer,
    settings: settingsReducer,
    gameplay: gameplayReducer,
    smart: hiddenReducer,
    scoreboard: scoreboardReducer
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers = compose(applyMiddleware(thunk), devTools)

export const store = createStore(allReducers,composeEnhancers);