import React, {useState} from 'react';
import Arrow from "../Arrow";
import Plate from "./RotatingPlate";
import InfoPlate from "./InfoPlate";

const Disc = ({value, setter, pool, type}) => {
    const [rotation, setRotation] = useState(0)
    const [currState, setCurrState] = useState(pool.findIndex(el => el === value));

    const down = () => {
        if (currState === 0) {
            setCurrState(pool.length - 1);
            setter(pool[pool.length - 1]);
        } else {
            const nextState = currState - 1
            setCurrState(nextState);
            setter(pool[nextState]);
        }
        setRotation(state => state - 1)
    };
    const up = () => {
        if (currState === pool.length - 1) {
            setCurrState(0);
            setter(pool[0]);
        } else {
            const nextState = currState + 1
            setCurrState(nextState);
            setter(pool[nextState]);
        }
        setRotation(state => state + 1)
    };
    return (
        <div className='disc'>
            <InfoPlate text={type}/>
            <div className="disc__controls">
                <Arrow turn={'left'} size={8} wide={1.7} func={down}/>
                <div className='disc__window'>
                    <div className="disc__container">
                        <Plate rotation={rotation} pool={pool}/>
                    </div>
                </div>
                <Arrow turn={'right'} size={8} wide={1.7} func={up}/>
            </div>
        </div>
    );
}

export default Disc;