import { useState, useEffect } from "react";

const useTodoList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("todo-list", JSON.stringify(list));
      }, [list]);

    useEffect(()=>{
        const todoList = localStorage.getItem("todo-list");
        if(todoList){
            setList(JSON.parse(todoList));
        }
    },[]);

    const setTodoList = (newList) => {
        setList(newList);
    }

    return [list, setTodoList];
}

export default useTodoList;