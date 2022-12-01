import React from "react";
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import  LoginStyle from  './LoginStyle.css';

const Login=()=>{
    return(
        <div id="login-page" className="text-center" >

      {/* style={{marginTop:'170px'} */}
            <h2 className="apo">APO Console Management Center</h2>
            {/* style={{fontSize:'2.25rem'} */}
               
            <p>Welcome to APO Console.You can discover,create and manage communications across email,notification and web</p>
            
              <Provider theme={defaultTheme}>
                <div className="sign-in">
                {/* style={{width:'100%',color:'ye'} */}
              <Button id="button"   tag='a' href="/user" variant="accent"     onPress={() => alert('Hey there!')} >   Sign In  </Button>
              </div>
              </Provider>
              </div>

)
}

export default Login;
             

              
              
        
    

       