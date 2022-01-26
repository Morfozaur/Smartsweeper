import React, {useState} from 'react';
import RecordLetter from "./RecordLetter";
import {playClick} from "../../../logic/synth";
import {useDispatch} from "react-redux";
import {resolveSetter} from "../../../redux/actions/allActions";

const ModalRecord = () => {
    const [name, setName] = useState([65, 65, 65]);
    const dispatch = useDispatch();
    return (
        <div className={'board__record board__modal'}>
            <p className="board__header"> You set a new record!</p>
            <p className="board__text">Enter your initials:</p>
            <div className="board__name">
                <RecordLetter letters={name} setLetters={setName} idx={0}/>
                <RecordLetter letters={name} setLetters={setName} idx={1}/>
                <RecordLetter letters={name} setLetters={setName} idx={2}/>
            </div>
            <div className="board__buttons">
                <div className="board__btn"
                     onClick={()=> dispatch(resolveSetter('win'))}
                     onMouseEnter={playClick}>OK</div>
            </div>
        </div>
    );
}

export default ModalRecord;