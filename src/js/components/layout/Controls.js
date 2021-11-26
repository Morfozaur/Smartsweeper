import React from 'react';
import Menu from "../sections/Menu";

const Controls = () => {
    return (
        <div className='controls'>
            <div className="controls__insert">
                <div className="controls__side"/>
                <div className="controls__center">
                    <div className="controls__menu">
                        <Menu/>
                    </div>
                    <div className="controls__decor"/>
                </div>
                <div className="controls__side controls__side--right"/>
            </div>
        </div>
    );
}

export default Controls;