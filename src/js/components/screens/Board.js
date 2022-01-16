import React, {useCallback, useEffect, useRef, useState} from 'react';
import Field from "../elements/Field";
import {useDispatch, useSelector} from "react-redux";
import {boardSetter, reloadSetter, resolveSetter} from "../../redux/actions/allActions";
import {Modal} from "../elements/Modal";
import {revealAll} from "../../logic/revealAll";
import {playWin} from "../../logic/synth";
import Detector from "../elements/Detector";

const Board = () => {
    const [rotateStage, setRotateStage] = useState(0);
    const {
        board, reload,
        mines : {remain},
        fieldsCounter: {left, check},
        result: {resolve},
        gameplay: {style, mode}} = useSelector(state => state);
    const intervalRef = useRef(null);

    const dispatch = useDispatch();

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

    useEffect(()=> {
        if (!resolve) {
            intervalRef.current = setInterval(()=> {
                setRotateStage(state => state + 1)
            }, 5000)
            return () => clearInterval(intervalRef.current)
        }
    }, [resolve])

    useEffect(()=> {
       if (mode === 'rotating' && resolve === 'waiting') {
           setRotateStage(stage => (stage % 4 === 0) ? stage : stage + (4 - (stage % 4)))
           clearInterval(intervalRef.current);
           intervalRef.current = null;
       }
    },[mode, resolve])

    const rotateStyle = (mode === 'rotating') ? { transform: `rotate(${rotateStage * 90}deg)` } : {}

    return (
        <>
            <div className='board' style={rotateStyle}>
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
            {style === 'detector' && <Detector/>}
        </>
    );
}

export default Board;