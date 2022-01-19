import React from 'react';
import ControlPanel from "../panels/ControlPanel";

const Controls = () => {
    return (
        <div className='controls'>
            <div className="controls__insert">
                <div className="controls__side controls__side--left"/>
                <div className="controls__center">
                    <div className="controls__menu">
                        <ControlPanel/>
                    </div>
                    <div className="controls__decor"/>
                </div>
                <div className="controls__side controls__side--right"/>
            </div>
        </div>
    );
}

export default Controls;