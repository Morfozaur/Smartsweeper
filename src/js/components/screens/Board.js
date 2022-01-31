import React, {useCallback, useEffect, useRef, useState} from 'react';
import Field from "../elements/Field";
import {useDispatch, useSelector} from "react-redux";
import {boardSetter, reloadSetter, resolveSetter} from "../../redux/actions/allActions";
import {Modal} from "../elements/modal/Modal";
import {revealAll} from "../../logic/revealAll";
import {playWin} from "../../logic/synth";
import Detector from "../elements/Detector";
import {moveMine} from "../../logic/smart/moveMine";
import {addMine} from "../../logic/smart/addMine";
import ModalRecord from "../elements/modal/ModalRecord";
import {recordChecker} from "../../logic/recordChecker";
import {loadScores} from "../../logic/loadScores";
import {sizeToLetter} from "../../logic/baseFunctions";

const Board = () => {
    const [rotateStage, setRotateStage] = useState(0);
    const {
        board, reload,
        mines : {remain},
        fieldsCounter: {left, check},
        result: {resolve},
        gameplay: {boardSize, style, mode}} = useSelector(state => state);
    const intervalRef = useRef(null);

    const dispatch = useDispatch();

    const winChecker = useCallback(async () => {
        await revealAll();
        playWin();
        setTimeout(() => {
            const scores = loadScores();
            const sizeKey = sizeToLetter(boardSize);
            const table = scores[sizeKey][mode][style];
            const checker = recordChecker(table)
            if (checker) {
                dispatch(resolveSetter('record'));
            } else {
                dispatch(resolveSetter('win'))
            }
        }, 2000);
    },[dispatch, boardSize, mode, style]);

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


    // ROTATING MODE
    useEffect(()=> {
        if (!resolve && mode === 'rotating') {
            intervalRef.current = setInterval(()=> {
                setRotateStage(state => state + 1)
            }, 5000)
            return () => clearInterval(intervalRef.current)
        }
    }, [mode, resolve])

    // SMART MODE
    useEffect(()=> {
        if (!resolve && mode === 'smart') {
            intervalRef.current = setInterval(()=> {
                moveMine();
            }, 5000)
            return () => clearInterval(intervalRef.current)
        }
    }, [mode, resolve])

    // RISE MODE
    useEffect(()=> {
        if (!resolve && mode === 'rise') {
            intervalRef.current = setInterval(()=> {
                    addMine();
            }, 10000)
            return () => clearInterval(intervalRef.current)
        }
    }, [mode, resolve])

    // CLEAR MODE INTERVALS
    useEffect(()=> {
        if (resolve === 'waiting' && mode !== 'classic') {
            if (mode === 'rotating') setRotateStage(stage => (stage % 4 === 0) ? stage : stage + (4 - (stage % 4)))
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
                {resolve === 'record' && <ModalRecord/>}
                {resolve === 'win' && <Modal type={'win'}/>}
                {resolve === 'over' && <Modal type={'over'}/>}
            </div>
            {style === 'detector' && <Detector/>}
        </>
    );
}

export default Board;