
export const posterBoarding = () => {
    const board = [];
    const pattern = [
        'xxxxxxxxxx'.split(''),
        'xxxxxxoxxx'.split(''),
        'xxooxxoxxx'.split(''),
        'xxooxxoxxx'.split(''),
        'xxxxxxooxx'.split(''),
        'xxxxxxoxox'.split(''),
        'xxooxxoxox'.split(''),
        'xxooxxooxx'.split(''),
        'xxxxxxoxxx'.split(''),
        'xxxxxxxxxx'.split(''),

    ]
    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            row.push({bomb: pattern[i][j] === 'o'});
        }
        board.push(row);
    }
    return board;
};