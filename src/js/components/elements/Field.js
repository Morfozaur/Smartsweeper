import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../logic/reveal";
import classNames from "classnames";
import {
    selectMineSetter,
    reloadSetter,
    unselectMineSetter,
    addFlagSetter,
    removeFlagSetter, revealFieldSetter, resolveSetter, detectorSetter
} from "../../redux/actions/allActions";
import Symbol from "./Symbol";
import {playBomb, playFlag, playReveal} from "../../logic/synth";
import {revealAll} from "../../logic/revealAll";

const Field = ({row, col, field}) => {
    const dispatch = useDispatch();
    const {board, selectMode, mines, result: {resolve}, gameplay: {style}} = useSelector(state => state);
    const {adj, bomb, visible, flag, question} = field;

    const fieldClass = {
        revClass: 'board__field--reveal',
        adjClass: 'board__field--adj',
        bombClass: 'board__field--bombed',
        flagClass: 'board__field--flagged',
        questionClass: 'board__field--question',
    }

    const action = async () => {
        if (selectMode === false && !visible) {
            if (!bomb) await playReveal();
            if (board[col][row].flag) {
                board[col][row].flag = false;
                dispatch(removeFlagSetter())
            }
            if (adj === 0 && !bomb) {
                await reveal(col, row, true);
            } else {
                dispatch(revealFieldSetter());
                board[col][row].visible = true;
                if (bomb) {
                    dispatch(resolveSetter('waiting'));
                    await playBomb();
                    await revealAll();
                    setTimeout(()=> {
                        dispatch(resolveSetter('over'));
                    }, 2000)
                }
            }
        } else if (selectMode) {
            if (board[col][row].visible === false) {
                await playFlag();
                const {flag, question} = board[col][row]
                let fieldCase = 'neutral';
                if (flag) fieldCase = 'flag';
                if (question) fieldCase = 'question';
                switch (fieldCase) {
                    case "neutral":
                        if (mines.flagged < mines.total) {
                            board[col][row].flag = true;
                            if (board[col][row].bomb) dispatch(unselectMineSetter())
                            dispatch(addFlagSetter())
                        } else {
                            board[col][row].question = true;
                        }
                        break;
                    case "flag":
                        board[col][row].flag = false;
                        board[col][row].question = true;
                        if (board[col][row].bomb) dispatch(selectMineSetter())
                        dispatch(removeFlagSetter())
                        break;
                    case "question":
                        board[col][row].question = false;
                        break;
                    default:
                        break;
                }
            }
        }
        dispatch(reloadSetter(true));
    };


    const detect = () => {
        if (style === 'detector' && visible && !resolve) dispatch(detectorSetter(adj));
    }

    const detectorReset = () => {
        if (style === 'detector' && visible && !resolve) dispatch(detectorSetter(0))
    };

    const click = async () => {
        if (!resolve) {
            if (!bomb && style === 'detector') dispatch(detectorSetter(adj));
            await action();
        }
    }

    const {bombClass, revClass, flagClass, questionClass} = fieldClass;
    const classTypes = {
        revealed: visible && !bomb,
        flagged: !visible && flag,
        question: !visible && question,
        bombed: visible && bomb,
    }
    const fieldTypes = {
        number: visible && adj && !bomb && (style === 'classic' || resolve),
        color: visible && adj && !bomb && (style === 'colors' && !resolve),
        revealed: adj > 0 && !bomb && visible && (style === 'classic' || resolve),
        flagged: !visible && flag,
        question: !visible && question,
        bombed: bomb && visible
    }

    return (
        <div className={
            classNames(
                'board__field',
                {[revClass]: classTypes.revealed},
                {[flagClass]: classTypes.flagged},
                {[questionClass]: classTypes.question},
                {[bombClass]: classTypes.bombed},
                {[`board__field--color board__field--b${adj}`]: fieldTypes.color})}
             onClick={click}
             onMouseEnter={detect}
             onMouseLeave={detectorReset}>


            <div className={
                classNames("board__symbol", {[`board__symbol--n${adj}`]: fieldTypes.number})}>
                {fieldTypes.revealed && <>{adj}</>}
                {fieldTypes.flagged && <Symbol type={'flag'}/>}
                {fieldTypes.question && <Symbol type={'question'}/>}
                {fieldTypes.bombed && <Symbol type={'bomb'}/>}
            </div>
        </div>
    );
}

export default Field;