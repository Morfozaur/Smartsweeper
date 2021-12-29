import React, {useCallback, useEffect} from 'react';
import Field from "../elements/Field";
import {useDispatch, useSelector} from "react-redux";
import {boardSetter, reloadSetter, resolveSetter} from "../../redux/actions/allActions";
import {Modal} from "../elements/Modal";
import {revealAll} from "../../logic/revealAll";
import {playWin} from "../../logic/synth";

const Board = () => {
    const dispatch = useDispatch();
    const {board, reload, mines, fieldsCounter, result} = useSelector(state => state);
    const [remain, resolve] = [mines.remain, result.resolve];
    const {left, check} = fieldsCounter;

    const winChecker = useCallback(async () => {
        await revealAll();
        playWin();
        setTimeout(() => dispatch(resolveSetter('win')), 2000);
    },[dispatch]);

    useEffect(()=> {
        (async function() {
            if (resolve === false) {
                if (remain === 0 || left === check) {
                    dispatch(resolveSetter('waiting'));
                    await winChecker();
                }
            }
        })()
    }, [resolve, check, dispatch, left, remain, winChecker])


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
            {resolve === 'win' && <Modal type={'win'}/>}
            {resolve === 'over' && <Modal type={'over'}/>}
        </div>
    );
}

export default Board;