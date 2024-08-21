import { useState, useEffect } from "react";

const useTodoList = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        const todoList = localStorage.getItem("todo-list");
        if(todoList){
            console.log(todoList,"asdasd")
            setList(JSON.parse(todoList));
        }
    },[]);

    const setTodoList = (newList) => {
        localStorage.setItem("todo-list", JSON.stringify(newList));
        setList(newList);
    }

    return [list, setTodoList];
}

export default useTodoList;