import React from 'react';
import Panel from "../sections/Panel";
import Banner from "../sections/Banner";

const Header = () => {
    return (
        <div className='head'>
            <div className="head__insert">
                <div className="head__side head__side--left"/>
                <div className="head__center">
                    <Banner/>
                    <Panel/>
                </div>
                <div className="head__side head__side--right"/>
            </div>
        </div>
    );
}

export default Header;