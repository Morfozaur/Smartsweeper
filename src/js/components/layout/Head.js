import React from 'react';
import Logo from "../elements/Logo";
import Screen from "../Screen";

const Head = () => {
    return (
        <div className='head'>
            <div className="head__insert">
                <div className="head__side head__side--left"/>
                <div className="head__center">
                    <div className="head__banner">
                        <Logo/>
                    </div>
                    <div className="head__main">
                        <div className="head__panel">
                            <Screen/>
                        </div>
                    </div>
                </div>
                <div className="head__side head__side--right"/>
            </div>
        </div>
    );
}

export default Head;