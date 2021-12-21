import React, {useState} from 'react';
import Symbol from "../elements/Symbol";
import classNames from "classnames";
import {playPower} from "../../logic/synth";
import * as Tone from "tone";

const Service = () => {
    const [power, setPower] = useState(false);
    const [tone, setTone] = useState(false)

    const powerOn = async () => {
        if (!tone) {
            await Tone.start();
            setTone(true);
        }
        if (!power) await playPower();
        setPower(state => !state);
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

export default Service;