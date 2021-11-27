import {useEffect, useState} from "react";

export const useKeyPress = (targetKey, type, state= false) => {
    const [longPress, setLongPress] = useState(false);
    const [pressed, setPressed] = useState(state);

    const keyDown = ({key}) => {
        if (key === targetKey) {
            type === 'long' ? setLongPress(true) : setPressed(state => !state)
        }
    }

    const keyUp = ({key}) => {
        if (key === targetKey && type === 'long') setLongPress(false);
    }

    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        };
    }, [])
    return type === 'long' ? longPress : pressed
};