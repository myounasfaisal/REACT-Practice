import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


export default function Github() {
    // const[data,setData]=useState(0);
    // const [avatar,setAvatar]=useState('');
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/myfAirCS')
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data.followers)
    //         setAvatar(data.avatar_url)
    // })
    // },[])
    const data=useLoaderData();
  return (
    <div className='text-center text-3xl bg-slate-700 h-20 p-30'>Github Followers : {data.followers} 
    <img src={data.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full inline-block ml-4" />
    </div>
  )
}

export const githubInfoLoader=async()=>{
    const data=await fetch('https://api.github.com/users/myfAirCS')

    .then((res)=>res.json());
    
    return data;
    }



    