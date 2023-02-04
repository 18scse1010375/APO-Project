/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// import Demo from './Demo';
import Extra from './Extra';
// import MakeHeader from './MakeHeader';



import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("<Login/>", () => {
 
    test('render the title of an application', () => {
      render(<Extra/>);
   
      const titleEl = screen.getByText(/Welcome to APO Manager Console/);
      expect(titleEl).toBeInTheDocument();
     
    });

})