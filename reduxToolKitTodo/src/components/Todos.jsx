import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../redux/todo/todoSlice';


function Todos() {
const todos=useSelector((state)=>state.todoState.todos);
const dispatch=useDispatch();
const [editableId, setEditableId] = useState(null); 

  return (
    <>
    <div className="text-2xl font-semibold text-center text-gray-200 mb-6">Todos</div>
    <ul className="list-none space-y-4">
      {todos.map((todo) => (
        <li
          className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          key={todo.id}
        >
          <input
            type="text"
            onChange={(e) => dispatch(updateTodo({ id: todo.id, text: e.currentTarget.value }))}
            value={todo.text}
            readOnly={editableId !== todo.id}
            className={`text-white text-lg w-full bg-transparent focus:outline-none ${
              editableId === todo.id
                ? "bg-gray-700 border-2 border-yellow-500 px-2 py-1 rounded-md"
                : "outline-none"
            }`}
          />
          <div className="flex items-center space-x-2 ml-4">
            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="flex items-center justify-center text-white bg-red-600 hover:bg-red-700 py-2 px-3 rounded-md shadow-sm transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            {/* Edit Button */}
            <button
              className={`text-white font-medium py-2 px-4 rounded-md shadow-sm transition-all duration-300 ${
                editableId === todo.id
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              onClick={() => {
                if (editableId === todo.id) {
                  dispatch(updateTodo({ id: todo.id, text: todo.text }));
                  setEditableId(null);
                } else {
                  setEditableId(todo.id);
                }
              }}
            >
              {editableId === todo.id ? "Save" : "Edit"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  </>
  
  )
}

export default Todos