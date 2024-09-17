import React, { useState } from "react";
const CounterComponent = () => {
  let [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  const decreaseCounter = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <button onClick={increaseCounter}>+</button>
      <div>counter {counter}</div>
      <button onClick={decreaseCounter}>-</button>
    </>
  );
};

export default CounterComponent;
