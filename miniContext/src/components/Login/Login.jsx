import React,{ useContext, useState }  from 'react';
import UserContext from '../../context/UserContext.js';

function Login() {
const [username,setUsername]=useState("MYF");
const [password,setPassword]=useState("");
const {setUser}=useContext(UserContext);



  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Username'
         value={username}  onChange={(e)=> setUsername(e.target.value)} />
        <br/>
        <input type="password" placeholder='Password'
         value={password} onChange={e=>setPassword(e.target.value)}
          />
        <button onClick={()=>setUser({username,password})}>Login</button>
    </div>
    
  )
}

export default Login