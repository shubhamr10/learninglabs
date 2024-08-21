const List = ({list, removeFromList, onTaskCompleted}) => {
    return (
        <div className="list-container">
            <div className="heading">
                <span>Your todos</span>
            </div>
            <div className="list">
                {
                    list && list.map((item, index) => (<div key={index} className="item">
                        <input type="checkbox"  checked={item.completed} onChange={() => onTaskCompleted(index)} />
                        <span className="title">{item.title}</span>
                        <span className="delete" onClick={()=> removeFromList(index)}>🗑️</span>
                    </div>))
                }
            </div>
        </div>
    )
}

export default List;