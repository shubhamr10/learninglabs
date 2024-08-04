import { Component } from "react";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      search:""
    }
    console.log("constructors");
  }

  componentDidMount(){
    console.log("componentDidMount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState(()=>{
        return {
          monsters: users
        }
      },()=>{
        console.log(this.state.monsters)
      }))
  }
  render(){
    
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters" onChange={(event)=>{console.log(event)}} />
        {
          this.state.monsters.map((monster, index) => (<div key={index}><h1>{monster.name}</h1></div>))
        }
      </div>
    );
  }
}


export default App;
