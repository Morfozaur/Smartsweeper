import React from 'react';
import Logo from "../elements/header/Logo";
import NumericDisplay from "../elements/header/NumericDisplay";
import {useSelector} from "react-redux";

const Banner = () => {
    const {total, remain} = useSelector(state => state.mines);
    let foundedArr = [null, null];
    let lastArr = [null, null];
    if (total) {
        const founded = `${total - remain}`;
        const last = `${total}`;
        foundedArr = founded > 9 ? [parseInt(founded.charAt(0)), parseInt(founded.charAt(1))] : [0, parseInt(founded)]
        lastArr = last > 9 ? [parseInt(last.charAt(0)), parseInt(last.charAt(1))] : [0, parseInt(last)]
    }

    return (
        <div className="banner">
            <NumericDisplay number={foundedArr}/>
            <Logo/>
            <NumericDisplay number={lastArr}/>
        </div>
    );
}

export default Banner;