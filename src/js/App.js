import Menu from "./Menu";
import Board from "./Board";
import {useState} from "react";

function App() {
    const [board, setBoard] = useState([])

    const boarding = (size) => {
        const board = [];
        const fields = [];
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row.push({hide: false, bomb: false, adj:0});
                fields.push({col: i, row: j})
            }
            board.push(row)
        }
        console.log(fields)
        setBoard(board)
    };

    return (
        <div className='container'>
            <h1>SmartSweeper</h1>
            <Menu boarding={boarding}/>
            <Board board={board}/>
        </div>
  );
}

export default App;
