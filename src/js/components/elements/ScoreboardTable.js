import React from 'react';
import {resultCalc} from "../../logic/baseFunctions";

const ScoreboardTable = ({table}) => {
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
                {table.map(({name, time, clicks},idx) => {
                    return (
                        <tr key={`${name}-${idx}`} className="scoreboard__row">
                            <td className="scoreboard__cell">{name}</td>
                            <td className="scoreboard__cell">{time === 0 ? '---' : resultCalc(time)}</td>
                            <td className="scoreboard__cell">{clicks}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default ScoreboardTable;