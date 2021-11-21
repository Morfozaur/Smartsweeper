import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../logic/reveal";
import classNames from "classnames";
import {reloadSetter} from "../../redux/actions/allActions";
const Field = ({row, col, field}) => {
    const dispatch = useDispatch();
    const board = useSelector(state => state.board);

    const color = {
        rev: 'board__field--reveal',
        adj: 'board__field--adj',
        bomb: 'board__field--bombed'
    }

    const {adj, bomb, visible} = field;
    const action = async () => {
        if (adj === 0 && !bomb) {
            await reveal(col, row, true);
        } else if(adj > 0 && !bomb) {
            board[col][row].visible = true;
        } else {
            board[col][row].visible = true;
            console.log('boom!')
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