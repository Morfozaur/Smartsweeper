import React from 'react';
import {resultCalc} from "../../logic/baseFunctions";
import EmptyScore from "./EmptyScore";

const ScoreboardTable = ({table, size, mode, style}) => {

    const currScore = table[size][mode][style];

    return (
        <table className="scoreboard__table">
            <thead>
                <tr className="scoreboard__row scoreboard__row--head">
                    <th className="scoreboard__cell scoreboard__cell--head">NAME</th>
                    <th className="scoreboard__cell scoreboard__cell--head">TIME</th>
                    <th className="scoreboard__cell scoreboard__cell--head">CLICKS</th>
                </tr>
            </thead>
            <tbody>
                {currScore.map(({name, time, clicks},idx) => {
                    return (
                        <tr key={`${name}-${idx}`} className="scoreboard__row">
                            <td className="scoreboard__cell">{name}</td>
                            <td className="scoreboard__cell">{time === 0 ? '---' : resultCalc(time)}</td>
                            <td className="scoreboard__cell">{clicks}</td>
                        </tr>
                    )
                })}
                {currScore.length < 4 && <EmptyScore/>}
                {currScore.length < 5 && <EmptyScore/>}
            </tbody>
        </table>
    );
}

export default ScoreboardTable;