import React from 'react';
import Field from "./elements/Field";
import {useSelector} from "react-redux";

const Board = () => {
    const board = useSelector(state => state.board);
    return (
        <div className='board'>
            {board.map((col, c) => {
                return (
                    <div key={`col-${c}`} className='board__col'>
                        {col.map((row, r) => {
                            return <Field key={`row-${r}`} field={row} col={c} row={r}/>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Board;