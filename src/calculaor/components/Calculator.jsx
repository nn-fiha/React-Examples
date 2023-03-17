import { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [ans, setAns] = useState('');

    function handleInput1Change(e) {
        setInput1(parseInt(e.target.value));
    }
    function handleInput2Change(e) {
        setInput2(parseInt(e.target.value));
    }
    function add() {

        setAns(input1 + input2);
    }
    function substract() {

        setAns(input1 - input2);
    }

    function multiplication() {

        setAns(input1 * input2);
    }

    function division() {

        setAns(input1 / input2);
    }

    return (
        <div className="calculator-container">
            <h1>Calculator App</h1>
            <input onChange={handleInput1Change} type="number" value={input1} />
            <input onChange={handleInput2Change} type="number" value={input2} /><br />
            <button className="sign-button" onClick={add} > + </button>
            <button className="sign-button" onClick={substract} > - </button>
            <button className="sign-button" onClick={multiplication} > * </button>
            <button className="sign-button" onClick={division} > / </button>
            <h2>{`Answer: ${ans}`}</h2>
        </div>
    );
}

export default Calculator;
