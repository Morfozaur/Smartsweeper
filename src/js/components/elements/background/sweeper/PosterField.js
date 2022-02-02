import React from 'react';
import classNames from "classnames";
import Symbol from "../../Symbol";

const PosterField = ({field}) => {
    return (
        <div className={
            classNames('sweeper__field', {'sweeper__field--bombed': field.bomb})}>
            <div className={"sweeper__symbol"}>
                {field.bomb && <Symbol type={'bomb'}/>}
            </div>
        </div>
    );
}

export default PosterField;