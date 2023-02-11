/* eslint-disable no-undef */
import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { Demo5 } from './Demo5'



configure( { adapter : new Adapter()   } )

import Adapter from 'enzyme-adapter-react-17-updated'
import {configure,shallow,mount} from 'enzyme'



test("testcase1" ,async()=>{

    let wrapper=mount( <Demo5/> )
    console.log(wrapper.debug())
    const instance1=wrapper.instance()
    console.log(instance1)


    // let wrapper=shallow(<Demo5/>)
    // console.log(wrapper.find("increse").dive() )
    // console.log(wrapper.debug())
    // let instance1=wrapper.instance()
    // console.log(instance1)
     //jest.spyOn(instance1,'increase')
    // expect(instance1,'increase').toHaveBeenCalled();

}  )