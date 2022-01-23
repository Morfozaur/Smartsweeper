import React from 'react';

const ScoreboardTable = ({table}) => {
    return (
        <table className="scoreboard__table">
            <tr className="scoreboard__row scoreboard__row--head">
                <th className="scoreboard__cell scoreboard__cell--head">NAME</th>
                <th className="scoreboard__cell scoreboard__cell--head">TIME</th>
                <th className="scoreboard__cell scoreboard__cell--head">CLICKS</th>
            </tr>
            {table.map(({name, time, clicks}) => {
                return (
                    <tr className="scoreboard__row">
                        <td className="scoreboard__cell">{name}</td>
                        <td className="scoreboard__cell">{time}</td>
                        <td className="scoreboard__cell">{clicks}</td>
                    </tr>
                )
            })}
        </table>
    );
}

export default ScoreboardTable;