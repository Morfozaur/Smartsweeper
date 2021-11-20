import React from 'react';
import Field from "./elements/Field";
import {useSelector} from "react-redux";

const Board = () => {
    const board = useSelector(state => state.board);
    return (
        <div className='board'>
            {board.map((col, i) => {
                return (
                    <div key={`col-${i}`} className='board__col'>
                        {col.map((row, i) => <Field key={`row-${i}`} row={row}/>)}
                    </div>
                )
            })}
        </div>
    );
}

export default Board;