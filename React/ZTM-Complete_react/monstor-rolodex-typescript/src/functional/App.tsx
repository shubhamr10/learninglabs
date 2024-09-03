import React, { ChangeEvent, useEffect, useState } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "../App.css";
import { getData } from "./utils/data.utils";

// define a minimal type for monstor 
export type Monster = {
    id:string;
    name:string;
    email:string;
}

const App = () => {
    const [search, setSearch] = useState("");
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);
    const [field, setField] = useState("");

    useEffect(()=>{
        const fetchUsers = async () => {
            const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
            setMonsters(users);
        }
        fetchUsers();
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(users => setMonsters(users))
    },[]);

    useEffect(()=>{
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        });
        setFilterMonsters(newFilteredMonsters)
        console.log("effect")
    }, [monsters, search]);



    const onSetFeild = (event: ChangeEvent<HTMLInputElement>): void=>{
        setField(event.target.value.toLocaleLowerCase());
     }


    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void=>{
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