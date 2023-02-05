import { useState } from 'react';
// import './App.css';
import React from 'react';
 
const Demo=()=> {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter Application</h1>
 
      <small>Powered By <a href="https://www.cluemediator.com/" target="_blank" title="Clue Mediator" data-testid="powered-by" rel="noopener noreferrer">Clue Mediator</a></small>
 
      <h2
        className="counter"

        data-testid="counter-text"
      >{counter}</h2>
 
      <button
        onClick={() => setCounter(prevCounter => prevCounter + 1)}
        data-testid="btn-increment">
        Increment
      </button>


      <button
        onClick={() => setCounter(prevCounter => prevCounter - 1)}
        data-testid="btn-decrement">
        Decrement
      </button>
    </div>
  );
}
 
export default Demo;
