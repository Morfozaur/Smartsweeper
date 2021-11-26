import React from 'react';

const Symbol = ({type}) => {
    const symbols = {
        flag: 'flag',
        bomb: 'bomb'
    }

    return (
        <i className={`fas fa-${symbols[type]}`}/>
    );
}

export default Symbol;