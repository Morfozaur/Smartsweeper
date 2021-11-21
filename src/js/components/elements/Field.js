import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../logic/reveal";
import classNames from "classnames";
import {reloadSetter} from "../../redux/actions/allActions";
const Field = ({row, col, field}) => {
    const dispatch = useDispatch()
    const {board, reload} = useSelector(state => state)



    const action = async () => {
        if (field.adj === 0 && !field.bomb) {
            const data = [...board];
            await reveal(col, row, data, true);
            dispatch(reloadSetter(true))
        }
        // console.log('c:', col, 'r:', row, 'len:', board.length)
    };
    return (
        <div className={classNames('board__field', {'board__field--reveal': field.visible})} onClick={action}>
            {(field.adj> 0 && !field.bomb) && <>{field.adj}</>}
            {field.bomb && <i className="fas fa-bomb"/>}
        </div>
    );
}

export default Field;