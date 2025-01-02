import { useState } from 'react'

import './App.css';
import { useCallback } from 'react';
import { useEffect } from 'react';


function CodeGen(){
const [length,setLength]=useState(8);
const [allowNumbers,setAllowNumbers]=useState(false);
const [allowCharacters,setAllowCharacters]=useState(false);
const [password,setPassword]=useState('7688');

const generatePassword=useCallback(()=>{

  let pass='';
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
  if (allowNumbers) str+='0123456789';
  if (allowCharacters) str+=`"!@~#$%^&*()_+=.,><?/;"`;

  for (let index = 1; index <= length; index++) {
 let rand=Math.floor(Math.random()*str.length);
 pass+=str[rand]; 

 
  }
  setPassword(pass);
  console.log(password);  
},[length,allowNumbers,allowCharacters,setPassword]);

useEffect((
)=>{generatePassword()},[length,allowNumbers,allowCharacters,setPassword,generatePassword]);

  return(
  <div className='bg-black w-100% h-screen flex flex-col justify-center items-center  text-white w-screen'>
      
      <form className='flex flex-col justify-center items-center  w-[60%]  h-[50%] rounded-lg bg-zinc-400' >
      <h1 className='text-center text-3xl mb-10'>Password Generator</h1>
<div className='flex mb-2 gap-4'>        
<input type="text"  readOnly value={password} className='bg-slate-500' placeholder='Password' /> 
<input className='bg-slate-500 px-4 py-2 rounded-sm cursor-pointer' type="button" value="Copy" />
        </div>

<div>
  <div className='flex gap-10'>
        <input  type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(parseInt(e.target.value))}} />
        length ( {length} )
        </div>
        <div>
        <input type="checkbox" className='mr-2' onChange={()=>{
          setAllowNumbers(isNumber=>!isNumber);
           
        }}  checked={allowNumbers}/>
        Numbers
        </div>
        <div>
        <input type="checkbox" className='mr-2' onChange={()=>{
          setAllowCharacters(isCharacter=>!isCharacter);
        }} checked={allowCharacters} />
          Characters
        </div>
        
 </div>
      </form>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
<CodeGen/>
  )
}

export default App;


