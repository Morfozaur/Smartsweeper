import React from 'react';

import ScoreboardMenu from "../elements/ScoreboardMenu";
import ScoreboardTable from "../elements/ScoreboardTable";
import {screenSetter} from "../../redux/actions/allActions";
import {useDispatch} from "react-redux";
import {scoresTemplate} from "../../logic/scoresTemplate";

const Scoreboard = () => {
    // let scores;
    // if (localStorage.getItem("smartScore") === null) {
    //     scores = scoresTemplate;
    //     localStorage.setItem("smartScore", scoresTemplate);
    //     console.log('Template added');
    // } else {
    //     scores = localStorage.getItem("smartScore");
    //     console.log('Template loaded');
    // }
    console.log(localStorage, scoresTemplate)
    const dispatch = useDispatch();
    return (
        <div className='scoreboard gui'>
            <p className={'scoreboard__header scoreboard__text'}>HIGH SCORES</p>
            <hr className={'scoreboard__line'}/>
            <ScoreboardMenu/>
            <ScoreboardTable table={scoresTemplate}/>
            <div className="scoreboard__btn" onClick={()=>dispatch(screenSetter('start'))}>Back</div>
        </div>
    );
}

export default Scoreboard;