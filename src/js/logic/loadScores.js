import {scoresTemplate} from "./scoresTemplate";

export const loadScores = () => {
    if (localStorage.getItem("smartScore") === null) {
        localStorage.setItem("smartScore", JSON.stringify(scoresTemplate))
        return scoresTemplate
    } else {
        return JSON.parse(localStorage.getItem("smartScore"));
    }
};