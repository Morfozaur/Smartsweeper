export const startingMines = (size) => {
    return Math.ceil(Math.pow(size, 2) * ((2 + size) /108))
};