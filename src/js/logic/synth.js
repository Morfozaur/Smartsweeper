import * as Tone from "tone";

export const playNote = async (note, n = '1n') => {
    const synth = new Tone.Synth().toDestination();
    await Tone.start();
    const now = Tone.now();
    synth.triggerAttackRelease(note, n, now);
}
