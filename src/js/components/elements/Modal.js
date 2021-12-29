import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resultCalc} from "../../logic/baseFunctions";
import {playClick} from "../../logic/synth";
import {thunkBoard} from "../../redux/actions/thunkBoard";
import {minesSetter, screenSetter} from "../../redux/actions/allActions";
import {defaultMines} from "../../redux/reducers/minesReducer";
import Symbol from "./Symbol";

export const Modal = ({type}) => {
    const [visibility, setVisibility] = useState(1);
    const { time } = useSelector(state => state.result);
    const dispatch = useDispatch();

    const mainMenu = () => {
        dispatch(minesSetter(defaultMines));
        dispatch(screenSetter('start'));
    };

    const header = {
        win: 'YOU WIN!',
        over: 'GAME OVER'
    }
    const text = {
        win: 'EXCELLENT! You cleared the board in',
        over: 'BOOM! You loose! Bomb exploded in your hands after'
    }

    const opStyle = {opacity: visibility};
    const bgStyle = {
        backgroundColor: `rgba(250, 235, 215, ${visibility})`,
        border: `2px solid rgba(210, 190, 150, ${visibility})`};

    return (
        <div className={'board__modal'} style={bgStyle}>
            <p className={'board__header'} style={opStyle}>{header[type]}</p>
            <p className={'board__text'} style={opStyle}>{text[type]} <span className={'board__bolded'}>{resultCalc(time)}</span>!</p>

            <div className="board__buttons" style={opStyle}>
                <div className="board__btn"
                     onClick={() => dispatch(thunkBoard())}
                     onMouseEnter={playClick}>Try Again</div>
                <div className="board__btn"
                     onClick={mainMenu}
                     onMouseEnter={playClick}>Main Menu</div>
            </div>
            <div className="board__preview"
                 onMouseEnter={()=>setVisibility(.2)}
                 onMouseLeave={()=>setVisibility(1)}>
                <Symbol type={'eye'}/>
            </div>
        </div>
    );
}