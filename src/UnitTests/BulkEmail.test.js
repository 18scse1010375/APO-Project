/* eslint-disable no-undef */
import { render, screen ,fireEvent,userEvent,waitFor} from '@testing-library/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom'

import { shallow , mount  } from "enzyme";
import App from '../App';

import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BulkEmail from 'components/BulkEmail';

import axios from 'axios';



jest.mock('components/MakeHeader');

describe("Check the functionality of Bulk Email" ,()=>{

    const badRoute = '/bulk-email-sent'

    test("Verify Bulk Email  is successfuly rendered or not"  ,()=>{

    let wrapper=shallow( <BulkEmail/> )
      expect(wrapper).toBeDefined();

    } )


    test("Check All Functionality" ,async ()=>{

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


         const buttonElement = screen.getByRole("button");


        await fireEvent.click(buttonElement)
          screen.debug();

    

         



    }  )

    // const onClick = jest.fn()
//     test("Btn1 click", () => {
//       const wrapper = shallow(<BulkEmail />);
//       const btn=wrapper.find("button")
//       btn.simulate("click")
//       expect(onClick).toHaveBeenCalledTimes(1);







//       // expect(wrapper.find('p').text()).toBe('');
//       // btn.simulate("click")
//       // // expect(wrapper.find("p").text()).toBe("Please upload  Excel file first!!!")
// });

test("File is successfully uploaded or not",()=>{


  const {debug}=render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App/>
        
    </MemoryRouter>
  )
  debug();




})

it('should not show preview if no file has been selected', () => {
  const component=shallow(<BulkEmail/>)
  expect(component.find('input[type="file"]')).toBeTruthy();
  expect(component.find("input").prop("id")).toBe("file-upload")

  // const p=component.find("preview")
  expect(component.find('preview').textContent).toBe(undefined)
});

test("Function is calling successfully after uploading" ,()=>{
  //  const onUploadClickMock = jest.fn();

  const component=shallow(<BulkEmail/>)

      expect(component.find('button')).toBeTruthy()

      component.find('button').simulate('click')

} )  


test(`Should fire change event on file upload`, async () => {

  
  const {debug}=render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App/>
        
    </MemoryRouter>
  )


  const testImageFile = new File(["hello"], "hello.png", { type: "image/png" });
  const fileInput = screen.getByTestId("file-input");

expect(fileInput).toBeInTheDocument();
expect(fileInput.files.length).toBe(0);  //initially input box is empty
 
await waitFor(() =>
  fireEvent.change(fileInput, {             //It will upload my file onto the input ox
    target: { files: [testImageFile] },
  })
  )

 expect(fileInput.files.length).toBe(1) // verify file is successfully uploaded 

 expect(fileInput.files[0].name).toBe("hello.png")  //verification hello.png is uploaded or not

const button=screen.getByTestId("upload")


jest.spyOn(axios, 'post').mockResolvedValueOnce({id:9,title:"abc" , description:"aa" });

  
await fireEvent.click(button)

  // expect(closeRightSectionSpy).toHaveBeenCalled();


  // axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: {} }));
 expect(axios.post).toHaveBeenCalledTimes(1)  


  // const resetButton = screen.getByRole("button", { name: /reset/i });
  // await userEvent.click(resetButton);






  })




})