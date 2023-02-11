import React, { useEffect } from 'react'
import { useState } from 'react'




export const Demo5 = () => {
    const [count,setCount]=useState(0);
   

    const increase=()=>{
         setCount(count+1)
         return 5
    }
    const decrease=()=>{
         setCount(count-1)
         return 6
    }




  return (
    <div>

        <h1>My Name is Arun</h1>
        <br/>
        <h3>Counter is {count}</h3>
        <button onClick={increase} type='button' id="button" className='btn btn-primary mx-4' >increment</button>
        
        <button onClick={decrease} type='button' id="button" className='btn btn-primary' >Decrement</button>

       <increase/>

    </div>
  )
}
