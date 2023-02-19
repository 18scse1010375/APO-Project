/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState,useEffect } from "react";


export const ServerTesting = ({url}) => {
    const [state,setState]=useState([])

    useEffect(()=>{
        axios.get(url).then(
            (Response)=>{console.log(Response.data);   setState(Response.data)     } , 
            (error)=>console.log(error)
        )
    } , []    ) 
  return (
    <div>

        {/* <h1>Your Server is testing</h1> */}
        {/* state.map((item)=>{<h1>  item.id </h1> }  ) */}
        

       { state.length ? <p data-testid="title"> Data is comming </p>   :  <h2>Loading...</h2>   } 
        
    </div>
  )
}



