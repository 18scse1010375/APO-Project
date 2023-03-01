/* eslint-disable no-undef */
import React from "react";

import {cleanup, render,waitForElementToBeRemoved,act,waitForElement} from '@testing-library/react'

import AxiosMock from './axios'
import axios from "axios";
import { TestAxios } from "./TestAxios";

// jest.mock("axios");

afterEach(cleanup)

// test("Api" ,async ()=>{

//     AxiosMock.get.mockResolvedValue({data: {id:8,title:"abc" , description:"pqr" } } )

//     const url="http://localhost:9090/courses"

//     const {getByText ,  getByTestId   } = render( < TestAxios url={url}/> )

//     expect(getByText("Loading...").textContent).toBe("Loading...")

//     await act(async ()=>{
//         waitForElementToBeRemoved( ()=>getByText("Loading...")   );


//     })


    test("api test",()=>{
        jest.spyOn(axios, 'get').mockResolvedValueOnce({id:9,title:"abc" , description:"aa" });
        // AxiosMock.get.mockResolvedValue({data: {id:8,title:"abc" , description:"pqr" } } )
        axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: {} }));

        // axios.get.mockImplementation(() => Promise.resolve({ data: {} }));
        const url="http://localhost:9090/courses"
        const {getByText ,  getByTestId   } = render( < TestAxios url={url}/> )

        // TestAxios.then(data => expect(data).toEqual({}));

        // expect(AxiosMock.get).toHaveBeenCalledTimes(1)
          expect(axios.get).toHaveBeenCalledTimes(1)     
       





    })

    test("api reject" ,()=>{
        jest.spyOn(axios, 'get').mockResolvedValueOnce({id:9,title:"abc" , description:"aa" });
        // axios.get.mockImplementation(() => Promise.reject({}));

        const url="http://localhost:9090/courses"
        const {getByText ,  getByTestId   } = render( < TestAxios url={url}/> )
    } )



//    expect(AxiosMock.get).toHaveBeenCalledTimes(1)
    //  expect(AxiosMock.get).toHaveBeenCalledWith(url)

   
   
      