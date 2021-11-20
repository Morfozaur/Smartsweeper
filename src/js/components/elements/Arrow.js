import React from 'react';

const Arrow = ({turn, size = 10, wide = false, color = `#D2BE96FF`, func}) => {

    const style = {width: 0, height: 0}

    const transparent = `${size}px solid transparent`;
    const colorful = `${size}px solid ${color}`;

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
    if (wide) style[arrow[turn]] = size * wide;
    return (
        <div className={`arrow--${turn}`} style={style} onClick={func}/>
    );
}

export default Arrow;