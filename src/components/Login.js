import React from "react";
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import  LoginStyle from  './LoginStyle.css';

import { adobeIms,logout } from "../services/AdobeIms.ts";


const signIn = ()=> {
  adobeIms.signIn();
}

const signOut = () => {
  logout();
}

const Login=()=>{
    return(
        <div id="login-page" className="text-center" >

          

      
            <h2 className="apo">APO Console Management Center</h2>
           

            <p>Welcome to APO Console.You can discover,create and manage communications across email,notification and web</p>

              <Provider theme={defaultTheme}>
                <div className="sign-in">
                
              <Button onClick={signIn}  id="button"   tag='a' href="/user" variant="accent"  >   Sign In  </Button>
              <Button onClick={signOut}  id="button"   tag='a' href="/user" variant="accent"  >   Sign Out  </Button>
              </div>
              </Provider>
              </div>

)
}

export default Login;
