export const random = (max, min = 0) => Math.floor(Math.random() * ( max - min + 1 )) + min;
export const firstBig = (string) => string.charAt(0).toUpperCase() + string.slice(1);