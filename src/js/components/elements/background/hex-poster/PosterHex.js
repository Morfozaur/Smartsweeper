import React from 'react';
import HexHeader from "./HexHeader";
import HexBoard from "./HexBoard";
import Avatar from "./Avatar";

const PosterHex = () => {
    return (
        <div className={'poster poster__left'}>
            <div className="poster__insert poster__insert--left">
                <div className="poster__corner poster__corner--TL"/>
                <div className="poster__corner poster__corner--TR"/>
                <div className="poster__corner poster__corner--BL"/>
                <div className="poster__corner poster__corner--BR"/>
                <HexHeader/>
                <HexBoard/>
                <Avatar/>
            </div>
        </div>
    );
}

export default PosterHex;