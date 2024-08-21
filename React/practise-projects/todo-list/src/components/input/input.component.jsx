const Input = ({ todo, setTodo, addToListHandler }) => {
    const onChangeHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        setTodo(e.target.value);
    }

    const onClickHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        addToListHandler();
    }
    return (
        <div className="input-container">
            <input type="text" name="todo" value={todo} placeholder="Add your todo" onChange={onChangeHandler} />
            <button onClick={onClickHandler}>Add</button>
        </div>
    )
}

export default Input;