import { createContext } from "react";
import useTodo from "../custom-hooks/useTodo";

export const TodoContext = createContext({
    list:[],
    setList:()=>{}
})

export const TodoProvider = ({children}) => {
    const [list, setList] = useTodo();
    const value = { lists:list, setList };

    return <TodoContext.Provider value={value} >{ children }</TodoContext.Provider>
}