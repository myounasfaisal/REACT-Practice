import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/todo/todoSlice';


function AddTodo() {
    const [input,setInput]=useState("");
    const dispatch=useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim(); 
        if (trimmedInput) {
          dispatch(addTodo(trimmedInput)); 
          setInput(""); 
        }
      };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center space-x-3 mt-12 mx-auto max-w-lg">
  <input
    type="text"
    className="bg-gray-900 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-300 ease-in-out w-full shadow-sm"
    placeholder="Enter a Todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button
    type="submit"
    className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
  >
    Add Todo
  </button>
</form>

  )
}

export default AddTodo