import React, { useState } from "react";


function Square({ value, onClick }) {
  return <button className = "square" onClick = {onClick}>{value}</button>
}

export default function Board() {
  const [order, setOrder] = useState(0);
  const [value, setValue] = useState(null);
  function handleClick() {
    setOrder(order + 1);
    if (order % 2 == 0) {
      setValue('O');
    }
    else {
      setValue('X');
    }
  }
  return (
    <div>
      <div className = "board-row">
        <Square onClick = {handleClick} value = {value} />
        <Square onClick = {handleClick} value = {value} />
        <Square onClick = {handleClick} value = {value} />
      </div>
      <div className = "board-row">
       <Square onClick = {handleClick} value = {value} />
       <Square onClick = {handleClick} value = {value} />
       <Square onClick = {handleClick} value = {value} />
      </div>
      <div className = "board-row">
       <Square onClick = {handleClick} value = {value} />
       <Square onClick = {handleClick} value = {value} />
       <Square onClick = {handleClick} value = {value} />
      </div>
    </div>
  );
}
