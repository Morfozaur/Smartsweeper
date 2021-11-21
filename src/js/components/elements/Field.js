import React from 'react';
import {useDispatch} from "react-redux";
import {reveal} from "../../logic/reveal";
import classNames from "classnames";
import {reloadSetter} from "../../redux/actions/allActions";
const Field = ({row, col, field}) => {
    const dispatch = useDispatch();

    const action = async () => {
        if (field.adj === 0 && !field.bomb) {
            await reveal(col, row, true);
            dispatch(reloadSetter(true));
        }
    };
    return (
        <div className={classNames('board__field', {'board__field--reveal': field.visible})} onClick={action}>
            {(field.adj> 0 && !field.bomb) && <>{field.adj}</>}
            {field.bomb && <i className="fas fa-bomb"/>}
        </div>
    );
}

export default Field;