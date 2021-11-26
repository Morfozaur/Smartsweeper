import React from 'react';
import Board from "./Board";

const Panel = () => {
    return (
        <div className="panel">
            <div className="panel__shadow"/>
            <div className="panel__insert">
                <div className='panel__screen'>
                    <div className="panel__display">
                        <div className="panel__frame"/>
                        <div className="panel__frame panel__frame--second"/>
                        <Board/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Panel;