import React from 'react';

const Plate = ({rotation, pool}) => {

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
                    return <p key={`p${arc}-${num}-${idx}`}
                              className='disc__number'
                              style={styles}>{num}</p>
                })}
            </div>
        </div>
    );
}

export default Plate;