import React, {useEffect} from 'react';
import Field from "../elements/Field";
import {useDispatch, useSelector} from "react-redux";
import {boardSetter, reloadSetter} from "../../redux/actions/allActions";
import GameOver from "../elements/board/GameOver";

const Board = () => {
    const dispatch = useDispatch();
    const {board, reload, mines, fieldsCounter, result} = useSelector(state => state);

    if (mines.remain === 0 || fieldsCounter.left === fieldsCounter.check) {
        console.log('Winnie!')
    }


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
            {result.resolve === "over" && <GameOver/>}
        </div>
    );
}

export default Board;