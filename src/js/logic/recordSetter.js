import {store} from "../redux/store";

export const recordSetter = () => {
    const {
        gameplay: {boardSize, mode, style},
        result: {time, clicks}
    } = store.getState();


    console.log(scoresTemplate[sizeKey][mode][style], 'tempka', time);
    const current = scoresTemplate[sizeKey][mode][style].filter(el => el.time > 0)
    const newScoreboard = [];
    let pusher = false;

    current.forEach(score => {
        if (score.time >= time && !pusher) {
            if (score.time === time && score.clicks < clicks) {
                newScoreboard.push(score);
                newScoreboard.push({name: 'PASS', time: time, clicks: 12});
            } else {
                newScoreboard.push({name: 'PASS', time: time, clicks: 12});
                newScoreboard.push(score);
            }
            pusher = true;
        } else {
            newScoreboard.push(score);
        }
    })

    if (newScoreboard.length > 5) newScoreboard.length = 5;
    const check = newScoreboard.some(el => el.name === 'PASS');
    return {check: check, data: check ? newScoreboard : null};
};