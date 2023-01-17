import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import LoginStyle from './LoginStyle.css';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { adobeIms } from "../services/AdobeIms.ts";
import { userStore } from "store/UserStore";
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (adobeIms.isSignedInUser()) {

      setIsLogin(true)
    }

  }, [userStore.isImsInit]);

  const signIn = () => {
    adobeIms.signIn();
  }
  return (

    isLogin ? (
      <Navigate to="/home" replace={true} />
    ) : <>

      <div id="login-page" className="text-center" >
        <p>Welcome to APO Manager Console</p>
        <div id="login-button">
          <Provider theme={defaultTheme}>
            <Button variant="accent" onClick={signIn} > Login </Button>
          </Provider>
        </div>
      </div>
    </>
  )
}
export default Login;
