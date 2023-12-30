import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        setOutput(result);
      } catch (error) {
        setOutput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <header>React Calculator</header>
      <input type="text" value={input} readOnly />

      <div className="result">
        <p>{output}</p>
      </div>

      <div className="layout">
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("C")}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
