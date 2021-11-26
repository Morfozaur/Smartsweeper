import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../logic/reveal";
import classNames from "classnames";
import {reloadSetter} from "../../redux/actions/allActions";
import Symbol from "./Symbol";
const Field = ({row, col, field}) => {
    const dispatch = useDispatch();
    const {board, flagMode} = useSelector(state => state);
    const {adj, bomb, visible, flag} = field;

    const fieldClass = {
        revClass: 'board__field--reveal',
        adjClass: 'board__field--adj',
        bombClass: 'board__field--bombed',
        flagClass: 'board__field--flagged'
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
            if (board[col][row].visible === false) board[col][row].flag = !board[col][row].flag
        }
        dispatch(reloadSetter(true));
    };
    const {adjClass, bombClass, revClass, flagClass} = fieldClass;
    return (
        <div className={
            classNames(
                'board__field',
                {[revClass]: visible && !adj && !bomb},
                {[adjClass]: visible && adj && !bomb},
                {[flagClass]: !visible && flag},
                {[bombClass]: visible && bomb}, )}
             onClick={action}>


            <div className="board__symbols">
                {(bomb && visible) && <Symbol type={'bomb'}/>}
                {(adj > 0 && !bomb && visible) && <>{adj}</>}
                {(!visible && flag) && <Symbol type={'flag'}/>}
            </div>

        </div>
    );
}

export default Field;