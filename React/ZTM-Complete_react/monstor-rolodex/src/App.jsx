import { Component } from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      search:""
    }
  }

  componentDidMount(){
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

  onSearchChange = (event)=>{ this.setState(()=>{
    return {
      search:event.target.value
    }
  },()=>{
    console.log(this.state.search);
  })}
  render(){
    const { monsters, search } = this.state;
    const { onSearchChange } = this;
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox onSearchChange={onSearchChange} placeholder="search monsters" className="search-box" />
        <CardList monsters={monsters.filter(monster => monster.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))} />
      </div>
    );
  }
}


export default App;
