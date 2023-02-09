/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { ListGroupItem,ListGroup } from "reactstrap";

import MakeHeader from 'components/MakeHeader';


import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import App from 'App'
import { shallow } from "enzyme";
import Login from 'components/Login';

import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import MakeCard from 'components/MakeCard';
import { Link } from 'react-router-dom';

jest.mock('components/MakeHeader');


describe("<MakeCard>", ()=>{   
    const badRoute="/home"
test('landing on a Home', () => {
    
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
       
      </MemoryRouter>
    )
    // assert
    expect(screen.getByTestId("card1")).toBeInTheDocument();  //verify the  Card1 is successfully rendered or not
    expect(screen.getByTestId("card2")).toBeInTheDocument();  //verify the  Card2 is successfully rendered or not

    expect(screen.getByTestId("email-link")).toBeInTheDocument();   //verify the email suppression button inside card
   expect(screen.getByTestId("bulk-email-link")).toBeInTheDocument();   //verify the Bulk Email Sent button inside card
     
   

   expect(screen.getByTestId("Email-Icon")).toBeInTheDocument();   //verify the email icon components inside the card
   expect(screen.getByTestId("bulk-email-icon")).toBeInTheDocument();   //verify the Bulk-email-icon icon components inside the card
   


})

})




describe("<MakeHeader/>", () => {
        const badRoute = '/home'
    
        test("Check Components is successfully rendered or not",()=>{let wrapper=shallow(<MakeHeader/>) ; expect(wrapper).toBeDefined() } )
     
        test('Check the Home Components Elements of an application', () => {
            let wrapper=shallow(<MakeHeader/>) ;
    
            
         //asserts
          expect(wrapper.contains(  <div className="APO" > <Link id="apo-console" to="/home" >  APO Console  </Link> </div> ) )     //verify the APO Console  in UI
          expect(wrapper.contains( <div className="email-suppresion"> <Link id="email" to="/email-suppresion"> Email Suppression </Link> </div>))   //Verify the Email Suppression  in UI
          expect(wrapper.contains( <div className="bulk-email-sent"> <Link id="bulk" to="/bulk-email-sent" > Bulk Emails </Link> </div>  ))   //verify the Bulk Email Sent in UI
         });


})

















