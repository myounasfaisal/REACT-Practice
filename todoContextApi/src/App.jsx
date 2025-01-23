import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev)=> [{id:Date.now(),...todo},...prev]);
  }

  const updateTodo = (Statement,id) => {
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id==id ? {...prevTodo,Statement} : prevTodo));
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todos)=>todos.id!==id));
  }

  const toggleTodo=(id)=>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id==id ?{...prevTodo,Completed:!prevTodo.Completed} :prevTodo ) )
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length >0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoContextProvider value={{ addTodo, updateTodo, toggleTodo, todos, deleteTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */
              todos.map((items)=>{
                return(
                  <div key={items.id} className='w-full'>
                    <TodoItem todo={items} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
