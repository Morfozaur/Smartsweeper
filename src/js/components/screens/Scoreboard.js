import React from 'react';

import ScoreboardMenu from "../elements/ScoreboardMenu";
import ScoreboardTable from "../elements/ScoreboardTable";
import {screenSetter} from "../../redux/actions/allActions";
import {useDispatch} from "react-redux";

const Scoreboard = () => {
    // const [scoreSize, setScoreSize] = useState(10);
    // const [scoreMode, setScoreMode] = useState('classic');
    // const [scoreStyle, setScoreStyle] = useState('classic');
    console.log(localStorage)
    const dispatch = useDispatch();
    const x = [
        {name:'sss', time:'10h', clicks:100},
        {name:'sss', time:'10h', clicks:100},
        {name:'sss', time:'10h', clicks:100},
        {name:'sss', time:'10h', clicks:100},
        {name:'sss', time:'10h', clicks:100},
    ]
    return (
        <div className='scoreboard gui'>
            <p className={'scoreboard__header scoreboard__text'}>HIGH SCORES</p>
            <hr className={'scoreboard__line'}/>
            <ScoreboardMenu/>
            <ScoreboardTable table={x}/>
            <div className="scoreboard__btn" onClick={()=>dispatch(screenSetter('start'))}>Back</div>
        </div>
    );
}

export default Scoreboard;