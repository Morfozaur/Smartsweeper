const temp = [
    {name:'AAA', time: 36059.99, clicks: 1000},
    {name:'AAB', time: 36059.99, clicks: 1000},
    {name:'ABC', time: 36059.99, clicks: 1000},
]

const scoresGroup = {
    classic: {
        classic: [...temp],
        colors: [...temp],
        detector: [...temp],
        scanner: [...temp],
    },
    rotating: {
        classic: [...temp],
        colors: [...temp],
        detector: [...temp],
        scanner: [...temp],
    },
    rise: {
        classic: [...temp],
        colors: [...temp],
        detector: [...temp],
        scanner: [...temp],
    },
    smart: {
        detector: [...temp]
    }
}

export const scoresTemplate = {
    s: {...scoresGroup},
    m: {...scoresGroup},
    l: {...scoresGroup}
};