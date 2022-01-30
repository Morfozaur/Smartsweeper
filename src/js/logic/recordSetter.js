import {store} from "../redux/store";
import {loadScores} from "./loadScores";
import {codeToName, sizeToLetter} from "./baseFunctions";

export const recordSetter = (name) => {
    const {
        gameplay: {boardSize, mode, style},
        result: {time, clicks}
    } = store.getState();

    const scores = loadScores();
    const sizeKey = sizeToLetter(boardSize);
    const current = scores[sizeKey][mode][style];
    console.log(current);
    const newRecord = {name: codeToName(name), time: time, clicks: clicks}
    for (let i = 0; i < current.length; i++) {
        if (current[i].time >= time) {
            if (current[i].time === time && current[i].clicks <= clicks) {
                current.splice(i + 1, 0, newRecord);
            } else {
                current.splice(i, 0, newRecord);
            }
            break;
        }
    }

    console.log(current)

    // if (newScoreboard.length > 5) newScoreboard.length = 5;
    // console.log(newScoreboard)
};