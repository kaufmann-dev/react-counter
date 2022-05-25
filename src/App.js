import React, {useState, useRef} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const timer = useRef(null);

  const increasehold = () => {
    timer.current = setInterval(() => setCounter(count => count + 1), 250);
  };

  const decreasehold = () => {
    timer.current = setInterval(() => setCounter(count => count - 1), 250);
  };

  function timeoutClear() {
    clearInterval(timer.current);
  }
 
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="container text-center">
      <h1 className="display-1 my-4">Counter</h1>
      <button
        className="btn btn-danger"
        onClick={decrease}
        onMouseLeave={timeoutClear}
        onMouseUp={timeoutClear}
        onMouseDown={decreasehold}
      >-</button>
      <span className="mx-4">{counter}</span>
      <button
        className="btn btn-primary"
        onClick={increase}
        onMouseLeave={timeoutClear}
        onMouseUp={timeoutClear}
        onMouseDown={increasehold}
      >+</button><br></br>
      <button className="btn btn-secondary d-inline-block mt-3" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
