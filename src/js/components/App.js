import {useKeyPress} from "../logic/useKeyPress";
import {useEffect} from "react";
import {flagModeSetter} from "../redux/actions/allActions";
import {useDispatch} from "react-redux";
import Head from "./layout/Head";
import Controls from "./layout/Controls";
import Front from "./layout/Front";

function App() {
    const dispatch = useDispatch();
    const qPress = useKeyPress('q');

    useEffect(()=> {
        console.log(qPress)
        qPress === false ? dispatch(flagModeSetter(false)) : dispatch(flagModeSetter(true));
    }, [dispatch, qPress])

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
