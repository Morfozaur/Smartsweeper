import {useKeyPress} from "../logic/useKeyPress";
import {useEffect} from "react";
import {selectModeSetter} from "../redux/actions/allActions";
import {useDispatch} from "react-redux";
import Header from "./layout/Header";
import Controls from "./layout/Controls";
import Front from "./layout/Front";

function App() {
    const dispatch = useDispatch();
    const qPress = useKeyPress('q', 'short');

    useEffect(()=> {
        qPress === false ? dispatch(selectModeSetter(false)) : dispatch(selectModeSetter(true));
    }, [dispatch, qPress])

    return (
        <div className='container'>
            <div className="test"/>
            <Header/>
            <Controls/>
            <Front/>
        </div>
  );
}

export default App;
