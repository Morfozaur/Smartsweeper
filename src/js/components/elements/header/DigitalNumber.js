import React from 'react';
import NumberBar from "./NumberBar";

const DigitalNumber = ({number}) => {
    let [top, middle, bottom, topLeft, topRight, bottomLeft, bottomRight] = new Array(7).fill(false);
    switch (number) {
        case 1:
            topRight = true;
            bottomRight = true;
            break;
        case 2:
            top = true;
            topRight = true;
            middle = true;
            bottomLeft = true;
            bottom = true;
            break;
        case 3:
            top = true;
            topRight = true;
            middle = true;
            bottomRight = true;
            bottom = true;
            break;
        case 4:
            topRight = true;
            topLeft = true;
            middle = true;
            bottomRight = true;
            break;
        case 5:
            top = true;
            topLeft = true;
            middle = true;
            bottomRight = true;
            bottom = true;
            break;
        case 6:
            top = true;
            topLeft = true;
            middle = true;
            bottomLeft = true;
            bottomRight = true;
            bottom = true;
            break;
        case 7:
            top = true;
            topRight = true;
            bottomRight = true;
            break;
        case 8:
            top = true;
            topRight = true;
            topLeft = true;
            middle = true;
            bottomLeft = true;
            bottomRight = true;
            bottom = true;
            break;
        case 9:
            top = true;
            topRight = true;
            topLeft = true;
            middle = true;
            bottomRight = true;
            bottom = true;
            break;
        case 0:
            top = true;
            topRight = true;
            topLeft = true;
            bottomLeft = true;
            bottomRight = true;
            bottom = true;
            break;
        case null:
            middle = true;
            break;
        case 'off':
            break;
        default:
            break;
    }


    return (
        <div className='number'>
            <NumberBar top={-3} left={-3} active={top} addClass={'top'}/>
            <NumberBar top={5} right={4} rotate={true} active={topLeft} addClass={'topL'}/>
            <NumberBar top={5} left={4} rotate={true} active={topRight} addClass={'topR'}/>
            <NumberBar top={13} left={-3} active={middle} addClass={'middle'}/>
            <NumberBar bottom={5} left={4} rotate={true} active={bottomRight} addClass={'bottomR'}/>
            <NumberBar bottom={5} right={4} rotate={true} active={bottomLeft} addClass={'bottomL'}/>
            <NumberBar bottom={-3} left={-3} active={bottom} addClass={'bottom'}/>
        </div>
    );
}

export default DigitalNumber;