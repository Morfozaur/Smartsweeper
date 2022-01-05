import React from 'react';
import SymbolArrow from "./SymbolArrow";
import Symbol from "./Symbol";

const Button = ({symbol, func, addClass}) => {
    const arrow = (symbol === 'left' || symbol === 'right');
    return (
        <div className='button'>
            <div className='button__center' onClick={func}>
                {arrow === false && <Symbol type={symbol} addClass={addClass}/>}
                {arrow && <SymbolArrow turn={symbol}/>}
            </div>
        </div>
    );
}

export default Button;