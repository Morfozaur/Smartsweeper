import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reveal} from "../../logic/reveal";

const Field = ({row, col, field}) => {
    const dispatch = useDispatch();
    const board = useSelector(state => state.board)

    useEffect(()=> {

    }, [board])

    const action = () => {
        if (field.adj === 0 && !field.bomb) {
            reveal(col, row)
        }
        console.log('c:', col, 'r:', row)
    };
    return (
        <div className={'board__field'} onClick={action}>
            {(field.adj> 0 && !field.bomb) && <>{field.adj}</>}
            {field.bomb && <i className="fas fa-bomb"/>}
        </div>
    );
}

export default Field;