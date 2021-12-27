import React from 'react';
import {playClick} from "../../logic/synth";
import {useDispatch} from "react-redux";
import {thunkBoard} from "../../redux/actions/thunkBoard";


const Start = () => {
    const dispatch = useDispatch();

    return (
        <div className={'start'}>
            <p className={'start__logo'}>
                Smart <span className={'start__logo start__logo--span'}>Sweeper</span>
            </p>
            <div className="start__menu">
                <p className="start__option"
                   onMouseEnter={playClick}
                   onClick={() => dispatch(thunkBoard())}>NEW GAME</p>
                <p className="start__option"
                   onMouseEnter={playClick}>HELP</p>
                <p className="start__option"
                   onMouseEnter={playClick}>ABOUT</p>
            </div>
        </div>
    );
}

export default Start;