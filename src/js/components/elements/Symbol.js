import React from 'react';
import classNames from "classnames";

const Symbol = ({type, addClass}) => {
    const symbols = {
        flag: 'flag',
        bomb: 'bomb',
        classic: 'bomb',
        question: 'question',
        power: 'power-off',
        eye: 'eye',
        smart: 'brain',
        rotating: 'sync',
        rise: 'angle-double-up',
        colors: 'palette',
        detector: 'tachometer-alt',
        scanner: 'broadcast-tower',
        up: 'caret-up',
        down: 'caret-down',
    }

    return (
        <i className={classNames(`symbol fas fa-${symbols[type]}`, {[addClass]: addClass})}/>
    );
}

export default Symbol;