/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Demo from './Demo';
import React from 'react';
import Link from 'react-router-dom'

import { shallow } from "enzyme";


import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MakeHeader from './MakeHeader';
import MakeLabel from './MakeLabel';
import MakeCard from './MakeCard';
configure({ adapter: new Adapter() });
 
describe("<Demo/>", () => {
 
  test('render the title of an application', () => {
    render(<Demo/>);
 
    const titleEl = screen.getByText(/Counter Application/);
    expect(titleEl).toBeInTheDocument();
  });
 
  test('render the Powered By text', () => {
    render(<Demo/>);
 
    const poweredByEl = screen.queryByText(/powered by/i);
    expect(poweredByEl).toBeInTheDocument();
});

// test('render the Powered By text', () => {
//         let wrapper=shallow(<Demo/>);
//     // render( <MakeHeader/> )
//     expect(wrapper.getByTestId("powered-by")).toBeInTheDocument();
  
// });







test('render the Powered By link', () => {
    render(<Demo />);
 
    const poweredByLink = screen.getByTestId("powered-by");
    expect(poweredByLink).toHaveAttribute("title");
    expect(poweredByLink).toHaveAttribute("href", "https://www.cluemediator.com/");
  });
 
  test('render initial counter text', () => {
    render(<Demo/>);
 
    const counterText = screen.getByTestId("counter-text");
    expect(counterText).toHaveClass("counter");
    expect(counterText).toHaveTextContent("0");
  });

  test('render buttons', () => {
    render(<Demo />);
 
    const btnIncrement = screen.getByTestId("btn-increment");
    const btnDecrement = screen.getByTestId("btn-decrement");
 
    expect(btnIncrement).toBeInTheDocument();
    expect(btnIncrement.textContent).toEqual("Increment");
 
    expect(btnDecrement).toBeInTheDocument();
    expect(btnDecrement.textContent).toEqual("Decrement");
  });






})
 