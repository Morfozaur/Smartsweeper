import React from 'react';
import PosterBoard from "./PosterBoard";

const PosterSweeper = () => {
    return (
        <div className={'poster poster__right'}>
            <div className="poster__insert poster__insert--right">
                <div className="sweeper__header">
                    <h2 className='sweeper__logo'>
                       Smart<span className='sweeper__logo sweeper__logo--span'>Sweeper</span>
                    </h2>
                </div>
                <h2 className="sweeper__lead">Best Arcade Cabinet 2022!</h2>
                <div className="sweeper__group">
                    <p className={'sweeper__motto'}>Become a hero!</p>
                    <p className={'sweeper__motto sweeper__motto--medium'}>Become a combat engineer!</p>
                    <p className={'sweeper__motto sweeper__motto--large'}>Become a superhero combat engineer!</p>
                </div>
                <PosterBoard/>
                <ul className="sweeper__group">
                    <li className="sweeper__text">3 board sizes!</li>
                    <li className="sweeper__text">4 game modes!</li>
                    <li className="sweeper__text">4 detector styles!</li>
                    <li className="sweeper__text">313 hours of fun!</li>
                </ul>
            </div>
        </div>
    );
}

export default PosterSweeper;