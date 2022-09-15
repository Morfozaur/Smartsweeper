const lowVer = el => el - 1 >= 0;
const highVer = (el, length) => el + 1 < length;

export const [upLeft, up, upRight, right, downRight, down, downLeft, left] = ['upLeft', 'up', 'upRight', 'right', 'downRight', 'down', 'downLeft', 'left']


export const ifFieldExist = (col, row, action, length = null) => {
    switch (action) {
        case upLeft:
            return lowVer(row) && lowVer(col);
        case up:
            return lowVer(row);
        case upRight:
            return lowVer(row) && highVer(col, length);
        case right:
            return highVer(col, length);
        case downRight:
            return highVer(row, length) && highVer(col, length);
        case down:
            return highVer(row, length);
        case downLeft:
            return highVer(row, length) && lowVer(col);
        case left:
            return lowVer(col);
        default:
            break;
    }
};