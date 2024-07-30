import React, { useState } from "react";


export default function Coding2(){
    const [counter, setCounter] = useState(5);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto text-center">
                    <h2>{counter}</h2>
                    <button onClick={()=>{
                        setCounter(counter => counter + 5);
                        setCounter(counter => counter + 5);
                        alert(counter);
                        setCounter(counter => counter + 5);
                        setCounter(counter => counter + 5);
                    }}>Increment</button>
                    <h3>Alert 5 and change to 25</h3>
                </div>
            </div>
        </div>
    )
}