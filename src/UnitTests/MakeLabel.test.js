/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
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
        
        
        
        expect(screen.getByTestId("input-box")).toBeInTheDocument()     //verification for the input box
        expect(screen.getByTestId("tooltip")).toBeInTheDocument()     //verification for the ToolTip box
        expect(screen.getByTestId("submit")).toBeInTheDocument() //Verification for the Submit Button
        expect(screen.getByTestId("submit").textContent).toEqual("Submit")   //Check the text content of Button
        expect(screen.getByTestId("submit").getAttribute("disabled")).toBe(null)  //Check Submit Button is active or not
        




    } )


    test("Backend function is calling" ,async()=>{

         const wrapper=shallow(<MakeLabel/>)
         console.log(wrapper.debug())
         const instance1=wrapper.instance()
         console.log(instance1)
        // wrapper.find("submit").simulate('click')
        // jest.spyOn(instance1,sendDatatoServer);




    }  )


})