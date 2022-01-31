import React, {useState} from 'react';

import ScoreboardMenu from "../elements/ScoreboardMenu";
import ScoreboardTable from "../elements/ScoreboardTable";
import {screenSetter} from "../../redux/actions/allActions";
import {useDispatch} from "react-redux";
import {loadScores} from "../../logic/loadScores";

const Scoreboard = () => {
    const [size, setSize] = useState('s');
    const [mode, setMode] = useState('classic');
    const [style, setStyle] = useState('classic');

    const scores = loadScores();

    const sizeSet = {
        value: size,
        setter: setSize,
        pool: ['s', 'm', 'l']
    }
    const modeSet = {
        value: mode,
        setter: setMode,
        pool: ['classic', 'rotating', 'rise', 'smart']
    }
    const styleSet = {
        value: style,
        setter: setStyle,
        pool: ['classic', 'colors', 'detector', 'scanner']
    }

    const dispatch = useDispatch();
    return (
        <div className='scoreboard gui'>
            <p className={'scoreboard__header scoreboard__text'}>HIGH SCORES</p>
            <hr className={'scoreboard__line'}/>
            <ScoreboardMenu size={sizeSet} mode={modeSet} style={styleSet}/>
            <ScoreboardTable table={scores} size={size} mode={mode} style={style}/>
            <div className="scoreboard__btn" onClick={()=>dispatch(screenSetter('start'))}>Back</div>
        </div>
    );
}

export default Scoreboard;