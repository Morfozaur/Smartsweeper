import React, {useState} from 'react';
import Button from "../Button";
import Plate from "./Plate";
import Label from "../Label";
import classNames from "classnames";
import {useSelector} from "react-redux";

const Disc = ({value, setter, pool, type, active, ico}) => {
    const [rotation, setRotation] = useState(0)
    const [currState, setCurrState] = useState(pool.findIndex(el => el === value));

    const {
        settings: {backlight, editable},
        gameplay: {mode, boardSize}} = useSelector(state => state);

    const available = active && backlight;
    const down = () => {
        if (available && editable) {
            let rotatingMod = 0;
            if (currState === 0) {
                if (type === 'Size' && mode === 'rotating') {
                    setCurrState(1);
                    setter(pool[1]);
                    rotatingMod += 1;
                } else {
                    setCurrState(pool.length - 1);
                    setter(pool[pool.length - 1]);
                }
            } else if (type === 'Mode' && boardSize === 20 && currState === 3) {
                setCurrState(1);
                setter(pool[1]);
                rotatingMod +=1;
            } else {
                const nextState = currState - 1
                setCurrState(nextState);
                setter(pool[nextState]);
            }
            setRotation(state => state - 1 - rotatingMod)
        }
    };
    const up = () => {
        if (available && editable) {
            let rotatingMod = 0;
            if (currState === pool.length - 1) {
                setCurrState(0);
                setter(pool[0]);
            } else if (type === 'Size' && mode === 'rotating' && currState === 1) {
                setCurrState(0);
                setter(pool[0]);
                rotatingMod += 1;
            } else if (type === 'Mode' && boardSize === 20 && currState === 1) {
                setCurrState(3);
                setter(pool[3]);
                rotatingMod += 1;
            } else {
                const nextState = currState + 1
                setCurrState(nextState);
                setter(pool[nextState]);
            }
            setRotation(state => state + 1 + rotatingMod)
        }
    };
    return (
        <div className='menu__section'>
            <Label text={type}/>
            <div className="menu__controls">
                <Button symbol={'left'} func={down}/>
                <div className={classNames('disc', {'disc--inactive': !available})}>
                    <div className="disc__container">
                        <Plate rotation={rotation} pool={pool} ico={ico}/>
                    </div>
                </div>
                <Button symbol={'right'} func={up}/>
            </div>
        </div>
    );
}

export default Disc;