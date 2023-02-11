import React, { useEffect } from 'react'
import { useState } from 'react'




export const Demo5 = () => {
    const [count,setCount]=useState(0);
   

    const Increase=()=>{
         setCount(count+1)
         return 5
    }
    const Decrease=()=>{
         setCount(count-1)
         return 6
    }




  return (
    <div>

        <h1>My Name is Arun</h1>
        <br/>
        <h3>Counter is {count}</h3>
        <button onClick={Increase} type='button' id="button" className='btn btn-primary mx-4' >increment</button>
        
        <button onClick={Decrease} type='button' id="button" className='btn btn-primary' >Decrement</button>

      

    </div>
  )
}
