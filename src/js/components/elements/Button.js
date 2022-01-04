import React from 'react';
import SymbolArrow from "./SymbolArrow";
import Symbol from "./Symbol";

const Button = ({symbol, color = `#FAEBD7`, func}) => {
    const arrow = (symbol === 'left' || symbol === 'right');
    return (
        <div className='button'>
            <div className='button__center' onClick={func}>
                {arrow === false && <Symbol type={symbol}/>}
                {arrow && <SymbolArrow color={color} turn={symbol}/>}
            </div>
        </div>
    );
}

export default Button;