import React from "react";
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import  LoginStyle from  './LoginStyle.css';
import { useState,useEffect } from "react";

import { Navigate } from "react-router-dom";
import { adobeIms,logout } from "../services/AdobeIms.ts";
import { Header } from "Header";
import { userStore } from "store/UserStore";

const Login=()=>{
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    console.log("adobeims" ,  adobeIms  )
    console.log("adobeIms.signIn()"  ,     adobeIms.isSignedInUser()    )

    if (adobeIms.isSignedInUser()) {
      // updateUserProfile();
     
      console.log("adobeims" ,  adobeIms  )  
      setIsLogin(true)
    }

}, [userStore.isImsInit]);



const signOut = () => {
  logout();
  setIsLogin(false)
}

  const signIn = ()=> {
    adobeIms.signIn();
 // window.location('/home');
  }
    return(

        isLogin ? (
          <Navigate to="/home" replace={true}  />
        ) :   <> 

<div id="login-page" className="text-center" >
      
            <h2 className="apo">APO Console Management Center</h2>
           

            <p>Welcome to APO Console.You can discover,create and manage communications across email,notification and web</p>
              <button onClick={signIn} href="user" className="btn btn-primary">Login</button>
              </div>

              </>

)
}

export default Login;
