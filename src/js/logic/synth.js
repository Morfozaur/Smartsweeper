import * as Tone from "tone";

export const playStart = async () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", 0.125, now)
    synth.triggerAttackRelease("E4", 0.125, now + 0.125)
    synth.triggerAttackRelease("G4", 0.25, now + 0.25)
}

export const playReveal = async () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G3", .125);

}

export const playPower = async () => {
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

export const playBomb = async () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("G2", 0.125, now)
    synth.triggerAttackRelease("E2", 0.125, now + 0.125)
    synth.triggerAttackRelease("C2", 1, now + 0.25);
}

