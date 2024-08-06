import { useEffect, useState } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "../App.css";

const App = () => {
    const [search, setSearch] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);
    const [field, setField] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setMonsters(users))
    },[]);

    useEffect(()=>{
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        });
        setFilterMonsters(newFilteredMonsters)
        console.log("effect")
    }, [monsters, search]);



    const onSetFeild = (event)=>{
        setField(event.target.value.toLocaleLowerCase());
     }


    const onSearchChange = (event)=>{
        setSearch(event.target.value.toLocaleLowerCase());
     }
    return (
        <div className="App">
          <h1 className="app-title">{field}</h1>
          <SearchBox onSearchChange={onSearchChange} placeholder="search monsters" className="search-box" />
          <br/>
          <SearchBox onSearchChange={onSetFeild} placeholder="enter title" className="search-box" />
          <CardList monsters={filteredMonsters} />
        </div>
      );
}

export default App;