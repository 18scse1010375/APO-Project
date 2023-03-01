/* eslint-disable react/jsx-key */
import React ,  {useState} from 'react'
import base_url from 'api-integration/Path'
import axios from 'axios'



 const ApiDemo = () => {

    const [state,setState]=useState([])


    const getDataFromServer=()=>{
        console.log("server is loading....")
    
        axios.get(`${base_url}/courses`).then(
            (Response)=>{console.log(Response.data) ; setState(Response.data)       } , 
            (error)=>console.log(error)  
        )
        
    } 





  return (
    <>
    <div data-testid="demo">ApiDemo</div>
    <button onClick={getDataFromServer}>Get Data from Server</button>
    <hr/>

    { 
        state.length ? state.map(  (item)=><h1> {item.id} {item.title}  {item.description}    </h1>   )  :     "Not Available"   

    }



    

    </>
    
  )
}


export default ApiDemo