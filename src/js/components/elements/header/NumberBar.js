import React from 'react';
import classNames from "classnames";

const NumberBar = ({active, top, left, right, bottom, rotate, addClass}) => {

    const barPosition = {}
    // if (top) barPosition.top = `${top}px`;
    // if (bottom) barPosition.bottom = `${bottom}px`;
    // if (left) barPosition.left = `${left}px`;
    // if (right) barPosition.right = `${right}px`;
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