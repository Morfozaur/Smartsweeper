import React from 'react';

const ScoreboardMenu = () => {
    return (
        <div className="scoreboard__menu">
            <div className="scoreboard__selector">
                <p className='scoreboard__lead scoreboard__text'>SIZE</p>
                <div className="scoreboard__controls">
                    <div className="scoreboard__button scoreboard__button--left"/>
                    <div className="scoreboard__option scoreboard__text">10</div>
                    <div className="scoreboard__button scoreboard__button--right"/>
                </div>
            </div>
            <div className="scoreboard__selector">
                <p className='scoreboard__lead scoreboard__text'>MODE</p>
                <div className="scoreboard__controls">
                    <div className="scoreboard__button scoreboard__button--left"/>
                    <div className="scoreboard__option scoreboard__text">Rotating</div>
                    <div className="scoreboard__button scoreboard__button--right"/>
                </div>
            </div>
            <div className="scoreboard__selector">
                <p className='scoreboard__lead scoreboard__text'>STYLE</p>
                <div className="scoreboard__controls">
                    <div className="scoreboard__button scoreboard__button--left"/>
                    <div className="scoreboard__option scoreboard__text">Detector</div>
                    <div className="scoreboard__button scoreboard__button--right"/>
                </div>
            </div>
        </div>
    );
}

export default ScoreboardMenu;