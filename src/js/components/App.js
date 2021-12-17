import {useKeyPress} from "../logic/useKeyPress";
import {useEffect} from "react";
import {selectModeSetter} from "../redux/actions/allActions";
import {useDispatch} from "react-redux";
import Head from "./layout/Head";
import Controls from "./layout/Controls";
import Front from "./layout/Front";
import * as Tone from "tone";

function App() {
    const dispatch = useDispatch();
    const qPress = useKeyPress('q', 'short');

    useEffect(()=> {
        qPress === false ? dispatch(selectModeSetter(false)) : dispatch(selectModeSetter(true));
    }, [dispatch, qPress])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=> await Tone.start(), [])

    return (
        <div className='container'>
            <div className="test"/>
            <Head/>
            <Controls/>
            <Front/>
        </div>
  );
}

export default App;
