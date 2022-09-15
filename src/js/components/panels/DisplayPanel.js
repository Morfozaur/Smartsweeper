import React from 'react';
import Board from "../screens/Board";
import Start from "../screens/Start";
import {useSelector} from "react-redux";
import Setup from "../screens/Setup";
import Scoreboard from "../screens/Scoreboard";
import About from "../screens/About";

const DisplayPanel = () => {
    const {screen, power} = useSelector(state => state);
    const screensList = {
        start: Start,
        board: Board,
        setup: Setup,
        score: Scoreboard,
        about: About
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
                        {power && <Screen/>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DisplayPanel;