import React from 'react';
import ScoreboardMenu from "../elements/scoreboard/ScoreboardMenu";
import ScoreboardTable from "../elements/scoreboard/ScoreboardTable";
import {screenSetter} from "../../redux/actions/allActions";
import {useDispatch} from "react-redux";

const Scoreboard = () => {

    const dispatch = useDispatch();
    return (
        <div className='scoreboard gui'>
            <p className={'scoreboard__header scoreboard__text'}>HIGH SCORES</p>
            <hr className={'scoreboard__line'}/>
            <ScoreboardMenu/>
            <ScoreboardTable/>
            <div className="scoreboard__btn" onClick={()=>dispatch(screenSetter('start'))}>Back</div>
        </div>
    );
}

export default Scoreboard;