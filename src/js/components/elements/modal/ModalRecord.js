import React, {useState} from 'react';
import RecordLetter from "./RecordLetter";
import {playClick} from "../../../logic/synth";
import {useDispatch, useSelector} from "react-redux";
import {resultCalc} from "../../../logic/baseFunctions";
import {recordSetter} from "../../../logic/recordSetter";

const ModalRecord = () => {
    const [name, setName] = useState([65, 65, 65]);
    const {time} = useSelector(state => state.result);
    const dispatch = useDispatch();

    const setRecord = () => {
        recordSetter(name);
        // dispatch(resolveSetter('win'))
    };

    return (
        <div className={'board__record board__modal'}>
            <p className="board__header"> You set a new record!</p>
            <p className={'board__header board__bolded'}>{resultCalc(time)}</p>
            <p className="board__text">Enter your initials:</p>
            <div className="board__name">
                <RecordLetter letters={name} setLetters={setName} idx={0}/>
                <RecordLetter letters={name} setLetters={setName} idx={1}/>
                <RecordLetter letters={name} setLetters={setName} idx={2}/>
            </div>
            <div className="board__buttons">
                <div className="board__btn"
                     onClick={setRecord}
                     onMouseEnter={playClick}>OK</div>
            </div>
        </div>
    );
}

export default ModalRecord;