import React from 'react';
import DisplayPanel from "../panels/DisplayPanel";
import BannerPanel from "../panels/BannerPanel";

const Header = () => {
    return (
        <div className='head'>
            <div className="head__insert">
                <div className="head__side head__side--left"/>
                <div className="head__center">
                    <BannerPanel/>
                    <DisplayPanel/>
                </div>
                <div className="head__side head__side--right"/>
            </div>
        </div>
    );
}

export default Header;