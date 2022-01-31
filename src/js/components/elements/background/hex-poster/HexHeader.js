import React from 'react';

const HexHeader = () => {
    return (
        <div className="hexplorist__header hexplorist__frame">
            <h2 className="hexplorist__logo">
                <span className="hexplorist__logo hexplorist__logo--span">Hex</span>plorist
            </h2>
            <div className="hexplorist__lead">
                <p className='hexplorist__subtitle'>Adventure</p>
                <p className='hexplorist__subtitle'>RPG</p>
                <p className='hexplorist__subtitle'>Survival</p>
            </div>
        </div>
    );
}

export default HexHeader;