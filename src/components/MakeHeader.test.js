/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import MakeHeader from './MakeHeader';
import React from 'react';
import { shallow } from "enzyme";
import { Link } from "react-router-dom"
import App from '../App';
import { BrowserRouter,MemoryRouter} from 'react-router-dom'





describe("<MakeHeader/>", () => {
    const badRoute = '/home'

    test("Check Components is successfully rendered or not",()=>{let wrapper=shallow(<MakeHeader/>) ; expect(wrapper).toBeDefined() } )
 
    test('Check the Home Components Elements of an application', () => {
        let wrapper=shallow(<MakeHeader/>) ;

        console.log(wrapper.debug())
     
      expect(wrapper.contains(  <div className="APO" > <Link id="apo-console" to="/home" >  APO Console  </Link> </div> ) )
      expect(wrapper.contains( <div className="email-suppresion"> <Link id="email" to="/email-suppresion"> Email Suppression </Link> </div>))
      expect(wrapper.contains( <div className="bulk-email-sent"> <Link id="bulk" to="/bulk-email-sent" > Bulk Emails </Link> </div>  ))
     });

    test("Check Header",()=> {
     render(
        <MemoryRouter initialEntries={[badRoute]}>
          <App/>
            
        </MemoryRouter>

      )

      // expect(screen.getByTestId("apo")).toBeInTheDocument()


     }
    )
    


    // test("Check All the Home Components icons exists" ,()=>{  render( <App/>, {wrapper: BrowserRouter}) ; expect(screen.getByTestId("apo") ).toBeInTheDocument()  }  )

})