import React from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames";

const SymbolArrow = ({turn}) => {
    const {power} = useSelector(state => state);
    return (
        <div className={classNames(`button__symbol button__symbol--${turn}`, {[`button__symbol--${turn}--inactive`] : !power})}/>
    );
}

export default SymbolArrow;