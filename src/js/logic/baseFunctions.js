export const random = (max, min = 0) => Math.floor(Math.random() * ( max - min + 1 )) + min;
export const firstBig = (string) => string.charAt(0).toUpperCase() + string.slice(1);
export const resultCalc = (total) => {
    const minutes = Math.floor(total/60);
    const seconds = total - (minutes * 60);
    return minutes === 0 ? `${seconds}s` :`${minutes}min ${seconds.toFixed(2)}s`
}

export const sizeToLetter = (boardSize) => {
    return boardSize === 10 ? 's' : (boardSize === 15 ? 'm' : 'l');
};

export const filterMineArray = (el, payload) => {
    return el[0] !== payload[0] || el[1] !== payload[1]
};

export const codeToName = (arr) => String.fromCharCode(...arr);