import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function TodoForm() {
    const[Statement,setStatement]=useState("");
    const{addTodo}=useTodo();

    const addItem=()=>{
  
        if(!Statement)return;
        addTodo({Completed:false,Statement});
        setStatement("");
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault;
                
            }}  className="flex">
            <input
                onChange={(e)=>{
                    setStatement(e.currentTarget.value);
                }}
                value={Statement}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button  onClick={(e)=>{
                e.preventDefault();
                addItem(Statement)
            }}
            
            type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            
                Add
            </button>
        </form>
    );
}