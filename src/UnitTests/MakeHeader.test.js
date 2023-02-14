/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import {fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom'

import { shallow } from "enzyme";
import App from '../App';


import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MakeHeader from 'components/MakeHeader';

import { useEffect } from 'react';

// jest.mock("react")




test("<MakeHeader>" ,()=>{
   const badRoute="/home"


   const {debug}=  render(
       <MemoryRouter initialEntries={[badRoute]}>
          <App />
            
        </MemoryRouter>
      )

       debug();
       
    // expect(screen.getByTestId("apo1")).toBeInTheDocument();

   

    


    
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


    

    