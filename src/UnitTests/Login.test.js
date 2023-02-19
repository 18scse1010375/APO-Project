/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import { render, screen , fireEvent } from '@testing-library/react';
// import Demo from './Demo';
import { shallow } from "enzyme";
import React from 'react';
import App from 'App';

import { Router, Route } from "react-router";
import { createMemoryHistory } from 'history';



import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Login from 'components/Login';
import { BrowserRouter } from 'react-router-dom';
configure({ adapter: new Adapter() });



describe("<Login/>", () => {
  let component

    // test("check the default component url path" , ()=>{
    //   const history = createMemoryHistory();
    //   render(
    //     <Router history={history}>
    //       <App signedInUser={null} />
    //     </Router>
        
    //   );
    //   // expect(history.location.pathname).toBe("/login");


    // }  )

    // beforeEach(() => {
    //    component = shallow(< Login/>)
    // })
  
    // test('is initially active: false', () => {
    //   component.state('isLogin').should.be.false
    //   // component.find('div.fade-in').prop('className').should.equal('fade-in')
    // })






    test('render the title of an application', () => {
      render(<Login/>);
   
      const titleEl = screen.getByText(/Welcome to APO Manager Console/);
      expect(titleEl).toBeInTheDocument();
    });

    test('render buttons', () => {
        render(<Login/>);
     
        const button1 = screen.getByTestId("login");

     
        expect(button1).toBeInTheDocument();   //verification for the wheather login button is present or not
        expect(button1.textContent).toEqual(" Login ");
        expect(button1.getAttribute("disabled")).toBe(null)    //To check login button is enabled or not
 
        // fireEvent.click(button1)  //verification to check that login button is clcikable or not


        
       
    
      });


      test("Taking Snapshot of Login Component", ()=>{
        const wrapper=shallow( <Login/> )
        expect(wrapper).toMatchSnapshot();
        
        



      } )

})