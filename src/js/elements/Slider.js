import React from 'react';
import classNames from "classnames";

const Slider = ({active, func}) => {
    return (
        <div className={classNames("form__slider", {'form__slider--active': active})}
             onClick={func}>
            <div className={classNames("form__ball", {'form__ball--active': active})}/>
        </div>
    );
}

export default Slider;