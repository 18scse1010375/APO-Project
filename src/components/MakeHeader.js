import { MenuTrigger, Menu, Image, Flex } from "@adobe/react-spectrum"
import React from "react"
import User from '@spectrum-icons/workflow/User';
import { Header, Provider, defaultTheme, ActionButton, Item } from '@adobe/react-spectrum'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import header from './header.css'
import { logout } from "services/AdobeIms";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { adobeIms } from "services/AdobeIms";

const MakeHeader = () => {
  const [isLogin, setIsLogin] = useState(true);

  const signOut = () => {
    logout();
    setIsLogin(true)
  }
  const signout = 'logout';
  const actionOnMenu = (key) => {
    if (key === signout) {
      signOut()
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
                <div className="adobe-icon" >
                  <Image src="https://spectrum.adobe.com/static/adobe_logo_spectrum_site.svg" alt="Sky and roof" />
                </div>

              </Flex>

              <div className="APO" >
                <a id="apo-console" href="/home" > APO Console   </a>
              </div>

              <div className="email-suppresion" >
                <a id="email" href="email-suppresion" > Email Suppression </a>
              </div>

              <div className="bulk-email-sent">
                <a id="bulk" href="bulk-email-sent" > Bulk Email Sent </a>
              </div>

              <div className="user-icon">

                <Provider>
                  <MenuTrigger>
                    <ActionButton aria-label="Icon only" href="/logout" >
                      <User />
                    </ActionButton>

                    <Menu onAction={(key) => actionOnMenu(key)}  >
                      <Item key={signout} >Logout</Item>
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

























