import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resultCalc} from "../../../logic/baseFunctions";
import {playClick} from "../../../logic/synth";
import {thunkBoard} from "../../../redux/actions/thunkBoard";
import {screenSetter} from "../../../redux/actions/allActions";

const GameOver = () => {
    const { time } = useSelector(state => state.result);
    const dispatch = useDispatch();

    return (
        <div className={'board__modal'}>
            <p className={'board__header'}>GAME OVER</p>
            <p className={'board__text'}>BOOM! You loose! Bomb exploded in your hands after <span className={'board__bolded'}>{resultCalc(time)}</span>!</p>

            <div className="board__buttons">
                <div className="board__btn" 
                     onClick={() => dispatch(thunkBoard())}
                     onMouseEnter={playClick}>Try Again</div>
                <div className="board__btn"
                     onClick={()=>dispatch(screenSetter('start'))}
                     onMouseEnter={playClick}>Main Menu</div>
            </div>
        </div>
    );
}

export default GameOver;