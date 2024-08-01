import React, { useState } from "react";
import "./App.css";
import { InputBox, DisplayTodos } from "./App.class";

export default function App(){
    const [todos, handleTodos] = useState([]);
    const [todo, handleTodo] = useState([]);

    const handleclick = () => {
        handleTodos([...todos, todo]);
        handleTodo("");
    }

    const handleRemove = (index) => {
        const filterd = todos.filter((_, i) => i !== index);
        handleTodos(filterd);
    }
    return (
        <main>
            <div className="card">
                <h1 style={{textAlign:"center"}} >Your todo application</h1>
                <InputBox value={todo} onChange={(e) => handleTodo(e.target.value)} onClick={handleclick}></InputBox>
                <DisplayTodos items={todos} onRemove={handleRemove}></DisplayTodos>
            </div>
        </main>
    )

}