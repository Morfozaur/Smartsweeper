import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    boardSizeSetter, modeSetter,
    selectModeSetter, styleSetter,
} from "../../redux/actions/allActions";
import Disc from "../elements/menu/Disc";
import Label from "../elements/Label";
import Button from "../elements/Button";

const ControlPanel = () => {
    const dispatch = useDispatch();
    const {
        selectMode,
        power,
        result: {resolve},
        settings: {sizeActive},
        gameplay: {boardSize, mode, style}
    } = useSelector(state => state)

    const boardPool = [10, 15, 20];
    // const modePool = ['classic', 'rotating', 'smart', 'rise'];
    const modePool = ['C', 'R', 'S', 'G'];
    // const stylePool = ['classic', 'colors', 'meter', 'scanner'];
    const stylePool = ['C', 'K', 'M', 'S'];

    const smartTrigger = () => {
        if (power && !resolve) dispatch(selectModeSetter(!selectMode))
    };

    const setBoardSize = (size) => dispatch(boardSizeSetter(size));
    const setMode = (size) => dispatch(modeSetter(size));
    const setStyle = (size) => dispatch(styleSetter(size));

    let selectClass = 'button__symbol button__symbol--flag';
    if (!selectMode || !power) selectClass += ' button__symbol--inactive';
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
                  active={sizeActive}
                  type={'Size'}/>
            <Disc value={mode}
                  setter={setMode}
                  pool={modePool}
                  active={sizeActive}
                  type={'Mode'}/>
            <Disc value={style}
                  setter={setStyle}
                  pool={stylePool}
                  active={sizeActive}
                  type={'Style'}/>
        </div>
    );
}

export default ControlPanel;