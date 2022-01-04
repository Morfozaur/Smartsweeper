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

    let selectClass = 'button__symbol button__symbol--flag';
    if (!selectMode) selectClass += ' button__symbol--inactive'
    return (
        <div className='menu'>
            <div className="menu__section">
                <Label text={'Check'}/>
                <div className="menu__controls">
                    <Button func={smartTrigger}
                            symbol={'flag'}
                            addClass={selectClass}/>
                </div>
            </div>
            <Disc value={boardSize}
                  setter={setBoardSize}
                  pool={boardPool}
                  type={'Size'}/>
        </div>
    );
}

export default ControlPanel;