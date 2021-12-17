import React from 'react';

const Label = ({text}) => {
    return (
        <div className='label'>
            <p className='label__text'>{text}</p>
            <div className="label__frame">
                <div className="label__pin label__pin--left"/>
                <div className="label__pin label__pin--right"/>
            </div>
        </div>
    );
}

export default Label;