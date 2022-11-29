import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState();
  const [input1, setInput1] = useState();
  const [division, setDivision] = useState();

  return (
    <div className="App">
      <h1>Division of 2 no's:</h1>
      <input onChange={(e) => setInput(e.target.value)} />
      <input onChange={(e) => setInput1(e.target.value)} />
      <button onClick={(e) => setDivision(parseInt(input) / parseInt(input1))}>
        Division
      </button>
      <br />
      <b>Division is:{division}</b>
    </div>
  );
}
