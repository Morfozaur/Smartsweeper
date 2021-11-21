import React, {useEffect} from 'react';
import Field from "./elements/Field";
import {useDispatch, useSelector} from "react-redux";
import {boardSetter, reloadSetter} from "../redux/actions/allActions";

const Board = () => {
    const dispatch = useDispatch();
    const {board, reload} = useSelector(state => state);

    useEffect(()=> {
        if (reload) {
            dispatch(boardSetter(board));
            dispatch(reloadSetter(false));
        }
    }, [reload, dispatch, board])

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