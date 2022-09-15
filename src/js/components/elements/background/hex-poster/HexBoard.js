import React from 'react';
import Hex from "./Hex";

const HexBoard = () => {

    const terrains = [
        ['plain', 'bush', 'plain'],
        ['hills', 'forest', 'water', 'plain'],
        ['plain', 'forest', 'forest', 'forest', 'bush'],
        ['plain', 'bush', 'hills', 'bush'],
        ['forest', 'hills', 'hills']
    ];

    return (
        <div className={'hexplorist__board'}>
            {terrains.map((col, idx) => {
                return (
                    <div key={`col-${idx}`} className={'hexplorist__column'} >
                        {col.map((hex, idxH) => {
                            return <Hex key={`row-${idx}${idxH}`} terrain={hex}/>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default HexBoard;