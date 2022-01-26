const temp = [
    {name:'AAA', time: 1, clicks: 1000},
    {name:'AAA', time: 2, clicks: 1000},
    {name:'AAA', time: 3, clicks: 1000},
    {name:'AAA', time: 4, clicks: 1000},
    {name:'AAA', time: 5, clicks: 1000},
    {name:'AAA', time: 36059.99, clicks: 1000},
    {name:'AAB', time: 36059.99, clicks: 1000},
    {name:'ABC', time: 36059.99, clicks: 1000},
    {name:'---', time: 0, clicks: '---'},
    {name:'---', time: 0, clicks: '---'}
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