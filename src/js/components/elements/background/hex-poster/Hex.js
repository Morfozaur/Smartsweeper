import React from 'react';

const Hex = ({terrain}) => {
    return (
        <div className={`hexplorist__hex hexplorist__hex--${terrain}`}>
            <div className={"hexplorist__shape"}/>
        </div>
    );
}

export default Hex;