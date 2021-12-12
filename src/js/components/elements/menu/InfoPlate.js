import React from 'react';

const InfoPlate = ({text}) => {
    return (
        <div className='disc__info'>
            <p className='disc__text'>{text}</p>
            <div className="disc__frame">
                <div className="disc__pin disc__pin--left"/>
                <div className="disc__pin disc__pin--right"/>
            </div>
        </div>
    );
}

export default InfoPlate;