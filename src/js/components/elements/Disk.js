import React from 'react';
import Arrow from "./Arrow";

const Disk = ({setSize, size, sizeArr}) => {

    const down = (arr, setter) => setter(state => state === 0 ? arr.length - 1 : state - 1);
    const up = (arr, setter) => setter(state => state === arr.length - 1 ? 0 : state + 1);
    return (
        <div>
            <Arrow turn={'left'} size={8} wide={1.7} func={()=>down(sizeArr, setSize)}/>
            <p>{sizeArr[size]}</p>
            <Arrow turn={'right'} size={8} wide={1.7} func={()=>up(sizeArr, setSize)}/>
        </div>
    );
}

export default Disk;