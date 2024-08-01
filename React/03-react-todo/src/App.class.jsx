import React from "react";
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos:[],
      todo:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

   handleChange(e){
    if(e.target.value != ""){
      this.setState({
        todo:e.target.value
      })
    }
  }

   handleClick(){
    const { todo, todos } = this.state;
    if(todo == ""){
      return 0;
    }
    todos.push(todo);
    console.log(todos)
    this.setState({
      todos:todos,
      todo:""
    })
  }

  handleRemove(index){
    const {todos} = this.state;
    todos.splice(index, 1);
    this.setState({
      todos:todos,
      todo:""
    })
  }

  render(){
    console.log(this.state)
    return(
      <main>
        <div className="card">
          <h1 style={{textAlign:"center"}}>Your todo application</h1>
          <InputBox value={this.state.todo} onChange={this.handleChange} onClick={this.handleClick}/>
          <DisplayTodos items={this.state.todos} onRemove={this.handleRemove}/>
        </div>
      </main>
    )
  }
}


export function InputBox({ value, onChange, onClick}){
  return (
    <div className="input-area">
      <input type="text" value={value} onChange={onChange}  />
      <button onClick={onClick}>Add</button>
    </div>
  )
}

export function DisplayTodos({items, onRemove}){
  return (
    <div className="display-list">
      {
        items.map((item, index) => <Todo key={index} item={item} index={index} onRemove={onRemove}/>)
      }
    </div>
  )
}

export function Todo({item, index,  onRemove}){
  return (
    <div className="display-item">
      <div>{`[${index+1} ] `+item}</div>
      <button onClick={ e => onRemove(index)}>Delete</button>
    </div>
  )
}


export default App;