const List = ({ index, completed, deleteTask, todo, completedToggle  }) => {
    const onTaskCompletedToggle = () => {
        completedToggle(index);
    }

    const onDeleteTodoHandler = () => {
        deleteTask(index);
    }
    return (
        <div className="todo-container">
            <input type="checkbox" onChange={onTaskCompletedToggle} checked={completed} />
            <span className="title">{ todo }</span>
            <span className="delete-icon" onClick={onDeleteTodoHandler}>🗑️</span>
        </div>
    )
}

export default List;