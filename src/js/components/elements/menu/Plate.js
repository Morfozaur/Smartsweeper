import React, {useEffect, useState} from 'react';

const Plate = ({value, pool}) => {
    const [rotateValue, setRotateValue] = useState(pool.findIndex(el => el === value))

    useEffect(()=> {
        setRotateValue(state => state + 1)
    }, [value])

    const arc = 360 / pool.length;
    const rotateStyle = {
        transform: `rotate(${-arc * rotateValue}deg)`
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