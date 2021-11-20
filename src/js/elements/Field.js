import React from 'react';

const Field = ({row}) => {
    const action = () => {
        if (row.adj === 0 && !row.bomb) {
            console.log('loool')
        }
    };
    return (
        <div className={'board__field'} onClick={action}>
            {(row.adj> 0 && !row.bomb) && <>{row.adj}</>}
            {row.bomb && <i className="fas fa-bomb"/>}
        </div>
    );
}

export default Field;