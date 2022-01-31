import React from 'react';
import ScoreboardControls from "./ScoreboardControls";

const ScoreboardMenu = () => {
    return (
        <div className="scoreboard__menu">
            <div className="scoreboard__selector">
                <p className='scoreboard__lead scoreboard__text'>SIZE</p>
                <ScoreboardControls type={'size'}/>
            </div>
            <div className="scoreboard__selector">
                <p className='scoreboard__lead scoreboard__text'>MODE</p>
                <ScoreboardControls type={'mode'}/>
            </div>
            <div className="scoreboard__selector">
                <p className='scoreboard__lead scoreboard__text'>STYLE</p>
                <ScoreboardControls type={'style'}/>
            </div>
        </div>
    );
}

export default ScoreboardMenu;