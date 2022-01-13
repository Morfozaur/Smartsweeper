import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {thunkBoard} from "../../redux/actions/thunkBoard";
import {firstBig} from "../../logic/baseFunctions";

const Setup = () => {
    const {mode, style, boardSize} = useSelector(state => state.gameplay)
    const dispatch = useDispatch();
    const modeDesc = {
        classic: 'Traditional minesweeper with static board and bombs position',
        smart: 'Once per 5 second one of the mine move to random covered cell',
        rotating: 'Once per 5 second board rotates 90 degree (available only on small and medium board)',
        rise: 'Once per 5 second new mine is placed on random cell',
    }
    const styleDesc = {
        classic: 'Each cell shows the number of mines adjacent to it',
        colors: 'Number of adjacent mines is marked by color code',
        detector: 'Move cursor over cell to activate mine indicator',
        scanner: 'Click on the cell to reveal mines counters on adjacent cells',
    }

    return (
        <div className='setup'>
            <p className='setup__header'>Set up match and press Start!</p>
            <p className="setup__text setup__text--lead">SIZE: {boardSize}x{boardSize}</p>
            <div className="setup__chosen">
                <div className="setup__column">
                    <div className="setup__text setup__text--lead">MODE</div>
                    <div className="setup__text setup__text--lead">{firstBig(mode)}</div>
                    <div className="setup__text setup__text--desc">{modeDesc[mode]}</div>
                </div>
                <div className="setup__column">
                    <div className="setup__text setup__text--lead">STYLE</div>
                    <div className="setup__text setup__text--lead">{firstBig(style)}</div>
                    <div className="setup__text setup__text--desc">{styleDesc[style]}</div>
                </div>
            </div>
            <div className="setup__btn" onClick={() => dispatch(thunkBoard())}>Start!</div>
        </div>
    );
}

export default Setup;