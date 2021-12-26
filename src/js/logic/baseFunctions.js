export const random = (max, min = 0) => Math.floor(Math.random() * ( max - min + 1 )) + min;
export const firstBig = (string) => string.charAt(0).toUpperCase() + string.slice(1);
export const resultCalc = (total) => {
    const minutes = Math.floor(total/60);
    const seconds = total - (minutes * 60);
    return minutes === 0 ? `${seconds}s` :`${minutes}min ${seconds.toFixed(2)}s`
}