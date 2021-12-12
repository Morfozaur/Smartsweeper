import React, {useState} from 'react';
import Arrow from "../Arrow";
import Plate from "./Plate";

const Disc = ({value, setter, pool}) => {
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
            <Arrow turn={'left'} size={8} wide={1.7} func={down}/>
            <div className='disc__window'>
                <Plate rotation={rotation} pool={pool}/>
            </div>
            <Arrow turn={'right'} size={8} wide={1.7} func={up}/>
        </div>
    );
}

export default Disc;