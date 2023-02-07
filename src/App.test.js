/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {LocationDisplay} from './app'
import App from './app'
import { shallow } from "enzyme";
import Login from './components/Login'

import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test("Component is successfully Rendered or not" , ()=>{let wrapper=shallow(<Login/>) ; expect(wrapper).toBeDefined();  }     )

test('full app rendering/navigating', async () => {
  render(<App/>, {wrapper: BrowserRouter})
  



  // verify page content for default route
  expect(screen.getByText(/Welcome to APO Manager Console/i)).toBeInTheDocument()
  const button1 = screen.getByTestId("login");
    expect(button1).toBeInTheDocument();
    expect(button1.textContent).toEqual(" Login ");
    expect(button1.getAttribute("disabled")).toBe(null) 
    

    // await userEvent.click(screen.getByText(/ APO Console/i))
    // expect(screen.getByText(/APO Console/i)).toBeInTheDocument();

     // use <MemoryRouter> when you want to manually control the history
     
})

test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )

    // verify navigation to "no match" route
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
})


test('landing on a Home', () => {
    const badRoute = '/home'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    // expect(screen.getByTestId("email")).toBeInTheDocument();
})

    // verify navigation to "no match" route})





