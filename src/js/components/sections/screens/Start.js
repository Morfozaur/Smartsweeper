import React from 'react';

const Start = () => {

    const styles = {
        zIndex: 10,
        background: '#FAEBD7FF',
        padding: '2px',
        borderRadius: '3px',
        display: 'flex',
        color: 'red',
        fontFamily: 'serif'
    }
    return (
        <div className={'start'} style={styles}>
            <p>HELLO!</p>
        </div>
    );
}

export default Start;