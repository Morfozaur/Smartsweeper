import React from 'react';
import Symbol from "../elements/Symbol";
import SymbolArrow from "../elements/SymbolArrow";
import ScoreboardMenu from "../elements/ScoreboardMenu";

const Scoreboard = () => {
    console.log(localStorage)
    const x = [
        {a:'sss', b:'10h', c:100},
        {a:'sss', b:'10h', c:100},
        {a:'sss', b:'10h', c:100},
        {a:'sss', b:'10h', c:100},
        {a:'sss', b:'10h', c:100},
    ]
    return (
        <div className='scoreboard gui'>
            <p className={'scoreboard__header scoreboard__text'}>HIGH SCORES</p>
            <hr className={'scoreboard__line'}/>
            <ScoreboardMenu/>
        </div>
    );
}

export default Scoreboard;