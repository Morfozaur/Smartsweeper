import React from 'react';
import {playClick} from "../../logic/synth";
import {useDispatch} from "react-redux";
import {backlightSetter, screenSetter} from "../../redux/actions/allActions";


const Start = () => {
    const dispatch = useDispatch();

    const start = () => {
        dispatch(screenSetter('setup'));
        dispatch(backlightSetter(true));
    };

    return (
        <div className={'start'}>
            <p className={'start__logo'}>
                Smart <span className={'start__logo start__logo--span'}>Sweeper</span>
            </p>
            <div className="start__menu">
                <p className="start__option"
                   onMouseEnter={playClick}
                   onClick={start}>NEW GAME</p>
                <p className="start__option"
                   onMouseEnter={playClick}>HELP</p>
                <p className="start__option"
                   onMouseEnter={playClick}>ABOUT</p>
            </div>
        </div>
    );
}

export default Start;