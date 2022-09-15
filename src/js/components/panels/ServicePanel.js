import React, {useState} from 'react';
import * as Tone from "tone";
import Symbol from "../elements/Symbol";
import classNames from "classnames";
import {playPowerOff, playPowerOn} from "../../logic/synth";
import {useDispatch, useSelector} from "react-redux";
import {
    backlightSetter, boardSetter, editableSetter, minesSetter,
    powerSetter,
    resolveSetter,
    screenSetter,
    selectModeSetter, totalFieldsSetter
} from "../../redux/actions/allActions";

const ServicePanel = () => {
    const [tone, setTone] = useState(false);
    const {power} = useSelector(state => state);
    const dispatch = useDispatch();

    const powerOn = async () => {
        if (!tone) {
            await Tone.start();
            setTone(true);
        }
        if (!power) {
            if (localStorage.getItem("morfozaurSmartSweeper") === null) {

            }
            dispatch(screenSetter('start'));
            dispatch(totalFieldsSetter({total:null, check: null}))
            await playPowerOn();
            dispatch(backlightSetter(true));
            dispatch(editableSetter(true));
            setTimeout(()=> dispatch(selectModeSetter(true)), 200);
            setTimeout(()=> {
                dispatch(editableSetter(false));
                dispatch(backlightSetter(false));
                setTimeout(()=> dispatch(selectModeSetter(false)), 200);
            }, 500)
        } else {
            dispatch(minesSetter({total: null, remain: null, flagged: null}));
            dispatch(boardSetter([]));
            dispatch(selectModeSetter(false));
            await playPowerOff();
            dispatch(backlightSetter(false));
        }
        dispatch(resolveSetter('init'));
        dispatch(powerSetter());
    };

    return (
        <div className="front__middle">
            <div className="power">
                <button className="power__button">
                    <span className={classNames("power__front", {"power__front--on": power})}>
                        <span className={classNames('power__text', {'power__text--on': power})} onClick={powerOn}>
                            <Symbol type={'power'}/>
                        </span>
                    </span>
                    <span className={classNames("power__filler power__filler--top", {'power__filler--untop': power})}/>
                    <span className={classNames("power__filler power__filler--bottom", {'power__filler--unbottom': power})}/>
                </button>
            </div>
        </div>
    );
}

export default ServicePanel;