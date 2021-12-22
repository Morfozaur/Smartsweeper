import React from 'react';
import ServicePanel from "../panels/ServicePanel";

const Front = () => {
    return (
        <div className='front'>
            <div className="front__insert">
                <div className="front__side front__side--left"/>
                <div className="front__center">
                    <div className="front__top"/>
                    <ServicePanel/>
                    <div className="front__bottom"/>
                </div>
                <div className="front__side front__side--right"/>
            </div>
        </div>
    );
}

export default Front;