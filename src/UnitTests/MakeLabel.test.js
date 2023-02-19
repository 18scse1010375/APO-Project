/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import {render, screen,fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios';

import { renderHook,act } from '@testing-library/react';

import React from 'react'
import '@testing-library/jest-dom'
import { mount, shallow } from "enzyme";

import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import MakeLabel from 'components/MakeLabel'
import App from '../App';
import { wrap } from 'module';

jest.mock('components/MakeHeader');
jest.spyOn(console, "error").mockImplementation(() => {});



describe("Check the functionality of Email Suppression" ,()=>{
    const badRoute = '/email-suppresion'
    

     

     

    test("Verify <Email Suppression/> is successfully rendered or not" ,()=>{

        let wrapper=shallow(<MakeLabel/>);
        expect(wrapper).toBeDefined();
    });

    test("renders component", () => {
      const { container } = render(<MakeLabel/>);
      expect(container).toMatchSnapshot();
    });

  
  

     test("Testing for Api Integration", () => {
      const sendDataToServer = jest.fn();
      // const user = {
      //   firstName: "Mo",
      //   lastName: "Dwina",
      //   email: "b@b.com",
      //   id: "123",
      // };
      const email="singhalarun03@gmail.com"
      // const { queryByText } = render(
      //   <UserCard user={user} handleDelete={handleDelete} />
      // );


      const {queryByText} = render(
        <MemoryRouter initialEntries={[badRoute]}>
          <App />
            
        </MemoryRouter>
           )


    
      const button = queryByText("Submit");
      console.log(button)
      fireEvent.click(button);
    
     
      //  expect(sendDataToServer).toHaveBeenCalledTimes(1);
    });



    test('should throw error when axios post error', () => {
      jest.mock('axios')
      const mockedMouseEvent = {
        preventDefault: jest.fn()
      };
      const mockedError = new Error('network error');
      const wrapper = shallow(<MakeLabel/>);
      expect(wrapper.find('button')).toHaveLength(1);
      // (axios.post as jest.MockedFunction).mockRejectedValueOnce(mockedError);

      const consoleLogSpyOn = jest.spyOn(console, 'log');
      
      wrapper.find('button').simulate('click', mockedMouseEvent);
      expect(wrapper.find('button').text()).toBe('Submit');
      //  expect(axios.post).toBeCalledWith('/logout');

    })
    //   (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce(mockedError);
    //   const consoleLogSpyOn = jest.spyOn(console, 'log');
    //   wrapper.find('button').simulate('click', mockedMouseEvent);
    //   expect(wrapper.find('button').text()).toBe('Logout');
    //   expect(axios.post).toBeCalledWith('/logout');

    //   setImmediate(() => {
    //     expect(consoleLogSpyOn).toBeCalledWith(mockedError);
    //     consoleLogSpyOn.mockRestore();
    //     done();
    //   });
    // });



















































  

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
      const sendDataToServerSpy = jest.fn();
      const badRoute="/email-suppresion"

  

      const {debug}=render(
        <MemoryRouter initialEntries={[badRoute]}>
          <App />
        </MemoryRouter>
      )

      debug();
    const inputEl = screen.getByTestId("email-input");
     userEvent.type(inputEl, "test@mail.com");
    console.log("Value are:" , document.getElementById("email-box").value)
 
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");  //check that i am able to pass the value in input box

    const btn=screen.getByTestId("submit")


    fireEvent.click(btn); //verification for the click event

    expect(screen.getByTestId("status"))

  //  expect(screen.getByTestId("200")).toBeInTheDocument();
    // expect(screen.getByTestId('status')).toHaveTextContent('200');


      })




  })