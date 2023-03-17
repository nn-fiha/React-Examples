import { useState } from "react";

import './Counter.css';

function Counter({title}) {
    const [count,setCount]=useState(0);

    function onIncrement(){
        setCount(count+2);
    }
    function onDecrement(){
        setCount(count-2);
    }

        return (
            <div className="counter-wrap">
            {console.log("ok")};
               <h1>{title}</h1> 
               <button className="counter-button" onClick={onIncrement}>Increment</button>
               <button className="counter-button" onClick={onDecrement}>Decrement</button>
               <p>{`Current Count: ${count} `}</p>
                </div>
        )
    
}

export default Counter;