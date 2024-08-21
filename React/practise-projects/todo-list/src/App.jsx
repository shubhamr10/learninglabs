import { useState } from "react";
import Heading from "./components/heading/heading.component";
import Input from "./components/input/input.component";
import List from "./components/list/list.component";
import useTodoList from "./custom-hooks/useList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setTodoList] = useTodoList();

  const addToListHandler = () => {
    if(todo === ""){
      return;
    }
      const newTask = {
        title: todo,
        completed:false
      }

      setTodoList([...list, newTask])
      setTodo("");
  }


  const removeFromList = (id) => {
    const updatedList = list.filter((item, index) => index !== id);
    console.log(updatedList)
    setTodoList(updatedList);
  }

  const onTaskCompleted = id => {
    const updatedList = list.map((item, index) => index !== id ? item : {...item, completed: true});
    console.log(updatedList)
    setTodoList(updatedList);
  }

  return (
    <main className="main-container">
      <Heading/>
      <Input todo={todo} setTodo={setTodo} addToListHandler={addToListHandler} />
      <List list={list} removeFromList={removeFromList} onTaskCompleted={onTaskCompleted} />
    </main>
  )
}

export default App;

{/* <div>
<h1>Welcome to React todo</h1>
<div>
  <input type="text" name="tdod" id="" />
  <button>add</button>
</div>
<div>
    <div className="list">
      <input type="checkbox" name="" id="" />
      <span>Todo item 1</span>
      <span>🗑️</span>
    </div>
</div>
</div> */}