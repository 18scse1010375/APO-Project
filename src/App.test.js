/* eslint-disable no-undef */
import { render ,screen} from '@testing-library/react'
import App from 'App';
import MakeHeader from 'components/MakeHeader';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { LocationDisplay } from 'components/UrlPath';
import Login from 'components/Login';

jest.mock("components/MakeHeader")
// jest.mock("signIn")

import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';


test('full app rendering/navigating', async () => {
    render(<App />, {wrapper: BrowserRouter})
   expect(screen.getByText(/Welcome to APO Manager Console/i)).toBeInTheDocument()
   expect(screen.getByTestId("login")).toBeInTheDocument()

//    await userEvent.click(screen.getByText(/Login/i))

 })

 test("Url path is changing on going  different location" ,()=>{
    const route = '/home'

  // use <MemoryRouter> when you want to manually control the history
  const {debug}=render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )
  debug()

  // verify location display is rendered
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)



 }    )






test("navigates Login page bydefault  when you initiate the application", () => {
   
    const root = document.createElement('div');

    document.body.appendChild(root)
    const { debug } = render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>,
        root
    );
    debug();    //return the jsx based on the initialEntries parameters in memory Router 
})



test("After login, All routers are page are accessible or not", () => {

    const root = document.createElement('div');

    document.body.appendChild(root)


    const { debug } = render(
        <MemoryRouter initialEntries={['/home']}>
            <App />
        </MemoryRouter> , root
    )
   
         act(() => {
        const goHomeLink = document.querySelector('#email-link');
       
        goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));


        const p = document.querySelector('#bulk-text');
        p.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        
        });



 })

