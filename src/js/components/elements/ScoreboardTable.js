import React from 'react';

const ScoreboardTable = ({table}) => {
    return (
        <table className="scoreboard__table">
            <tr className="scoreboard__row scoreboard__row--head">
                <th className="scoreboard__cell scoreboard__cell--head">NAME</th>
                <th className="scoreboard__cell scoreboard__cell--head">TIME</th>
                <th className="scoreboard__cell scoreboard__cell--head">CLICKS</th>
            </tr>
            {table.map(score => {
                return (
                    <tr className="scoreboard__row">
                        <td className="scoreboard__cell">{score.a}</td>
                        <td className="scoreboard__cell">{score.b}</td>
                        <td className="scoreboard__cell">{score.c}</td>
                    </tr>
                )
            })}
        </table>
    );
}

export default ScoreboardTable;