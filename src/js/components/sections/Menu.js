import React from 'react';
import Button from "../elements/menu/Button";
import Slider from "../elements/menu/Slider";
import {boarding} from "../../logic/boarding";
import {useDispatch, useSelector} from "react-redux";
import {
    boardSetter,
    boardSizeSetter,
    selectModeSetter,
    minesSetter,
    totalFieldsSetter, screenSetter
} from "../../redux/actions/allActions";
import Disc from "../elements/menu/Disc";
import {playStart} from "../../logic/synth";

const Menu = () => {
    const dispatch = useDispatch();
    const {selectMode, boardSize} = useSelector(state =>state)

    const boardPool = [10, 15, 20];

    const smartTrigger = () => {
        dispatch(selectModeSetter(!selectMode))
    };

    const setBoardSize = (size) => dispatch(boardSizeSetter(size))

    const setBoard = async () => {
        const mines = Math.ceil(Math.pow(boardSize, 2) * ((2 + boardSize) /100))
        const newBoard = boarding(boardSize, mines);
        dispatch(totalFieldsSetter({total: Math.pow(boardSize, 2), check: mines}))
        dispatch(boardSetter(newBoard));
        dispatch(minesSetter({total: mines, remain: mines, flagged: 0}));
        dispatch(screenSetter('board'));
        await playStart();
    }

    return (
        <div className='menu'>
            <div className="menu__settings">
                <Disc value={boardSize}
                      setter={setBoardSize}
                      pool={boardPool}
                      type={'Size'}/>
                <Slider active={selectMode} func={smartTrigger}/>
            </div>
            <Button addClass='menu__button' text='Start' func={setBoard}/>
        </div>
    );
}

export default Menu;