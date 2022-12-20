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
        <h2 className="apo">APO Console Management Center</h2>
        <p>Welcome to APO Console.You can discover,create and manage communications across email,notification and web</p>
        <div style={{ width: '10px', marginLeft: '590px' }} >
          <Provider theme={defaultTheme}>
            <Button variant="accent" onClick={signIn} > Login </Button>
          </Provider>
        </div>
      </div>
    </>
  )
}
export default Login;




















