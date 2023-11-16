import React from "react";
import "./Counter.css";

const Counter = () => {
  const [Counter, setCounter] = React.useState(0);

  const increase = () => {
    setCounter(Counter + 1);
  };

  const decrease = () => {
    setCounter(Counter - 1);
  };

  return (
    <div className="counterWrapper">
      <h1 className="counterValue">{Counter}</h1>
      <div className="buttonWrapper">
        <button className="button" id="increase" onClick={decrease}>
          -
        </button>
        <button className="button" id="decrease" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
