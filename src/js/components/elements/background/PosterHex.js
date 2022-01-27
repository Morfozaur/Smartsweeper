import React from 'react';

const PosterHex = () => {
    return (
        <div className={'poster poster__left'}>
            <div className="poster__insert poster__insert--left">
                <div className="poster__corner poster__corner--TL"/>
                <div className="poster__corner poster__corner--TR"/>
                <div className="poster__corner poster__corner--BL"/>
                <div className="poster__corner poster__corner--BR"/>
                <h2 className="hexplorist__logo"><span className="hexplorist__logo hexplorist__logo--span">Hex</span>plorist</h2>
            </div>
        </div>
    );
}

export default PosterHex;