import React, {useState} from 'react';
import {firstBig} from "../../../logic/baseFunctions";
import {useDispatch, useSelector} from "react-redux";
import {scoreModeSetter, scoreSizeSetter, scoreStyleSetter} from "../../../redux/actions/allActions";

const ScoreboardControls = ({type}) => {
    const scoreboard = useSelector(state => state.scoreboard);
    const {size, mode, style} = useSelector(state => state.scoreboard);
    const sets = {
        size: ['s', 'm', 'l'],
        mode: ['classic', 'rotating', 'rise', 'smart'],
        style: ['classic', 'colors', 'detector', 'scanner'],
    }
    const value = scoreboard[type];
    const pool = sets[type];
    const currState = sets[type].findIndex(el => el === value);

    const dispatch = useDispatch();

    const changeCurrent = (type, value) => {
        switch (type) {
            case 'size':
                dispatch(scoreSizeSetter(value));
                break;
            case 'mode':
                dispatch(scoreModeSetter(value));
                break;
            case 'style':
                dispatch(scoreStyleSetter(value));
                break;
            default:
                break;
        }
    }

    const prev = () => {
        if (currState === 0) {
            if (type === 'size' && mode === 'rotating') {
                dispatch(scoreModeSetter('classic'));
            } else if (type === 'mode') {
                dispatch(scoreStyleSetter('detector'));
            }
            changeCurrent(type, pool[pool.length-1])
        } else {
            if (type === 'mode' && mode === 'rise' && size === 'l') {
                dispatch(scoreSizeSetter('s'));
            } else if (type === 'style' && mode === 'smart') {
                dispatch(scoreModeSetter('classic'));
            }
            changeCurrent(type, pool[currState -1])
        }
    }

    const next = () => {
        if (currState === pool.length - 1) {
            changeCurrent(type, pool[0])
        } else {
            if (type === 'size' && size === 'm' && mode === 'rotating') {
                dispatch(scoreModeSetter('classic'));
            } else if (type === 'mode' && mode === 'classic' && size === 'l') {
                dispatch(scoreSizeSetter('s'));
            } else if (type === 'mode' && mode === 'rise' && style !== 'detector') {
                dispatch(scoreStyleSetter('detector'));
            } else if (type === 'style' && mode === 'smart') {
                dispatch(scoreModeSetter('classic'));
            }
            changeCurrent(type, pool[currState + 1])
        }

    }

    return (
        <div className="scoreboard__controls">
            <div className="scoreboard__button scoreboard__button--left" onClick={prev}/>
            <div className="scoreboard__option scoreboard__text">{firstBig(value)}</div>
            <div className="scoreboard__button scoreboard__button--right" onClick={next}/>
        </div>
    );
}

export default ScoreboardControls;