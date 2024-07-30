import React, { useRef } from "react";

function MyCustomInput(props){
    return <input {...props} />
}

export default function Coding4(){
    const inputRef = useRef(null);

    function handleInputFocus(){
        inputRef.current.focus();
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto text-center">
                    <MyCustomInput ref={inputRef}/>
                    <button onClick={handleInputFocus}>Click me</button>
                    <p>Cannot read properties of null</p>
                </div>
            </div>
        </div>
    )
}