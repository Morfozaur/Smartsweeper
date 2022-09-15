import React from 'react';
import Symbol from "../Symbol";

const Plate = ({rotation, pool, ico}) => {

    const arc = 360 / pool.length;
    const rotateStyle = {
        transform: `rotate(${-arc * rotation}deg)`
    }
    return (
        <div className='disc__plate'>
            <div className='disc__background' style={rotateStyle}>
                {pool.map((num, idx) => {
                    const styles = {
                        transform: `translateX(-50%) rotate(${arc * idx}deg)`
                    }

                    return (
                        <div key={`p${arc}-${num}-${idx}`} className={'disc__number'} style={styles}>
                            {!ico && <>{num}</>}
                            {ico && <Symbol type={num} addClass={'symbol--disc'}/>}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Plate;