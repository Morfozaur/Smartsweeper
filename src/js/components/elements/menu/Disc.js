import React, {useState} from 'react';
import Button from "../Button";
import Plate from "./RotatingPlate";
import Label from "../Label";
import classNames from "classnames";
import {useSelector} from "react-redux";

const Disc = ({value, setter, pool, type, active}) => {
    const [rotation, setRotation] = useState(0)
    const [currState, setCurrState] = useState(pool.findIndex(el => el === value));

    const {backlight} = useSelector(state => state.settings);

    const available = active && backlight;
    const down = () => {
        if (available) {
            if (currState === 0) {
                setCurrState(pool.length - 1);
                setter(pool[pool.length - 1]);
            } else {
                const nextState = currState - 1
                setCurrState(nextState);
                setter(pool[nextState]);
            }
            setRotation(state => state - 1)
        }
    };
    const up = () => {
        if (available) {
            if (currState === pool.length - 1) {
                setCurrState(0);
                setter(pool[0]);
            } else {
                const nextState = currState + 1
                setCurrState(nextState);
                setter(pool[nextState]);
            }
            setRotation(state => state + 1)
        }
    };
    return (
        <div className='menu__section'>
            <Label text={type}/>
            <div className="menu__controls">
                <Button symbol={'left'} func={down}/>
                <div className={classNames('disc', {'disc--inactive': !available})}>
                    <div className="disc__container">
                        <Plate rotation={rotation} pool={pool}/>
                    </div>
                </div>
                <Button symbol={'right'} func={up}/>
            </div>
        </div>
    );
}

export default Disc;