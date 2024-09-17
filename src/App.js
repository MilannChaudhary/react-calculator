import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/button";
import { DisplayComponent, CalculatedComponent } from "./components/displaycomponent";

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [calculated, setCalculated] = useState("");

  const handleClick = (value) => {
    const operators = ["+", "-", "*", "/", "%"];
    const lastChar = input[input.length - 1];

    // Find the last operator
    const lastOperatorIndex = Math.max(
      input.lastIndexOf("+"),
      input.lastIndexOf("-"),
      input.lastIndexOf("*"),
      input.lastIndexOf("/"),
      input.lastIndexOf("%")
    );

    // Get the part of the input after the last operator (the current number)
    const currentNumber = input.slice(lastOperatorIndex + 1);

    // Check if the value is a decimal point and avoid multiple decimals in the current number
    if (value === "." && currentNumber.includes(".")) {
      return; // Prevent adding another decimal point in the current number
    }

    // Replace last operator if new operator is pressed
    if (operators.includes(lastChar) && operators.includes(value)) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  };

  const calculatedAnswer = () => {
    try {
      setCalculated(parseFloat(eval(input)));
    } catch (error) {
      setCalculated("Error");
    }
  };
  const removeLastCharacter = (value) => {
    if (value === "AC") {
      setInput("");
      setCalculated("");
    } else if (value === "C") {
      setInput(input.slice(0, -1));
    } else {
      return;
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="calculator">
          <DisplayComponent value={input} />
          <CalculatedComponent value={calculated} />

          <div className="button-panel">
            <ButtonComponent label="AC" className="clear-btn btn btn-lightgrey" onClick={removeLastCharacter} />
            <ButtonComponent label="C" className="clear-btn btn btn-lightgrey" onClick={removeLastCharacter} />
            <ButtonComponent label="%" className="number-btn btn btn-lightgrey" onClick={handleClick} />
            <ButtonComponent label="/" className="operator-btn btn btn-yellow" onClick={handleClick} />
            <ButtonComponent label="7" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="8" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="9" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="*" className="operator-btn btn btn-yellow" onClick={handleClick} />
            <ButtonComponent label="4" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="5" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="6" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="-" className="operator-btn btn btn-yellow" onClick={handleClick} />
            <ButtonComponent label="1" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="2" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="3" className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="+" className="operator-btn btn btn-yellow" onClick={handleClick} />
            <ButtonComponent label="0" className="number-btn btn btn-zero" onClick={handleClick} />
            <ButtonComponent label="." className="number-btn btn btn-darkgrey" onClick={handleClick} />
            <ButtonComponent label="=" className="equal-btn btn btn-yellow" onClick={calculatedAnswer} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
