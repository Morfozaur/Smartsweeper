import React from 'react';
import Button from "../elements/menu/Button";
import Slider from "../elements/menu/Slider";
import {boarding} from "../../logic/boarding";
import {useDispatch, useSelector} from "react-redux";
import {boardSetter, boardSizeSetter, flagModeSetter} from "../../redux/actions/allActions";
import Disc from "../elements/menu/Disc";

const Menu = () => {
    const dispatch = useDispatch();
    const {flagMode, boardSize} = useSelector(state =>state)

    const boardPool = [10, 15, 20]

    const smartTrigger = () => {
        dispatch(flagModeSetter(!flagMode))
    };

    const setBoardSize = (size) => dispatch(boardSizeSetter(size))

    const setBoard = () => {
        const newBoard = boarding(boardSize);
        dispatch(boardSetter(newBoard));
    }

    return (
        <div className='menu'>
            <div className="menu__settings">
                <Disc value={boardSize} setter={setBoardSize} pool={boardPool}/>
                <Slider active={flagMode} func={smartTrigger}/>
            </div>
            <Button addClass='menu__button' text='Start' func={setBoard}/>
        </div>
    );
}

export default Menu;