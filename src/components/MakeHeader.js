import { MenuTrigger,Menu,Image,Flex ,Link} from "@adobe/react-spectrum"
import React from "react"
import User from '@spectrum-icons/workflow/User';
import {Header,Provider,defaultTheme,onAction,ActionButton,ActionMenu,Item,ListBox}from '@adobe/react-spectrum'
import header from './header.css'
import { logout } from "services/AdobeIms";
import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import { adobeIms } from "services/AdobeIms";



const MakeHeader=()=>{
    const [isLogin, setIsLogin] = useState(true);

    const signOut = () => {
        logout();
        setIsLogin(true)
      }
    

    useEffect(() => {
    
        if (!adobeIms.isSignedInUser()) {
        
          // updateUserProfile();
          
          setIsLogin(false)
        }
    
    }, []  )  ;

    return(
        !isLogin ? (
            <Navigate to="/" replace={true}  />
          ) :   <> 
  
       <div>









          <Provider theme={defaultTheme}>
            <Header > 
                <div className="header-background"  >
                {/* style={{backgroundColor:'#F4F4F4'}} */}



            <Flex direction="column"  height="19px" >
            <div className="adobe-icon" >
            {/* style={{width:'32px',marginLeft:'19px',marginTop:'16px'} */}
            <Image src="https://spectrum.adobe.com/static/adobe_logo_spectrum_site.svg" alt="Sky and roof"  />
            </div>

            </Flex>



             <div className="c1" >
             {/* tyle={{display:'inline-block', fontSize: '15px'} */}
            <a id="apo-console"  tag='a' href="/home" > APO Console   </a>

            {/* style={{display:'inline-block',fontSize:'18px',marginLeft:'70px',textDecoration:'none',color: 'red',fontWeight:'bold'
        }} */}

            </div>


        <div className="email-suppresion" >
        {/* style={{display:'inline-block',fontSize:'18px',fontWeight:'bold',color:'white',marginLeft:'44px'}} */}

         <a id="email" href="email-suppresion" > Email Suppression </a>
         {/* style={{textDecoration:'none',color:'#747474'}} */}

        </div>

        <div className="bulk-email-sent">
        {/* style={{display:'inline-block',fontSize:'18px',fontWeight:'bold',color:'white',marginLeft:'34px'} */}
         <a id="bulk" href="bulk-email-sent" > Bulk Email Sent </a>
         {/* style={{textDecoration:'none',color:'#747474'}} */}
         </div>







   <div className="user-icon">
   
<MenuTrigger>

  <ActionButton>
    <User/>
  </ActionButton>

  <Menu >

   <Item   key="logout"> <button className="btb btn-outline" tag="a" onClick={signOut}  href="/logout" > Logout</button></Item>
  </Menu>
  
</MenuTrigger>








</div>
</div>

            </Header>
            </Provider>


        </div>
        </>
    )


}

export default MakeHeader;
