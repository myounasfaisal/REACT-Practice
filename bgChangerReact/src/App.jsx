import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (

<div 
  className="w-full h-screen relative flex items-center justify-center duration-200" 
  style={{ backgroundColor: color }}
>
  
  <div className="fixed bottom-10 flex gap-4 bg-slate-800 bg-opacity-90 px-6 py-4 rounded-2xl shadow-lg">
  
    <button 
      onClick={() => setColor("red")} 
      className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300"
    >
      Red
    </button>
    <button 
      onClick={() => setColor("yellow")} 
      className="px-4 py-2 text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring focus:ring-yellow-200"
    >
      Yellow
    </button>
    <button 
      onClick={() => setColor("blue")} 
      className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
    >
      Blue
    </button>
    <button 
      onClick={() => setColor("silver")} 
      className="px-4 py-2 text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-400 focus:ring focus:ring-gray-200"
    >
      Silver
    </button>
  </div>
</div>

  )
}

export default App
