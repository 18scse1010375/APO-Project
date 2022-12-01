import React from "react";
import {Button, Container,Nav,NavItem,NavLink} from 'reactstrap'


const TabBar=()=>{
    return(
        <div style={{display:"inline-block"}}>
  <Nav>

   

  <NavItem>

<NavLink
  active
  href="/home">
 <h4> APO Console</h4>
</NavLink>

</NavItem>



  <NavItem>
    <NavLink href="email-suppression">
    <h4>  Email Suppression </h4>
    </NavLink>
  </NavItem>



  

  <NavItem>
    <NavLink
      href="bulk-email-sent"
    >
      <h4>  Bulk Email Sent </h4>
    </NavLink>
  </NavItem>

</Nav>
      

       </div>


    )
}

export default TabBar;