/* eslint-disable no-undef */
import {fireEvent, render,screen} from '@testing-library/react'  
import ApiDemo from './ApiDemo'
import axios from 'axios'

//  jest.mock("axios")

test("Checking Axios" ,()=>{
    const users = [{name: 'Bob'}];
   const resp = {data: users};
    
     const {debug}=render(<ApiDemo/>)
       debug();
      expect(screen.getByTestId("demo")).toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
      const button=screen.getByRole("button")
      fireEvent.click(button)

    //   axios.get.mockResolvedValue(resp) ;
    //   jest.spyOn(axios, 'get').mockResolvedValueOnce({id:9,title:"abc" , description:"aa" });
    // jest.spyOn(ApiDemo,"getDataFromServer").mockResolvedValueOnce({id:9,title:"abc" , description:"aa" })
    //   axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: {} }));
      
    //   return ApiDemo.getDataFromServer().then(data => expect(data).toEqual({id:9,title:"abc",description:"aa" }));




    //   return ApiDemo.getDataFromServer().then(data=>expect(data).toEqual({}  ))






     }  )

