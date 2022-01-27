import * as Tone from "tone";

export const playStart = async () => {
    const vol = new Tone.Volume(-20).toDestination();
    const synth = new Tone.Synth().connect(vol);
    const now = Tone.now();
    synth.triggerAttackRelease("C4", 0.125, now)
    synth.triggerAttackRelease("E4", 0.125, now + 0.125)
    synth.triggerAttackRelease("G4", 0.25, now + 0.25)
}

export const playReveal = async () => {
    const vol = new Tone.Volume(-20).toDestination();
    const synth = new Tone.Synth().connect(vol);
    synth.triggerAttackRelease("G3", .125);

}

export const playPowerOn = async () => {
    const synth = new Tone.Synth({
        oscillator: {
            type: 'sine',
            modulationFrequency: 0.5
        },
        envelope: {
            attack: 0.5,
            decay: 0.1,
            sustain: 0,
            release: 0.1,
        }
    }).toDestination();
    synth.triggerAttackRelease(1480, '16n');

}

export const playPowerOff = async () => {
    const vol = new Tone.Volume(-30).toDestination();
    const synth = new Tone.Oscillator("G4").connect(vol);
    synth.frequency.rampTo("G3", 0.35);
    synth.start();
    synth.stop('+0.35');
};

export const playBomb = async () => {
    const vol = new Tone.Volume(-10).toDestination();
    const synth = new Tone.Synth().connect(vol);
    const now = Tone.now();
    synth.triggerAttackRelease("G2", 0.125, now)
    synth.triggerAttackRelease("E2", 0.125, now + 0.125)
    synth.triggerAttackRelease("C2", 1, now + 0.25);
}

export const playWin = () => {
    const vol = new Tone.Volume(-10).toDestination();
    const synth = new Tone.Synth().connect(vol);
    const now = Tone.now() + 0.25;
    synth.triggerAttackRelease("E3", 0.125, now);
    synth.triggerAttackRelease("C4", 0.125, now + 0.125);
    synth.triggerAttackRelease("D4", 0.125, now + 0.25);
    synth.triggerAttackRelease("E4", 0.25, now + 0.375);
    synth.triggerAttackRelease("C4", 0.25, now + 0.625);
    synth.triggerAttackRelease("G4", 1.125, now + 0.75);
};

export const playFlag = async () => {
    const synth = new Tone.Synth({
        oscillator: {
            type: 'sine',
            modulationFrequency: 0.5
        },
        envelope: {
            attack: 0.5,
            decay: 0.1,
            sustain: 0,
            release: 0.1,
        }
    }).toDestination();
    synth.triggerAttackRelease(392, '32n');
};

export const playClick = () => {
    const vol = new Tone.Volume(-30).toDestination();
    const synth = new Tone.MembraneSynth().connect(vol);
    synth.triggerAttackRelease("C2", "8n");
};