import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {thunkBoard} from "../../redux/actions/thunkBoard";
import {firstBig} from "../../logic/baseFunctions";
import {backlightSetter, editableSetter, minesSetter, screenSetter} from "../../redux/actions/allActions";
import {startingMines} from "../../logic/startingMines";

const Setup = () => {
    const {mines: {total}, gameplay: {mode, style, boardSize}} = useSelector(state => state)

    const dispatch = useDispatch();
    const modeDesc = {
        classic: 'Traditional minesweeper with a static board and fixed bombs position',
        smart: 'Once per 5 second random mine change field (available only with detector style)',
        rotating: 'Once per 5 second the board rotates 90 degree (available on small and medium boards)',
        rise: 'Once per 10 second a new mine is placed on the random cell',
    }
    const styleDesc = {
        classic: 'Each cell shows the number of mines adjacent to it',
        colors: 'Number of adjacent mines is marked by color code',
        detector: 'Move a cursor over the cell to activate the mine indicator (unlock Smart mode)',
        scanner: 'Click on the cell to reveal mines counters on adjacent cells',
    }

    const updateDisplay = useCallback( () => {
        const mines = startingMines(boardSize)
        dispatch(minesSetter({total: mines, remain: mines, flagged: 0}))
    },[boardSize, dispatch])

    const back = () => {
        dispatch(editableSetter(false));
        dispatch(backlightSetter(false));
        dispatch(minesSetter({total: null, remain:null, flagged: null}))
        dispatch(screenSetter('start'))
    }

    useEffect(()=> {
        updateDisplay()
    }, [boardSize, updateDisplay])

    return (
        <div className='setup gui'>
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
            <div className="setup__buttons">
                <div className="button__screen" onClick={() => dispatch(thunkBoard(total))}>Start!</div>
                <div className="button__screen" onClick={back}>Back</div>
            </div>
        </div>
    );
}

export default Setup;