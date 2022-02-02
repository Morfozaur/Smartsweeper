import React from 'react';
import PosterHex from "./background/hex-poster/PosterHex";
import PosterSweeper from "./background/sweeper/PosterSweeper";

const Background = () => {
    return (
        <div className="background">
            <div className="background__top">
                <PosterHex/>
                <PosterSweeper/>
            </div>
            <div className="background__bottom"/>
        </div>
    );
}

export default Background;