import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../logic/reveal";
import classNames from "classnames";
import {reloadSetter} from "../../redux/actions/allActions";
const Field = ({row, col, field}) => {
    const dispatch = useDispatch();
    const {board, flag} = useSelector(state => state);


    const color = {
        rev: 'board__field--reveal',
        adj: 'board__field--adj',
        bomb: 'board__field--bombed'
    }

    const {adj, bomb, visible} = field;
    const action = async () => {
        if (flag === false) {
            if (adj === 0 && !bomb) {
                await reveal(col, row, true);
            } else {
                board[col][row].visible = true;
                if (bomb) console.log('boom!')
            }
        } else {
            if (board[col][row].visible === false) board[col][row].flag = true
        }
        dispatch(reloadSetter(true));
    };
    return (
        <div className={
            classNames(
                'board__field',
                {[color.rev]: visible && !adj && !bomb},
                {[color.adj]: visible && adj && !bomb},
                {[color.bomb]: visible && bomb} )}
             onClick={action}>

            {(adj > 0 && !bomb && visible) &&
            <div className="board__symbols">{adj}</div>}

            {(bomb && visible) &&
            <div className="board__symbols">
                <i className="fas fa-bomb"/>
            </div>}

        </div>
    );
}

export default Field;