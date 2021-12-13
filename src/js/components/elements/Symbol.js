import React from 'react';

const Symbol = ({type}) => {
    const symbols = {
        flag: 'flag',
        bomb: 'bomb',
        question: 'question'
    }

    return (
        <i className={`symbol fas fa-${symbols[type]}`}/>
    );
}

export default Symbol;