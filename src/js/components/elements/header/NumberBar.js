import React from 'react';
import classNames from "classnames";

const NumberBar = ({active, rotate, addClass}) => {

    const barPosition = {}
    if (rotate) barPosition.transform = `rotate(90deg)`;

    return (
        <div className={`bar bar__${addClass}`} style={barPosition}>
            <div className={classNames("bar__arrow", {'bar__lighten--left': active})}/>
            <div className={classNames("bar__center", {'bar__lighten': active})}/>
            <div className={classNames("bar__arrow bar__arrow--right", {'bar__lighten--right': active})}/>
        </div>
    );
}

export default NumberBar;