import React, {useState} from 'react';
import Button from "./elements/Button";
import Slider from "./elements/Slider";
import {boarding} from "../logic/boarding";
import Arrow from "./elements/Arrow";
import {useDispatch} from "react-redux";
import {boardSetter} from "../redux/actions/allActions";

const Menu = () => {
    const [smartSweepers, setSmartSweepers] = useState(false);
    const [size, setSize] = useState(0);
    const dispatch = useDispatch();

    const sizeArr = [3 ,10, 15, 20]
    const smartTrigger = () => {
        setSmartSweepers(state => !state);
    };

    const setBoard = () => {
        const newBoard = boarding(sizeArr[size]);
        dispatch(boardSetter(newBoard))
    }

    const down = (arr, setter) => setter(state => state === 0 ? arr.length - 1 : state - 1);
    const up = (arr, setter) => setter(state => state === arr.length - 1 ? 0 : state + 1);

    return (
        <div className='menu'>
            <div className="menu__settings">
                <Arrow turn={'left'} size={8} wide={1.7} func={()=>down(sizeArr, setSize)}/>
                <p>{sizeArr[size]}</p>
                <Arrow turn={'right'} size={8} wide={1.7} func={()=>up(sizeArr, setSize)}/>
                <Slider active={smartSweepers} func={smartTrigger}/>
            </div>
            <Button addClass='menu__button' text='Start' func={setBoard}/>
        </div>
    );
}

export default Menu;