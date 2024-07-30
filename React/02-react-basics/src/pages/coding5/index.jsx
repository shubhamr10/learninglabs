import { useRef } from "react";

export default function Coding5(){
    let ref = useRef(0);

    function handleClick(){
        ref.current = ref.current + 1;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto text-center">
                    <h3>Clicked + {ref.current}</h3>
                    <button onClick={handleClick}>Click me</button>
                    <p>No updation because ref does not trigger re-renders</p>
                </div>
            </div>
        </div>
    )
}