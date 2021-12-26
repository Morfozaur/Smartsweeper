import React from 'react';
import {useSelector} from "react-redux";
import {resultCalc} from "../../../logic/baseFunctions";

const GameOver = () => {
    const { time } = useSelector(state => state.result);
    return (
        <div className={'board__modal'}>
            <p className={'board__header'}>GAME OVER</p>
            <p className={'board__text'}>BOOM! You loose! Bomb exploded in your hands after <span className={'board__bolded'}>{resultCalc(time)}</span>!</p>

            <div className="board__buttons">
                <div className="board__btn">Try Again</div>
                <div className="board__btn">Main Menu</div>
            </div>
        </div>
    );
}

export default GameOver;