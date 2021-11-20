import {store} from "../redux/store";

const [upLeft, up, upRight, right, downRight, down, downLeft, left] = ['upLeft', 'up', 'upRight', 'right', 'downRight', 'down', 'downLeft', 'left']

const type = {
    upLeft: 'UP-LEFT',
    up: 'UP',
    upRight: 'UP-RIGHT',
    right: 'RIGHT',
    downRight: 'DOWN-RIGHT',
    down: 'DOWN',
    downLeft: 'DOWN-LEFT',
    left: 'LEFT'
};

const lowVer = el => el - 1 >= 0;
const highVer = (el, length) => el + 1 < length;


const validate = (col, row, action) => {
    switch (action) {
        case upLeft:
            return (lowVer(col) && (lowVer(row)));
        case up:
            return true;
        default:
            break;
    }
};

export const reveal = (col, row) => {
    const data = store.getState().board;
    const size = data.length;
    if (validate(col, row, upLeft)) validate(col - 1, row -1)
};