import React, {useState} from 'react';
import Symbol from "../elements/Symbol";

const Service = () => {
    const [power, setPower] = useState(false);

    return (
        <div className="front__middle">
            <div className="power">
                <button className="power__button">
                    <span className="power__front">
                        <span className='power__text'>
                            <Symbol type={'power'}/>
                        </span>
                    </span>
                    <span className="power__filler power__filler--top"/>
                    <span className="power__filler power__filler--bottom"/>
                </button>
            </div>
        </div>
    );
}

export default Service;