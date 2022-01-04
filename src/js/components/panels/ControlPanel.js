import React from 'react';
import Slider from "../elements/menu/Slider";
import {useDispatch, useSelector} from "react-redux";
import {
    boardSizeSetter,
    selectModeSetter,
} from "../../redux/actions/allActions";
import Disc from "../elements/menu/Disc";
import Label from "../elements/Label";
import Button from "../elements/Button";

const ControlPanel = () => {
    const dispatch = useDispatch();
    const {selectMode, boardSize} = useSelector(state =>state)

    const boardPool = [10, 15, 20];

    const smartTrigger = () => {
        dispatch(selectModeSetter(!selectMode))
    };

    const setBoardSize = (size) => dispatch(boardSizeSetter(size));


    return (
        <div className='menu'>
            <div className="menu__settings">
                <div className="switch">
                    <Label text={'Flag'}/>
                    <Button func={smartTrigger}/>
                </div>
                <Disc value={boardSize}
                      setter={setBoardSize}
                      pool={boardPool}
                      type={'Size'}/>
                <Slider active={selectMode} func={smartTrigger}/>
            </div>
        </div>
    );
}

export default ControlPanel;