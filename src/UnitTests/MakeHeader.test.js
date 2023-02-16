/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import {fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {MemoryRouter,Link, useParams} from 'react-router-dom'
import { ActionButton,Image,Item } from '@adobe/react-spectrum'
import User from '@spectrum-icons/workflow/User';




import App from '../App';


import '@testing-library/jest-dom';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MakeHeader from 'components/MakeHeader';
import { Child } from '../components/UrlPath';

import { useEffect } from 'react';
 import {LocationDisplay,add} from '../components/UrlPath';
// import { LocationDisplay } from '../App';
import Router from 'react-router-dom'

// jest.mock("react")




test("<MakeHeader>" ,()=>{

   const wrapper=shallow(<MakeHeader/>)
   console.log(wrapper.debug())


   // expect(wrapper.find("Image")).toBeInTheDocument();
   // expect(wrapper.contains()
   // expect(wrapper.find('.apo1')).to.have.lengthOf(1);
   expect(wrapper.contains( <Link className="email1" id="email" to="/email-suppresion" > Email Suppression </Link>)).toBeTruthy();
   expect(wrapper.contains( <Link id="bulk" to="/bulk-email-sent" > Bulk Emails </Link>)).toBeTruthy();
   // expect(wrapper.contains( <ActionButton aria-label="Icon only" href="/logout" > <User /> </ActionButton> )) .toBeTruthy();

   expect(wrapper.contains( <Link className="apo1"  id="apo-console" to="/home" > APO Console </Link> )).toBeFalsy();
 
   expect(wrapper.contains(<div className="adobe-icon" data-testid="warning-icon" >
   <Image src="https://spectrum.adobe.com/static/adobe_logo_spectrum_site.svg" alt="Sky and roof" />
 </div>    )).toBeTruthy();

 expect(wrapper.exists(".APO")).toEqual(true)
 expect(wrapper.exists(".email-suppresion")).toEqual(true)
 expect(wrapper.exists(".bulk-email-sent")).toEqual(true)

expect(wrapper.containsAllMatchingElements( [ <Link className="apo1" key="key1"  id="apo-console" to="/home" > APO Console   </Link> , <Link key="key2" className="email1" id="email" to="/email-suppresion" > Email Suppression </Link> , <Link key="key3" id="bulk" to="/bulk-email-sent" > Bulk Emails </Link> ] )).toEqual(true)

expect(wrapper.find(".APO").length).toBe(1)  
expect(wrapper.find(".email-suppresion").length).toBe(1)  
expect(wrapper.find(".bulk-email-sent").length).toBe(1) 

expect(wrapper.find(".adobe-icon").length).toBe(1) 
expect(wrapper.find(".adobe-icon").length).toBe(1) 
expect(wrapper.find(".user-icon").length).toBe(1) 


 wrapper.find(".email1").simulate("click");  
 



wrapper.find(".user-icon").simulate("click")

// wrapper.find("Item").simulate("click")

expect(wrapper.contains(  <Item key="exit">Logout</Item> )).toBeTruthy();







// let w=shallow( <LocationDisplay/> )
// console.log(w.debug())


// // const p=<LocationDisplay/>
// console.log("p=",p)
// console.log(document.getElementById("bulk").innerHTML)

  // expect(screen.getByTestId("apo1")).toBeInTheDocument()
    // const wrapper=shallow(<MakeHeader/>)
    // console.log(wrapper.debug())
    //  wrapper.find(".apo1").simulate('click')

    //  expect(wrapper.find("location-display").first().text()).toEqual("/home")
    
    // wrapper.find(".email1").simulate('click')

    // fireEvent.click(screen.getByTestId("email-link"))

    //  expect(screen.getByTestId("location-display")).toHaveTextContent("home")  //assert for the email-suppression page is rendered or not



   

    // expect(screen.getByTestId("location-display")).toHaveTextContent("/home")
    // expect(screen.getByTestId("location-display")).toHaveTextContent("email-suppresion")

    
})


    

    