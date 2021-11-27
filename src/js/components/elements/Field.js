import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../logic/reveal";
import classNames from "classnames";
import {checkMineSetter, reloadSetter, uncheckMineSetter} from "../../redux/actions/allActions";
import Symbol from "./Symbol";
const Field = ({row, col, field}) => {
    const dispatch = useDispatch();
    const {board, flagMode, mines} = useSelector(state => state);
    const {adj, bomb, visible, flag, question} = field;

    const fieldClass = {
        revClass: 'board__field--reveal',
        adjClass: 'board__field--adj',
        bombClass: 'board__field--bombed',
        flagClass: 'board__field--flagged',
        questionClass: 'board__field--question',
    }

    const action = async () => {
        if (flagMode === false) {
            if (adj === 0 && !bomb) {
                await reveal(col, row, true);
            } else {
                board[col][row].visible = true;
                if (bomb) console.log('boom!')
            }
        } else {
            console.log(board[col][row].flag)
            if (board[col][row].visible === false) {
                const {flag, question} = board[col][row]
                let fieldCase = 'neutral';
                if (flag) fieldCase = 'flag';
                if (question) fieldCase = 'question';
                switch (fieldCase) {
                    case "neutral":
                        if (mines.remain > 0) {
                            board[col][row].flag = true;
                            dispatch(checkMineSetter())
                        } else {
                            board[col][row].question = true;
                        }
                        break;
                    case "flag":
                        board[col][row].flag = false;
                        board[col][row].question = true;
                        dispatch(uncheckMineSetter())
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
    const {adjClass, bombClass, revClass, flagClass, questionClass} = fieldClass;
    return (
        <div className={
            classNames(
                'board__field',
                {[revClass]: visible && !adj && !bomb},
                {[adjClass]: visible && adj && !bomb},
                {[flagClass]: !visible && flag},
                {[questionClass]: !visible && question},
                {[bombClass]: visible && bomb}, )}
             onClick={action}>


            <div className="board__symbols">
                {(adj > 0 && !bomb && visible) && <>{adj}</>}
                {(!visible && flag) && <Symbol type={'flag'}/>}
                {(!visible && question) && <Symbol type={'question'}/>}
                {(bomb && visible) && <Symbol type={'bomb'}/>}
            </div>

        </div>
    );
}

export default Field;