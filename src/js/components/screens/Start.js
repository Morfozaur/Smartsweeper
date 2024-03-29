import React from 'react';
import {playClick} from "../../logic/synth";
import {useDispatch} from "react-redux";
import {
    backlightSetter,
    boardSetter,
    editableSetter,
    minesSetter, scoreDefaultSetter,
    screenSetter,
    totalFieldsSetter
} from "../../redux/actions/allActions";
import {allFields} from "../../redux/reducers/boardFieldsReducer";

const Start = () => {
    const dispatch = useDispatch();

    const start = () => {
        dispatch(screenSetter('setup'));
        dispatch(editableSetter(true));
        dispatch(backlightSetter(true));
        dispatch(minesSetter({total: 12, remain:12, flagged: 0}))
        dispatch(boardSetter([]));
        dispatch(totalFieldsSetter(allFields))
    };

    const highScore = () => {
        dispatch(scoreDefaultSetter())
        dispatch(screenSetter('score'))
    }

    return (
        <div className={'start gui'}>
            <p className={'start__logo'}>
                Smart <span className={'start__logo start__logo--span'}>Sweeper</span>
            </p>
            <div className="start__menu">
                <p className="start__option"
                   onMouseEnter={playClick}
                   onClick={start}>NEW GAME</p>
                <p className="start__option"
                   onMouseEnter={playClick}
                   onClick={highScore}>HIGH SCORES</p>
                <p className="start__option"
                   onMouseEnter={playClick}
                   onClick={()=>dispatch(screenSetter('about'))}>ABOUT</p>
            </div>
        </div>
    );
}

export default Start;