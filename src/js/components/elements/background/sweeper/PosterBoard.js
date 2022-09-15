import React from 'react';

import {posterBoarding} from "../../../../logic/posterBoarding";
import PosterField from "./PosterField";

const PosterBoard = () => {
    const board = posterBoarding();
    return (
        <div className='board'>
            {board.map((col, c) => {
                return (
                    <div key={`colPost-${c}`} className='poster__col'>
                        {col.map((field, r) => {
                            return <PosterField key={`rowPost-${c}${r}`} field={field}/>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default PosterBoard;