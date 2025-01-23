import { useContext } from "react";
import { createContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(Statement,id)=>{},
    toggleTodo:()=>{},
    deleteTodo:()=>{}
})

export const TodoContextProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}