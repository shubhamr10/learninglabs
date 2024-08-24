import { useEffect } from "react";
import { useState } from "react";

const useTodo = () => {
    const [list, setList] = useState([]);

    const updateList = (updatedList) => {
        setList(updatedList);
        saveToLocalStorage(updatedList)
    }

    useEffect(()=>{
        getItemsFromLocalStorage();
    },[])

    const saveToLocalStorage = (listToSave) => {
        localStorage.setItem("todo-list", JSON.stringify(listToSave));
    }

    const getItemsFromLocalStorage = () => {
        const fetchedList = JSON.parse(localStorage.getItem("todo-list"));
        setList(fetchedList);
    }

    return [list, updateList];
}

export default useTodo;