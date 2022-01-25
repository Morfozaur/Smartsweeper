import React from 'react';
import Symbol from "../Symbol";

const RecordLetter = ({letters, setLetters, idx}) => {
    const nextLetter = () => {
        const currState = [...letters];
        if (letters[idx] === 90) currState[idx] = 65
        else currState[idx]++
        setLetters(currState)
    }

    const prevLetter = () => {
        const currState = [...letters];
        if (letters[idx] === 65) currState[idx] = 90
        else currState[idx]--
        setLetters(currState)
    };
    return (
        <div className="board__letter">
            <div onClick={nextLetter}>
                <Symbol type={'up'} addClass={'board__arrow board__arrow--up'}/>
            </div>
            {String.fromCharCode(letters[idx])}
            <div onClick={prevLetter}>
            <Symbol type={'down'} addClass={'board__arrow board__arrow--down'}/>
            </div>
        </div>
    );
}

export default RecordLetter;