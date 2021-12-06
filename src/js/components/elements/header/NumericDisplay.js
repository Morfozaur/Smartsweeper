import React from 'react';
import DigitalNumber from "./DigitalNumber";

const NumericDisplay = ({number}) => {
    return (
        <div className='numeric'>
            <DigitalNumber number={number[0]}/>
            <DigitalNumber number={number[1]}/>
        </div>
    );
}

export default NumericDisplay;