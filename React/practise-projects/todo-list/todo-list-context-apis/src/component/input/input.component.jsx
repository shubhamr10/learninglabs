import { useState } from "react"

const Input = ({ addTodo }) => {
    const [text, setText] = useState("");
    const onChangeHandler = e => {
        setText(e.target.value);
    }
    const onAddTodoHandler = () => {
        const newTodo = {
            title:text,
            completed:false
        }
        addTodo(newTodo);
        setText("");
    }
    return (
        <div className="input-container">
            <input type="text" value={text} placeholder="Enter your tasks here." onChange={onChangeHandler} />
            <button onClick={onAddTodoHandler}>Add</button>
        </div>
    )
}

export default Input;