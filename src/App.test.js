/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { ListGroupItem,ListGroup } from "reactstrap";


import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import App from 'App'
import { shallow } from "enzyme";
import Login from 'components/Login';

import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import MakeCard from './components/MakeCard';



jest.mock('./components/MakeHeader');




// test(" Default Component is successfully Rendered or not" , ()=>{let wrapper=shallow(<Login/>) ; expect(wrapper).toBeDefined();  }     )

// test('full app rendering/navigating', async () => {
//   render(<App/>, {wrapper: BrowserRouter})
  



  // verify page content for default route
//   expect(screen.getByText(/Welcome to APO Manager Console/i)).toBeInTheDocument()
//   const button1 = screen.getByTestId("login");
//     expect(button1).toBeInTheDocument();
//     expect(button1.textContent).toEqual(" Login ");
//     expect(button1.getAttribute("disabled")).toBe(null)   //check the button is active or not
    

// //     // await userEvent.click(screen.getByText(/ APO Console/i))
// //     // expect(screen.getByText(/APO Console/i)).toBeInTheDocument();

// //      // use <MemoryRouter> when you want to manually control the history
     
// })


describe("<MakeCard>", ()=>{   
    const badRoute="/home"
test('landing on a Home', () => {
    
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
       
      </MemoryRouter>
    )

    expect(screen.getByTestId("card1")).toBeInTheDocument();

    //  expect(screen.getByTestId('location-display')).toHaveTextContent(badRoute)

//     expect(screen.getByTestId("card1")).toBeInTheDocument();   //verify the  Card1 is successfully rendered or not
//     expect(screen.getByTestId("card2")).toBeInTheDocument();  //verify the  Card2 is successfully rendered or not





    
//     expect(screen.getByTestId("email-link")).toBeInTheDocument();   //verify the email suppression button inside card
//     expect(screen.getByTestId("bulk-email-link")).toBeInTheDocument();   //verify the email suppression button inside card
     
//   expect(screen.getByTestId("Email-Icon")).toBeInTheDocument();   //verify the email icon components inside the card
//   expect(screen.getByTestId("bulk-email-icon")).toBeInTheDocument();   //verify the Bulk-email-icon icon components inside the card



     
})

})



// test("Should render default page components which is Login component", () => {
//     // Arrange
//     Login.mockImplementation(() => <div>LoginMock</div>);

//     render(
//         <MemoryRouter>
//           <App/>
//         </MemoryRouter>
//       );


//       // Assert
//     // expect(screen.getByText("Welcome to APO Manager Console")).toBeInTheDocument();
//     expect(screen.getByText("LoginMocl")).toBeInTheDocument();




// })





// test('landing on a Home page', async () => {
//     // let wrapper=mount(<MakeCard/>)
//     //  Login.mockImplementation(() => <div> LoginMock </div>     );
  
  
//     // use <MemoryRouter> when you want to manually control the history
//     // render(
//     //   <MemoryRouter>
//     //     <App/>
//     //   </MemoryRouter>,
//     //   )


//     render(<App />, {wrapper: BrowserRouter})

//     expect(screen.getByTestId("apo")).toBeInTheDocument();
// })


