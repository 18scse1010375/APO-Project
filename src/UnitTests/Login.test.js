/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import { render, screen , fireEvent } from '@testing-library/react';
// import Demo from './Demo';
import { shallow } from "enzyme";
import React from 'react';


import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from 'components/Login';
configure({ adapter: new Adapter() });

describe("<Login/>", () => {
 
    test('render the title of an application', () => {
      render(<Login/>);
   
      const titleEl = screen.getByText(/Welcome to APO Manager Console/);
      expect(titleEl).toBeInTheDocument();
    });

    test('render buttons', () => {
        render(<Login/>);
     
        const button1 = screen.getByTestId("login");

     
        expect(button1).toBeInTheDocument();
        expect(button1.textContent).toEqual(" Login ");
        expect(button1.getAttribute("disabled")).toBe(null)    //To check login button is enabled or not
 
        fireEvent.click(button1)  //verification to check that login button is clcikable or not


        
       
    
      });


      test("Taking Snapshot of Login Component", ()=>{
        const wrapper=shallow( <Login/> )
        expect(wrapper).toMatchSnapshot();
        
        



      } )

})