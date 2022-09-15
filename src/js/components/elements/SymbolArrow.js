import React from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames";

const SymbolArrow = ({turn}) => {
    const {power, settings: {backlight, editable}} = useSelector(state => state);
    const lightOff = !power || !backlight || !editable;
    return (
        <div className={classNames(`button__symbol button__symbol--${turn}`,
            {[`button__symbol--${turn}--inactive`] : lightOff})}/>
    );
}

export default SymbolArrow;