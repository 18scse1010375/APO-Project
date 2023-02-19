/* eslint-disable no-undef */
import React from "react";

import {cleanup, render,waitForElementToBeRemoved,act,waitForElement} from '@testing-library/react'

import AxiosMock from './axios'
import { ServerTesting } from "./TestAxios";

afterEach(cleanup)

test("Api" ,async ()=>{

    AxiosMock.get.mockResolvedValue({data: {id:8,title:"abc" , description:"pqr" } } )

    const url="http://localhost:9090/courses"

    const {getByText ,  getByTestId   } = render( <ServerTesting url={url}/> )

    expect(getByText("Loading...").textContent).toBe("Loading...")

    await act(async ()=>{
        await waitForElementToBeRemoved( ()=>getByText("Loading...")   );


    })


    // const resolveElement=await waitForElement( ()=>getByTextId("title")  )

    // expect(resolveElement.textContent).toBe("abc")

   
      

}  )