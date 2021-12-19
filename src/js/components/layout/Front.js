import React from 'react';
import Service from "../sections/Service";

const Front = () => {
    return (
        <div className='front'>
            <div className="front__insert">
                <div className="front__side front__side--left"/>
                <div className="front__center">
                    <div className="front__top"/>
                    <Service/>
                    <div className="front__bottom"/>
                </div>
                <div className="front__side front__side--right"/>
            </div>
        </div>
    );
}

export default Front;