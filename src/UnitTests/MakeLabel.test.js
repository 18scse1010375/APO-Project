/* eslint-disable no-undef */
import {render, screen,fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import React from 'react'
import '@testing-library/jest-dom'
import { mount, shallow } from "enzyme";

import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import MakeLabel from 'components/MakeLabel'
import App from '../App';
import { wrap } from 'module';

jest.mock('components/MakeHeader');

describe("Check the functionality of Email Suppression" ,()=>{
    const badRoute = '/email-suppresion'
    

     

     

    test("Verify <Email Suppression/> is successfully rendered or not" ,()=>{

        let wrapper=shallow(<MakeLabel/>);
        expect(wrapper).toBeDefined();
    });


    test("<MakeLabel/>" ,()=>{

        render(
            <MemoryRouter initialEntries={[badRoute]}>
              <App />
                
            </MemoryRouter>
          )
      
        
          fireEvent.mouseOver(screen.getByTestId("tooltip"));   //verification for the Tooltip title  in UI
          expect(
            screen.findByText("Please Enter Email to remove from Suppression")
          )
        
        expect(screen.getByTestId("email-input")).toBeInTheDocument()   //verification for the input box
          
        expect(screen.getByTestId("email-input")).toHaveAttribute('type', 'email')
        expect(screen.getByTestId("tooltip")).toBeInTheDocument()     //verification for the ToolTip box
        expect(screen.getByTestId("submit")).toBeInTheDocument() //Verification for the Submit Button
        expect(screen.getByTestId("submit").textContent).toEqual("Submit")   //Check the text content of Button
        expect(screen.getByTestId("submit").getAttribute("disabled")).toBe(null)  //Check Submit Button is active or not
        




    } )


    test("Backend function is calling" , ()=>{
      const badRoute="/email-suppresion"

      const {debug}=render(
        <MemoryRouter initialEntries={[badRoute]}>
          <App />
        </MemoryRouter>
      )

      debug();

    const inputEl = screen.getByTestId("email-input");
    console.log(inputEl)
     userEvent.type(inputEl, "test@mail.com");
    console.log("Value are:" , document.getElementById("email-box").value)
 
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
  });




  })