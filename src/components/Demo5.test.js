/* eslint-disable no-undef */
import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { Demo5 } from './Demo5'


import {configure,shallow,mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter : new Adapter()   })



test("testcase1" ,async()=>{

    let wrapper=mount( <Demo5/> )
    console.log(wrapper.debug())


    // let wrapper=shallow(<Demo5/>)
    // console.log(wrapper.find("increse").dive() )
    // console.log(wrapper.debug())
    // let instance1=wrapper.instance()
    // console.log(instance1)
     //jest.spyOn(instance1,'increase')
    // expect(instance1,'increase').toHaveBeenCalled();




}  )