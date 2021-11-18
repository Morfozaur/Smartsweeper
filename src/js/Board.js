import React from 'react';

const Board = ({board}) => {
    return (
        <div className='board'>
            {board.map((row, i) => {
                return (
                    <div key={`col-${i}`} className='board__col'>
                        {row.map((col, i) => {
                            return (
                                <div key={`row-${i}`} className='board__field'/>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Board;