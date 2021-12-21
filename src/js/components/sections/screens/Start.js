import React from 'react';
import * as Tone from "tone";

const Start = () => {

    const click = () => {
        const vol = new Tone.Volume(-20).toDestination();
        const synth = new Tone.MembraneSynth().connect(vol);
        synth.triggerAttackRelease("C2", "8n");
    };

    return (
        <div className={'start'}>
            <p className={'start__logo'}>
                Smart <span className={'start__logo start__logo--span'}>Sweeper</span>
            </p>
            <div className="start__menu">
                <p className="start__option" onMouseEnter={click}>NEW GAME</p>
                <p className="start__option" onMouseEnter={click}>HELP</p>
                <p className="start__option" onMouseEnter={click}>ABOUT</p>
            </div>
        </div>
    );
}

export default Start;