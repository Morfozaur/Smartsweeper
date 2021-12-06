import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            <div className="logo__plate">
                <h1 className='logo__text'>Smart<span className='logo__text logo__text--span'>Sweeper</span></h1>

                <div className="logo__border"/>
                <div className="logo__pin logo__pin--left"/>
                <div className="logo__pin logo__pin--right"/>
            </div>

        </div>
    );
}

export default Logo;