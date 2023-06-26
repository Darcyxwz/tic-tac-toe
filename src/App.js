import React, { useState } from "react";


function Square({ value, onClick }) { //this is a component, so the parameters should be in {}
  return <button className = "square" onClick = {onClick}>{value}</button>
}

export default function Board() {
  const [order, setOrder] = useState(1);
  const [values, setValues] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (values[i] == null && !ifOneWin(values)) {
      const nextValues = values.slice();
      if (order % 2 == 0) {
        nextValues[i] = 'O';
        setValues(nextValues);
      }
      else {
        nextValues[i] = 'X';
        setValues(nextValues);
      }
      setOrder(order + 1);
    }
  }

  return (
    <div>
      <div className = "board-row">
        <Square onClick = {() => handleClick(0)} value = {values[0]} />
        <Square onClick = {() => handleClick(1)} value = {values[1]} />
        <Square onClick = {() => handleClick(2)} value = {values[2]} />
      </div>
      <div className = "board-row">
       <Square onClick = {() => handleClick(3)} value = {values[3]} />
       <Square onClick = {() => handleClick(4)} value = {values[4]} />
       <Square onClick = {() => handleClick(5)} value = {values[5]} />
      </div>
      <div className = "board-row">
       <Square onClick = {() => handleClick(6)} value = {values[6]} />
       <Square onClick = {() => handleClick(7)} value = {values[7]} />
       <Square onClick = {() => handleClick(8)} value = {values[8]} />
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