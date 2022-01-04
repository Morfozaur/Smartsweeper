import React from 'react';

const SymbolArrow = ({turn, color}) => {
    const style = {width: 0, height: 0}

    const transparent = `5px solid transparent`;
    const colorful = `5px solid ${color}`;

    // eslint-disable-next-line default-case
    switch (turn)  {
        case 'left':
            style.borderTop = transparent;
            style.borderBottom = transparent;
            style.borderRight = colorful;
            break;
        case 'right':
            style.borderTop = transparent;
            style.borderBottom = transparent;
            style.borderLeft = colorful;
            break;
        case 'up':
            style.borderBottom = colorful;
            style.borderLeft = transparent;
            style.borderRight = transparent;
            break;
        case 'down':
            style.borderTop = colorful;
            style.borderLeft = transparent;
            style.borderRight = transparent;
            break;
    }

    const arrow = {
        left: 'borderRightWidth',
        right: 'borderLeftWidth',
        up: 'borderDownWidth',
        down: 'borderTopWidth',
    }
    style[arrow[turn]] = 5 * 1.7;
    return (
        <div className={`button__symbol button__symbol--${turn}`} style={style}/>
    );
}

export default SymbolArrow;