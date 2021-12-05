import React, {useState} from 'react';
import Button from "../elements/Button";
import Slider from "../elements/Slider";
import {boarding} from "../../logic/boarding";
import Arrow from "../elements/Arrow";
import {useDispatch, useSelector} from "react-redux";
import {boardSetter, flagModeSetter} from "../../redux/actions/allActions";
import Disk from "../elements/Disk";

const Menu = () => {
    const [size, setSize] = useState(0);
    const dispatch = useDispatch();
    const {flagMode, mines} = useSelector(state =>state)

    console.log(mines)

    const sizeArr = [10, 15, 20]
    const smartTrigger = () => {
        dispatch(flagModeSetter(!flagMode))
    };

    const setBoard = () => {
        const newBoard = boarding(sizeArr[size]);
        dispatch(boardSetter(newBoard));
    }



    return (
        <div className='menu'>
            <div className="menu__settings">
                <Disk setSize={setSize} size={size} sizeArr={sizeArr}/>
                <Slider active={flagMode} func={smartTrigger}/>
            </div>
            <Button addClass='menu__button' text='Start' func={setBoard}/>
        </div>
    );
}

export default Menu;