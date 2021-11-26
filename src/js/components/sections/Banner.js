import React from 'react';
import Logo from "../elements/Logo";
import NumericDisplay from "../elements/NumericDisplay";

const Banner = () => {
    return (
        <div className="banner">
            <NumericDisplay number={[3,1]}/>
            <Logo/>
            <NumericDisplay number={[6,9]}/>
        </div>
    );
}

export default Banner;