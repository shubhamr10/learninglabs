import { useState } from "react"; 
import Input from "./component/input/input.component";
import List from "./component/list/list.component";

const App = () => {
  const [lists, setList] = useState([]);
  const addTodo = (todo) => {
    setList([...lists, todo]);
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
              lists.map((todo, index) => <List key={index} completed={todo.completed} todo={todo.title} index={index} deleteTask={()=>{}} completedToggle={()=>{}} />)
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;