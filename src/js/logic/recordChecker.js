import {store} from "../redux/store";

export const recordChecker = (scores) => {
    const { result: {time, clicks} } = store.getState();
    const checker = scores[scores.length-1];
    if (scores.length < 5) {
        return true
    } else if (checker.time > time) {
        return true
    } else if (checker.time === time && checker.clicks > clicks) {
        return true
    }
    return false

};