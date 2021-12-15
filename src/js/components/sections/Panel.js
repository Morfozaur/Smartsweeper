import React from 'react';
import Board from "./screens/Board";
import Start from "./screens/Start";
import {useSelector} from "react-redux";

const Panel = () => {
    const {screen} = useSelector(state => state);
    const screensList = {
        start: Start,
        board: Board
    };

    const Screen = screensList[screen];
    return (
        <div className="panel">
            <div className="panel__shadow"/>
            <div className="panel__insert">
                <div className='panel__screen'>
                    <div className="panel__display">
                        <div className="panel__frame"/>
                        <div className="panel__frame panel__frame--second"/>
                        <Screen/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Panel;