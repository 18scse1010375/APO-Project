/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom'

import { shallow } from "enzyme";
import App from '../App';

import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BulkEmail from 'components/BulkEmail';


jest.mock('components/MakeHeader');

describe("Check the functionality of Bulk Email" ,()=>{

    const badRoute = '/bulk-email-sent'

    test("Verify Email Suppression is successfuly rendered or not"  ,()=>{

    let wrapper=shallow( <BulkEmail/> )
      expect(wrapper).toBeDefined();

    } )


    test("Check All Functionality" ,()=>{

        render(
            <MemoryRouter initialEntries={[badRoute]}>
              <App/>
                
            </MemoryRouter>
          )
        // assert
          expect(screen.getByTestId("file-input")).toBeInTheDocument(); //check wheather file input box render successfully
         expect(screen.getByTestId("upload")).toBeInTheDocument(); //verify the upload button presence
         expect(screen.getByTestId("upload").textContent).toEqual("Upload On Server!") //verify the button content match or not
         expect(screen.getByTestId("upload").getAttribute("disabled")).toBe(null) //check wheather the Button is enabled or not



    }  )




}  )