import React from "react";
import  LoginStyle from  './LoginStyle.css';
import { useState,useEffect } from "react";

import { Navigate } from "react-router-dom";
import { adobeIms} from "../services/AdobeIms.ts";
import { userStore } from "store/UserStore";

const Login=()=>{
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (adobeIms.isSignedInUser()) {
     
     
      console.log("adobeims" ,  adobeIms  )  
      setIsLogin(true)
    }

}   ,   [userStore.isImsInit]  );




 const signIn = ()=> {
    adobeIms.signIn();
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
