import React from 'react';
import * as Tone from "tone";
import {boarding} from "../../logic/boarding";
import {boardSetter, minesSetter, screenSetter, totalFieldsSetter} from "../../redux/actions/allActions";
import {playStart} from "../../logic/synth";
import {useDispatch, useSelector} from "react-redux";


const Start = () => {
    const {boardSize} = useSelector(state =>state)
    const dispatch = useDispatch();

    const click = () => {
        const vol = new Tone.Volume(-20).toDestination();
        const synth = new Tone.MembraneSynth().connect(vol);
        synth.triggerAttackRelease("C2", "8n");
    };

    const setBoard = async () => {
        const mines = Math.ceil(Math.pow(boardSize, 2) * ((2 + boardSize) /100))
        const newBoard = boarding(boardSize, mines);
        dispatch(totalFieldsSetter({total: Math.pow(boardSize, 2), check: mines}))
        dispatch(boardSetter(newBoard));
        dispatch(minesSetter({total: mines, remain: mines, flagged: 0}));
        dispatch(screenSetter('board'));
        await playStart();
    }

    return (
        <div className={'start'}>
            <p className={'start__logo'}>
                Smart <span className={'start__logo start__logo--span'}>Sweeper</span>
            </p>
            <div className="start__menu">
                <p className="start__option" onMouseEnter={click} onClick={setBoard}>NEW GAME</p>
                <p className="start__option" onMouseEnter={click}>HELP</p>
                <p className="start__option" onMouseEnter={click}>ABOUT</p>
            </div>
        </div>
    );
}

export default Start;