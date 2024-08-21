import { useEffect, useState } from "react";
import Heading from "./components/heading/heading.component";
import Input from "./components/input/input.component";
import List from "./components/list/list.component";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const addToListHandler = () => {
    if(todo === ""){
      return;
    }
      const newTask = {
        title: todo,
        completed:false
      }

      setList([...list, newTask])
      setTodo("");
  }

  useEffect(()=>{
    const list = JSON.parse(localStorage.getItem("todo-list"));
    if(list){
      setList(list);
    }
  },[]);
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("todo-list", JSON.stringify(list));
  }, [list]);

  const removeFromList = (id) => {
    const updatedList = list.filter((item, index) => index !== id);
    console.log(updatedList)
    setList(updatedList);
  }

  const onTaskCompleted = id => {
    const updatedList = list.map((item, index) => index !== id ? item : {...item, completed: true});
    console.log(updatedList)
    setList(updatedList);
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