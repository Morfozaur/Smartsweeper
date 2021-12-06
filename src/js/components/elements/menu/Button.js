import React from 'react';
import classNames from "classnames";

const Button = ({text, func, addClass}) => {
    return (
        <button onClick={func} className={classNames('btn', {[addClass]: addClass})}>{text}</button>
    );
}

export default Button;