import { MenuTrigger, Menu, Image, Flex } from "@adobe/react-spectrum"
import React from "react"
import User from '@spectrum-icons/workflow/User';
import { Header, Provider, defaultTheme, ActionButton, Item } from '@adobe/react-spectrum'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import header from './header.css'
import { logout } from "services/AdobeIms";
import { useState, useEffect } from "react";
import { Navigate} from "react-router-dom";
import { adobeIms } from "services/AdobeIms";
import { Link } from "react-router-dom"


// export const LocationDisplay = () => {
//   const location = useLocation()

//   return <div data-testid="location-display">{location.pathname}</div>
// }

const MakeHeader = () => {
  const [isLogin, setIsLogin] = useState(true);

  const signOut = () => {
    logout();
    setIsLogin(true)
  }

  const exit = 'exit';
  const actionOnMenu = (key) => {
    if (key === exit) {

      signOut();
    }
  }



  useEffect(() => {

    if (!adobeIms.isSignedInUser()) {
      setIsLogin(false)
    }

  }, []);

  return (
    !isLogin ? (
      <Navigate to="/" replace={true} />
    ) : <>

      <div>

        <Provider theme={defaultTheme}>
          <Header >
            <div className="header-background">
              <Flex direction="column" height="19px" >
                <div className="adobe-icon" data-testid="warning-icon" >
                  <Image src="https://spectrum.adobe.com/static/adobe_logo_spectrum_site.svg" alt="Sky and roof" />
                </div>

              </Flex>

              <div className="APO" >
                <Link className="apo1"  id="apo-console" to="/home" > APO Console   </Link>
              </div>

              <div className="email-suppresion" >
                <Link className="email1" id="email" to="/email-suppresion" > Email Suppression </Link>
              </div>

              <div className="bulk-email-sent">
                <Link  id="bulk" to="/bulk-email-sent" > Bulk Emails </Link>
              </div>

              <div className="user-icon">
                <Provider>
                  <MenuTrigger>

                    <ActionButton aria-label="Icon only" href="/logout" >
                      <User />
                    </ActionButton>


                    <Menu onAction={(key) => actionOnMenu(key)}>


                      <Item key="exit">Logout</Item>

                    </Menu>
                  </MenuTrigger>




                </Provider>
              </div>

            </div>
          </Header>
        </Provider>
        
      </div>
    </>
  )


}

export default MakeHeader;
