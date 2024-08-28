import { useContext } from "react"; 
import Input from "./component/input/input.component";
import List from "./component/list/list.component";
import { TodoContext } from "./context/TodoContext";

const App = () => {
  const { lists, setList } = useContext(TodoContext); 
  const addTodo = (todo) => {
    setList([...lists, todo]);
  }
  const deleteTask = (index) => {
    setList([...lists.filter((list, i)=> i !== index)])
  }
  const completedToggle = index => {
    setList([...lists.map((list, i) => i === index ? { ...list, completed:!list.completed }  : list)])
  }
  return (
    <main>
      <div className="main-container">
        <h1>React Todo list</h1>
        <Input addTodo={addTodo} />
        <div className="list-container">
          <h2>Todos</h2>
          <div className="lists">
            {
              lists.map((todo, index) => <List key={index} completed={todo.completed} todo={todo.title} index={index} deleteTask={deleteTask} completedToggle={completedToggle} />)
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;