import React from 'react';
import PosterHex from "./background/hex-poster/PosterHex";
import PosterCsn from "./background/PosterCsn";

const Background = () => {
    return (
        <div className="background">
            <div className="background__top">
                <PosterHex/>
                <PosterCsn/>
            </div>
            <div className="background__bottom"/>
        </div>
    );
}

export default Background;