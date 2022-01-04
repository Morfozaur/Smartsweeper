import React from 'react';
import classNames from "classnames";

const Symbol = ({type, addClass}) => {
    const symbols = {
        flag: 'flag',
        bomb: 'bomb',
        question: 'question',
        power: 'power-off',
        eye: 'eye'
    }

    return (
        <i className={classNames(`symbol fas fa-${symbols[type]}`, {[addClass]: addClass})}/>
    );
}

export default Symbol;