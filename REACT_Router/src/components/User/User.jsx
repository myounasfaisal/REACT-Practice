import React from 'react';
import { useParams } from 'react-router-dom';
export default function User() {
    const {userid} = useParams();
    return (

        <p className='text-center h-20 bg-slate-600 p-10'>User : {userid}</p>    
           
            );
}
