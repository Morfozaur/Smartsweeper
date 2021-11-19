import Menu from "./Menu";
import Board from "./Board";
import {useState} from "react";

function App() {
    const [board, setBoard] = useState([])
    return (
        <div className='container'>
            <h1>SmartSweeper</h1>
            <Menu setter={setBoard}/>
            <Board board={board}/>
        </div>
  );
}

export default App;
