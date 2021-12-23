import React, {useState} from 'react';
import * as Tone from "tone";
import Symbol from "../elements/Symbol";
import classNames from "classnames";
import {playPowerOff, playPowerOn} from "../../logic/synth";
import {useDispatch, useSelector} from "react-redux";
import {powerSetter, screenSetter} from "../../redux/actions/allActions";

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
            dispatch(screenSetter('start'));
            await playPowerOn();
        } else {
            await playPowerOff();
        }
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