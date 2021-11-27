import React from 'react';
import Logo from "../elements/Logo";
import NumericDisplay from "../elements/NumericDisplay";
import {useSelector} from "react-redux";

const Banner = () => {
    const {total, remain} = useSelector(state => state.mines);
    const state = useSelector(state => state);
    let foundedArr = [null, null];
    let lastArr = [null, null];
    if (total) {
        const founded = `${total - remain}`;
        const last = `${total - parseInt(founded)}`;
        foundedArr = founded > 9 ? [parseInt(founded.charAt(0)), parseInt(founded.charAt(1))] : [0, parseInt(founded)]
        lastArr = last > 9 ? [parseInt(last.charAt(0)), parseInt(last.charAt(1))] : [0, parseInt(last)]
        console.log(foundedArr, lastArr, last, founded)
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