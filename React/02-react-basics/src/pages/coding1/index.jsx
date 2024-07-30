import React, { useState } from "react";


export default function Coding1(){
    const [counter, setCounter] = useState(5);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto text-center">
                <h2>Count: {counter}</h2>
                <button onClick={()=>{
                    setCounter(counter+5);
                    setCounter(counter+5);
                    alert(counter);
                    setCounter(counter+5);
                    setCounter(counter+5);
                }}>Increment</button>
                <h3>This will alert 5 and then change to 10</h3>
                </div>
            </div>
        </div>
    )
}
