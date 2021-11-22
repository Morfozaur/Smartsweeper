import {useEffect, useState} from "react";

export const useKeyPress = (targetKey) => {
    const [pressed, setPressed] = useState(false);

    const keyDown = ({key}) => {
        if (key === targetKey) setPressed(true);
    }

    const keyUp = ({key}) => {
        if (key === targetKey) setPressed(false);
    }

    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        };
        // eslint-disable-next-line no-use-before-define
    }, [])
    return pressed
};