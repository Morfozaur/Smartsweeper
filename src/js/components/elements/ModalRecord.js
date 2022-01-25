import React from 'react';
import Symbol from "./Symbol";
import RecordLetter from "./RecordLetter";

const ModalRecord = ({name, setName}) => {
    return (
        <div className={'board__record'}>
            <p className="board__header"> New record!</p>
            <p className="board__text">Enter your initials:</p>
            <div className="board__name">
                <RecordLetter letters={name} setLetters={setName} idx={0}/>
                <RecordLetter letters={name} setLetters={setName} idx={1}/>
                <RecordLetter letters={name} setLetters={setName} idx={2}/>
            </div>
        </div>
    );
}

export default ModalRecord;