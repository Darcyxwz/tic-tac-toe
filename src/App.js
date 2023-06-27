import React, { useState } from "react";


function Square({ value, onSquareClick }) { //this is a component, so the parameters should be in {}
  return <button className = "square" onClick = {onSquareClick}>{value}</button>
}

function Board({ order, values, onPlay }) {
  // const [order, setOrder] = useState(1);
  // const [values, setValues] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (values[i] === null && !ifOneWin(values)) {
      const nextValues = values.slice();
      if (order % 2 === 0) {
        nextValues[i] = 'O';
        onPlay(nextValues);
      }
      else {
        nextValues[i] = 'X';
        onPlay(nextValues);
      }
    }
  }

  const winner = ifOneWin(values);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  }
  else {
    status = "Next is " + (order % 2 === 0 ? "O" : "X");
  }

  return (
    <div>
      <div>{status}</div>
      <div className = "board-row">
        <Square onSquareClick = {() => handleClick(0)} value = {values[0]} />
        <Square onSquareClick = {() => handleClick(1)} value = {values[1]} />
        <Square onSquareClick = {() => handleClick(2)} value = {values[2]} />
      </div>
      <div className = "board-row">
       <Square onSquareClick = {() => handleClick(3)} value = {values[3]} />
       <Square onSquareClick = {() => handleClick(4)} value = {values[4]} />
       <Square onSquareClick = {() => handleClick(5)} value = {values[5]} />
      </div>
      <div className = "board-row">
       <Square onSquareClick = {() => handleClick(6)} value = {values[6]} />
       <Square onSquareClick = {() => handleClick(7)} value = {values[7]} />
       <Square onSquareClick = {() => handleClick(8)} value = {values[8]} />
      </div>
    </div>
  );
}

export default function Game() {
  const [order, setOrder] = useState(1);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const squares_now = history[history.length - 1];
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setOrder(order + 1);
  }
  return(
    <div className = "game">
      <div className = "game-board">
        <Board order = {order} values = {squares_now} onPlay = {handlePlay} />
      </div>
    </div>
  );

}

function ifOneWin(arr) {
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
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return arr[a];
    }
  }
  return null;
}