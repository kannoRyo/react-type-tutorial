import React, {useState} from 'react'
import './index.css'
import Board from './Board'
import Info from './Info'

type squareType = (null | "O" | "X")[]
type ISquare = "X" | "O" | null;

function calculateWinner(squares: squareType) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () =>{
  console.log( Array(9).fill(null))
  const [history, setHistory] = useState([
    {
      squares: Array<ISquare>(9).fill(null)
    }
  ])
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [xIsNext, setXIsNext] = useState<boolean>(false)

  const handleClick　= (i: any):any => {
    const Copyhistory = history.slice(0,stepNumber + 1);
    const current = Copyhistory[Copyhistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(history.concat([
      {
        squares: squares
      }
    ]))

    setStepNumber(Copyhistory.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: any):any => {
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }

  const Copyhistory = history;
  const current = Copyhistory[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step: any, move: any) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return(
    <div className="game">
    <div className="game-board">
      <Board
        squares={current.squares}
        onClick={(i: any) => handleClick(i)}
      />
    </div>
    <div className="game-info">
      <Info 
        winner={winner} 
        xIsNext={xIsNext} 
        moves={moves}
      />
    </div>
  </div>    
  )

}

export default App