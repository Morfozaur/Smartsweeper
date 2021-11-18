import React from 'react';
import classNames from "classnames";

const Board = ({board}) => {
    return (
        <div className='board'>
            {board.map((col, i) => {
                return (
                    <div key={`col-${i}`} className='board__col'>
                        {col.map((row, i) => {
                            return (
                                <div key={`row-${i}`} className={classNames('board__field', {'board__field--bombed': row.bomb})}/>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Board;