import React from 'react';
import Board from "./Board";

const Screen = () => {
    return (
        <div className='screen'>
            <div className="screen__display">
                <div className="screen__frame"/>
                <div className="screen__frame screen__frame--second"/>
                <Board/>
            </div>

        </div>
    );
}

export default Screen;