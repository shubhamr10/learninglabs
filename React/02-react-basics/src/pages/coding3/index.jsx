import React, { useRef } from "react";

export default function Coding3(){
    let countRef = useRef(0);

    function handleIncrement(){
        countRef.current = countRef.current + 1;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto text-center">
                    <h2>Count: {countRef.current}</h2>
                    <button onClick={handleIncrement}>Click me</button>
                    <p>useRef() method doesnot trigger re-render even after the value is updated. So output will be still count::0</p>
                </div>

            </div>
        </div>
    )
}