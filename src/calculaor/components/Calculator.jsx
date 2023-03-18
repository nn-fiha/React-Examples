import { useState } from "react";
import "./Calculator.css";
function Operation({ label, handleOnClick }) {
  return (
    <button className="sign-button" onClick={handleOnClick}>
      {label}
    </button>
  );
}

function Calculator() {
  const operations = ["+", "-", "*", "/"];
  const [inputs, setInputs] = useState([0, 0]);
  //   const [input1, setInput1] = useState("");
  //   const [input2, setInput2] = useState("");
  const [ans, setAns] = useState("");

  function handleOnChange(value, index) {
    const newInputs = [...inputs];
    newInputs[index] = parseInt(value);
    setInputs(newInputs);
  }

  //   function handleInput1Change(e) {
  //     setInput1(parseInt(e.target.value));
  //   }
  //   function handleInput2Change(e) {
  //     setInput2(parseInt(e.target.value));
  //   }
  function handleOperation(operationType) {
    switch (operationType) {
      case "+":
        setAns(inputs[0] + inputs[1]);
        break;
      case "-":
        setAns(inputs[0] - inputs[1]);
        break;
      case "*":
        setAns(inputs[0] * inputs[1]);
        break;
      case "/":
        setAns(inputs[0] / inputs[1]);
        break;
    }
  }
  //   function add() {
  //     setAns(input1 + input2);
  //   }
  //   function substract() {
  //     setAns(input1 - input2);
  //   }

  //   function multiplication() {
  //     setAns(input1 * input2);
  //   }

  //   function division() {
  //     setAns(input1 / input2);
  //   }

  return (
    <div className="calculator-container">
      <h1>Calculator App</h1>
      <div>
        {[0, 1].map((id) => (
          <input
            onChange={(e) => handleOnChange(e.target.value, id)}
            type="number"
          />
        ))}
        {/* <input onChange={handleInput1Change} type="number" value={input1} />
        <input onChange={handleInput1Change} type="number" value={inputs2} /> */}
      </div>
      <div className="operations">
        {operations.map((operation, index) => (
          <Operation
            key={index}
            label={operation}
            handleOnClick={() => handleOperation(operation)}
          />
        ))}

        {/* <button className="sign-button" onClick={add} > + </button>
            <button className="sign-button" onClick={substract} > - </button>
            <button className="sign-button" onClick={multiplication} > * </button>
            <button className="sign-button" onClick={division} > / </button> */}
      </div>
      <div>
        <h2>{`Answer: ${ans}`}</h2>
      </div>
    </div>
  );
}

export default Calculator;
