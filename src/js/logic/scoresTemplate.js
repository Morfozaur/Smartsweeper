const scoreGen = (size, mode, style) => {
    const arr = [];
    const time = (size === 'S') ? 12 : (size === 'M' ? 24 : 36);
    for (let i = 0; i < 3; i++) {
        arr.push({name: `${size}${mode}${style}`, time: (time * 1000) + 59.99 - (10 * i) , clicks: time * (1 + i)})
    }
    return arr
}

const styleGroup = (size, mode) => {
    return {
        classic: scoreGen(size, mode, 'C'),
        colors: scoreGen(size, mode, 'K'),
        detector: scoreGen(size, mode, 'D'),
        scanner: scoreGen(size, mode, 'S'),
    }
}

const modesGen = (size) => {
    const modes = {};
    modes.classic = styleGroup(size, 'C');
    if (size !== 'L') { modes.rotating = styleGroup(size, 'O') }
    modes.rise = styleGroup(size, 'R');
    modes.smart = {detector: scoreGen(size, 'S', 'D')}
    return modes;
}

export const scoresTemplate = {
    s: modesGen('S'),
    m: modesGen('M'),
    l: modesGen('L'),
}