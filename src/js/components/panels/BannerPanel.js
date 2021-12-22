import React from 'react';
import Logo from "../elements/header/Logo";
import NumericDisplay from "../elements/header/NumericDisplay";
import {useSelector} from "react-redux";
import Label from "../elements/Label";

const BannerPanel = () => {
    const {total, flagged} = useSelector(state => state);
    const {power} = useSelector(state => state);
    let foundedArr = ['off', 'off'];
    let lastArr = ['off', 'off'];
    if (power) {
        foundedArr = [null, null];
        lastArr = [null, null];
        if (total) {
            const founded = `${flagged}`;
            const last = `${total}`;
            foundedArr = flagged > 9 ? [parseInt(founded.charAt(0)), parseInt(founded.charAt(1))] : [0, parseInt(founded)]
            lastArr = last > 9 ? [parseInt(last.charAt(0)), parseInt(last.charAt(1))] : [0, parseInt(last)]
        }
    }

    return (
        <div className="banner">
            <div className="banner__display">
                <Label text={'Found'}/>
                <NumericDisplay number={foundedArr}/>
            </div>
            <Logo/>
            <div className="banner__display">
                <Label text={'Total'}/>
                <NumericDisplay number={lastArr}/>
            </div>
        </div>
    );
}

export default BannerPanel;