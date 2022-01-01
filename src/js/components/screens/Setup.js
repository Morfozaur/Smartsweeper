import React from 'react';
import {useDispatch} from "react-redux";
import {thunkBoard} from "../../redux/actions/thunkBoard";

const Setup = () => {
    const dispatch = useDispatch();
    return (
        <div className='setup'>
            <p className='setup__header'>Set up your match and press:</p>
            <div className="setup__btn" onClick={() => dispatch(thunkBoard())}>Start!</div>
        </div>
    );
}

export default Setup;