import React from 'react';

const EmptyScore = () => {
    return (
        <tr className="scoreboard__row">
            <td className="scoreboard__cell">---</td>
            <td className="scoreboard__cell">---</td>
            <td className="scoreboard__cell">---</td>
        </tr>
    );
}

export default EmptyScore;