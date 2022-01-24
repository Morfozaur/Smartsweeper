import {useKeyPress} from "../logic/useKeyPress";
import {useEffect} from "react";
import {selectModeSetter} from "../redux/actions/allActions";
import {useDispatch, useSelector} from "react-redux";
import Header from "./layout/Header";
import Controls from "./layout/Controls";
import Front from "./layout/Front";
import Background from "./elements/Background";

function App() {
    const dispatch = useDispatch();
    const qPress = useKeyPress('q', 'short');
    const { power, result: {resolve} } = useSelector(state => state)


    useEffect(()=> {
        if (power && !resolve) {
            qPress === false ? dispatch(selectModeSetter(false)) : dispatch(selectModeSetter(true));
        }
    }, [dispatch, qPress, power, resolve])

    return (
        <div className='container'>
            <Background/>
            <div className="arcade">
                <Header/>
                <Controls/>
                <Front/>
            </div>
        </div>
  );
}

export default App;
